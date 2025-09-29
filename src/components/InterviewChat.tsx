import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface InterviewChatProps {
  session: {
    session_id: string;
    question: {
      title: string;
      description: string;
      examples: Array<{
        input: string;
        output: string;
        explanation?: string;
      }>;
      constraints: string[];
    };
    conversation: Array<{
      role: string;
      content: string;
      timestamp: string;
    }>;
  };
  onSendMessage: (message: string) => Promise<string>;
  currentCode: string;
}

export default function InterviewChat({ session, onSendMessage, currentCode }: InterviewChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with question description
  useEffect(() => {
    if (session && messages.length === 0) {
      const initialMessage: ChatMessage = {
        role: 'assistant',
        content: `Hi! I'm your interview coach. Let's work on this problem together:

**${session.question.title}**

${session.question.description}

**Examples:**
${session.question.examples.map((ex, idx) =>
  `Example ${idx + 1}:
Input: ${ex.input}
Output: ${ex.output}
${ex.explanation ? `Explanation: ${ex.explanation}` : ''}`
).join('\\n\\n')}

**Constraints:**
${session.question.constraints.map(c => `• ${c}`).join('\\n')}

Take your time to understand the problem. What's your initial approach?`,
        timestamp: new Date(),
      };
      setMessages([initialMessage]);
    }
  }, [session]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Maintain input focus after sending message
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    try {
      const response = await onSendMessage(inputValue);

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    "Can you give me a hint?",
    "Is my approach correct?",
    "What's the time complexity?",
    "Help me debug this code"
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 p-4 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-900">AI Interviewer</h2>
        <p className="text-sm text-gray-600">Ask questions, get hints, discuss your approach</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <div className="text-sm">
                {message.role === 'assistant' ? (
                  <div className="prose prose-sm max-w-none [&_p]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mb-2 [&_ul]:mb-2 [&_li]:mb-1">
                    <ReactMarkdown
                      components={{
                        code: ({node, inline, className, children, ...props}) => (
                          inline ?
                            <code className="bg-gray-200 text-gray-800 px-1 rounded text-xs" {...props}>
                              {children}
                            </code> :
                            <pre className="bg-gray-200 text-gray-800 p-2 rounded text-xs overflow-x-auto">
                              <code {...props}>{children}</code>
                            </pre>
                        ),
                        p: ({children}) => <p className="mb-2">{children}</p>,
                        h3: ({children}) => <h3 className="text-base font-semibold mb-2">{children}</h3>,
                        ul: ({children}) => <ul className="mb-2">{children}</ul>,
                        li: ({children}) => <li className="mb-1">{children}</li>
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap">{message.content}</div>
                )}
              </div>
              <div
                className={`text-xs mt-1 ${
                  message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}
              >
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 rounded-lg px-4 py-2">
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-xs text-gray-500 ml-2">AI is thinking...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex flex-wrap gap-2 mb-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => setInputValue(action)}
              className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask the interviewer anything..."
            disabled={isTyping}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}