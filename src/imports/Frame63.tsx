import React, { useState, useRef, useEffect } from "react";
import svgPaths from "./svg-ffc0rs1z9l";
import svgPathsPractice from "./svg-n04nuns4if";
import svgPathsFlashcard from "./svg-edspiefgdj";
import svgPathsResources from "./svg-okgd66eend";
import svgPathsInformation from "./svg-w228q5qsx5";
import imgPPE from "figma:asset/36fec1d550533e2313ff457d4ea014ec78af1074.png";

// Simple markdown parser for basic formatting
const parseMarkdown = (text: string): string => {
  return text
    // Bold text: **text** -> <strong>text</strong>
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-800">$1</strong>')
    // Italic text: *text* -> <em>text</em>
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    // Headers: ### text -> <h3>text</h3>
    .replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold mt-4 mb-2 text-gray-800">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold mt-4 mb-2 text-gray-800">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-4 mb-2 text-gray-800">$1</h1>')
    // Numbered lists: 1. text -> <ol><li>text</li></ol>
    .replace(/^\d+\.\s+(.*$)/gm, '<li class="ml-4 mb-1">$1</li>')
    // Bullet points: - text -> <ul><li>text</li></ul>
    .replace(/^-\s+(.*$)/gm, '<li class="ml-4 mb-1 list-disc">$1</li>')
    // Emojis and line breaks
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>')
    // Wrap consecutive list items in proper list tags
    .replace(/(<li class="ml-4 mb-1">.*?<\/li>(\s*<br>)*)+/gs, (match) => {
      if (match.includes('list-disc')) {
        return `<ul class="list-disc ml-6 mb-4">${match.replace(/<br>/g, '').replace(/class="ml-4 mb-1 list-disc"/g, 'class="mb-1"')}</ul>`;
      } else {
        return `<ol class="list-decimal ml-6 mb-4">${match.replace(/<br>/g, '').replace(/class="ml-4 mb-1"/g, 'class="mb-1"')}</ol>`;
      }
    });
};

// Tab types
type AssistantTab = 'chat' | 'practice' | 'flashcard' | 'resources' | 'information';

function X({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[24px] cursor-pointer hover:bg-gray-100 rounded p-1 transition-colors" 
      data-name="x"
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x">
          <path d="M17 7L7 17M7 7L17 17" id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame114({ onClose, title }: { onClose?: () => void; title: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[12px] pr-0 py-0 relative w-full">
          <p className="basis-0 font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[24px] text-black" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            {title}
          </p>
          <X onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

// Chat & Audio Tab Components
function Microphone02() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="microphone-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="microphone-02">
          <path d={svgPaths.p271cb500} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#6155f5] content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[70px] cursor-pointer hover:bg-[#524cc9] transition-colors">
      <Microphone02 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[rgba(97,85,245,0.1)] box-border content-stretch flex gap-[10px] items-center p-[10px] relative rounded-[999px] shrink-0">
      <Frame64 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[rgba(97,85,245,0.1)] box-border content-stretch flex gap-[10px] items-center p-[10px] relative rounded-[999px] shrink-0">
      <Frame65 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Frame66 />
      <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Press and hold to ask anything
      </p>
    </div>
  );
}

function QuickActionButton({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <div 
      className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[10px] py-[8px] relative rounded-[99px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors" 
      data-name="button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#6155f5] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start justify-center relative shrink-0 w-full">
      <QuickActionButton text="Ask about this step" />
      <QuickActionButton text="Translate to French" />
      <QuickActionButton text="Summarize Section" />
      <QuickActionButton text="Save for offline" />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
      <Frame113 />
      <Frame112 />
    </div>
  );
}

function Send01() {
  return (
    <div className="relative shrink-0 size-[24px] cursor-pointer hover:bg-gray-100 rounded p-1 transition-colors" data-name="send-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="send-01">
          <path d={svgPaths.p28b9b780} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5({ inputValue, setInputValue, onSend, isLoading }: {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="bg-[rgba(255,255,255,0.24)] h-[48px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[1.068px] border-solid border-white inset-[-1.068px] pointer-events-none rounded-[9.06825px] shadow-[0px_4.273px_34.184px_-4.273px_rgba(99,140,243,0.32)]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[48px] items-center justify-between px-[9px] py-[7px] relative w-full">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask anything you need"
            disabled={isLoading}
            className="font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[normal] text-[#5b738b] text-[16px] bg-transparent border-none outline-none flex-1 placeholder-[#5b738b]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          />
          <div onClick={onSend} className={`cursor-pointer ${isLoading ? 'opacity-50' : 'hover:bg-gray-100 rounded p-1 transition-colors'}`}>
            <Send01 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame76({ inputValue, setInputValue, onSend, isLoading }: {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[17.36px] items-center relative shrink-0 w-full">
      <Frame5
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSend={onSend}
        isLoading={isLoading}
      />
    </div>
  );
}

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  followUp?: string[];
}

function TypingIndicator() {
  return (
    <div className="flex w-full mb-4 justify-start">
      <div className="max-w-[80%] rounded-lg px-4 py-3 bg-gray-100 text-black">
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
  );
}

function FollowUpSuggestions({ suggestions, onSelect }: { suggestions: string[]; onSelect: (suggestion: string) => void }) {
  if (!suggestions || suggestions.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => onSelect(suggestion)}
          className="px-3 py-1 text-xs bg-blue-50 text-[#6155f5] rounded-full border border-[#6155f5] hover:bg-blue-100 transition-colors"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}

function ChatMessage({ message, onFollowUp }: { message: ChatMessage; onFollowUp?: (question: string) => void }) {
  return (
    <div className={`flex w-full mb-4 ${message.isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
        message.isUser
          ? 'bg-[#6155f5] text-white'
          : 'bg-gray-100 text-black'
      }`}>
        <div
          className="text-sm font-medium"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(message.text) }}
        />
        <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
          {message.timestamp.toLocaleTimeString()}
        </p>
        {!message.isUser && message.followUp && onFollowUp && (
          <FollowUpSuggestions suggestions={message.followUp} onSelect={onFollowUp} />
        )}
      </div>
    </div>
  );
}

function ChatMessages({ messages, isTyping, onFollowUp }: {
  messages: ChatMessage[];
  isTyping: boolean;
  onFollowUp: (question: string) => void;
}) {
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (messages.length === 0 && !isTyping) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <Frame111 />
      </div>
    );
  }

  return (
    <div className="flex-1 w-full overflow-y-auto px-4 py-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} onFollowUp={onFollowUp} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
}

function ChatTab({ activeTab, currentPage, isAssessmentMode, userLevel }: { activeTab?: AssistantTab; currentPage?: string; isAssessmentMode?: boolean; userLevel?: 'beginner' | 'expert' }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationContext, setConversationContext] = useState<string[]>([]);

  // Automatically determine screen context based on active tab and global state
  const getScreenContext = () => {
    // First check if we're globally in assessment mode
    if (isAssessmentMode || currentPage === 'assessments') {
      return 'assessment';
    }

    // Then check the assistant panel tab
    switch (activeTab) {
      case 'practice':
        return 'practice';
      case 'flashcard':
        return 'assessment';
      default:
        return 'learning';
    }
  };

  const screenContext = getScreenContext();

  const handleFollowUp = (question: string) => {
    setInputValue(question);
    sendMessage(question);
  };

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue.trim();
    if (!textToSend || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: textToSend,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setConversationContext(prev => [...prev, textToSend]);
    if (!messageText) setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/chat/ask-question`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: textToSend,
          context: conversationContext.slice(-3).join(' | '), // Last 3 messages for context
          currentSlide: 'Current learning content',
          userLevel: userLevel || 'beginner',
          screenContext: screenContext
        }),
      });

      const data = await response.json();

      if (data.success) {
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          isUser: false,
          timestamp: new Date(),
          followUp: data.followUp || [
            "Tell me more about this",
            "How do I apply this?",
            "What are the safety considerations?"
          ]
        };

        setMessages(prev => [...prev, botMessage]);
        setConversationContext(prev => [...prev, data.response]);
      } else {
        throw new Error('Failed to get response');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full h-full">
      <ChatMessages
        messages={messages}
        isTyping={isLoading}
        onFollowUp={handleFollowUp}
      />

      {/* Persona Controls */}
      <div className="w-full px-4 py-2 border-t border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs text-gray-600">Demo Personas:</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-xs text-gray-500">
            Context: <span className="font-medium text-gray-700 capitalize">{screenContext}</span> (auto)
          </div>
        </div>
      </div>

      <div className="w-full pt-2">
        <Frame76
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSend={() => sendMessage()}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

// Practice Tab Components
function PracticeQuestion() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Select all required PPE before opening a BESS enclosure.
      </p>
    </div>
  );
}

function PracticeImageSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <PracticeQuestion />
      <div className="aspect-[500/500] relative shrink-0 w-full" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPPE} />
      </div>
    </div>
  );
}

function PracticeOption({ text, isSelected = false, onClick }: { text: string; isSelected?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`h-[40px] relative rounded-[8px] shrink-0 w-full cursor-pointer transition-colors ${
        isSelected ? 'bg-[rgba(97,85,245,0.1)]' : 'bg-white hover:bg-gray-50'
      }`}
      data-name="button"
      onClick={onClick}
    >
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${
        isSelected ? 'border-[#6155f5]' : 'border-[#6155f5]'
      }`} />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[10px] py-[8px] relative w-full">
          <p className={`font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-nowrap whitespace-pre ${
            isSelected ? 'text-[#6155f5]' : 'text-[#6155f5]'
          }`} style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function PracticeOptions({ selectedOptions, setSelectedOptions }: { 
  selectedOptions: Set<string>; 
  setSelectedOptions: React.Dispatch<React.SetStateAction<Set<string>>>; 
}) {
  const options = [
    "Class 0 electrical gloves",
    "Face Shield", 
    "Arc-rated clothing (> 8cal/cm)",
    "Fabric garden gloves"
  ];

  const handleOptionClick = (option: string) => {
    const newSelected = new Set(selectedOptions);
    if (newSelected.has(option)) {
      newSelected.delete(option);
    } else {
      newSelected.add(option);
    }
    setSelectedOptions(newSelected);
  };

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      {options.map((option) => (
        <PracticeOption 
          key={option}
          text={option}
          isSelected={selectedOptions.has(option)}
          onClick={() => handleOptionClick(option)}
        />
      ))}
    </div>
  );
}

function PracticeContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <PracticeImageSection />
    </div>
  );
}

function PracticeButtons({ onSkip, onCheck }: { onSkip?: () => void; onCheck?: () => void }) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div 
        className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors" 
        data-name="button"
        onClick={onSkip}
      >
        <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#6155f5] text-[14px] text-nowrap whitespace-pre">Skip</p>
      </div>
      <div 
        className="bg-[#6155f5] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-[#524cc9] transition-colors" 
        data-name="button"
        onClick={onCheck}
      >
        <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Check Answer</p>
      </div>
    </div>
  );
}

function PracticeCard({ selectedOptions, setSelectedOptions }: { 
  selectedOptions: Set<string>; 
  setSelectedOptions: React.Dispatch<React.SetStateAction<Set<string>>>; 
}) {
  return (
    <div className="bg-gradient-to-r box-border content-stretch flex flex-col from-[#ffffff] gap-[48px] items-start px-[12px] py-[16px] relative rounded-[12px] shrink-0 to-[#ffffff] w-[316px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 316 686\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.10000000149011612\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-5.0327 -68.6 47.59 -7.2319 250.13 686)\\\'><stop stop-color=\\\'rgba(233,187,71,0.2)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(228,104,163,0.2)\\\' offset=\\\'0.18044\\\'/><stop stop-color=\\\'rgba(224,20,255,0.2)\\\' offset=\\\'0.36087\\\'/><stop stop-color=\\\'rgba(136,0,255,0.8)\\\' offset=\\\'0.96852\\\'/></radialGradient></defs></svg>')" }}>
      <PracticeContent />
      <PracticeOptions selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
      <PracticeButtons 
        onSkip={() => console.log('Skip clicked')}
        onCheck={() => console.log('Check answer clicked', Array.from(selectedOptions))}
      />
    </div>
  );
}

function PracticeTab() {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());

  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full h-full py-4">
      <PracticeCard selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
    </div>
  );
}

// Flash Cards Tab Components
function FlashCardQuestion() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        What is the most critical safety gear while operating electrical maintenance ?
      </p>
    </div>
  );
}

function FlashCardContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <FlashCardQuestion />
      <div className="aspect-[500/500] relative shrink-0 w-full" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPPE} />
      </div>
    </div>
  );
}

function RefreshCw03() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="refresh-cw-03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="refresh-cw-03">
          <path d={svgPathsFlashcard.p3bb933e0} id="Icon" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FlipCardButton({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div 
        className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors" 
        data-name="button"
        onClick={onClick}
      >
        <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <RefreshCw03 />
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#6155f5] text-[14px] text-nowrap whitespace-pre">Flip Card</p>
      </div>
    </div>
  );
}

function FlashCard({ isFlipped, onFlip }: { isFlipped: boolean; onFlip: () => void }) {
  return (
    <div className="bg-gradient-to-r box-border content-stretch flex flex-col from-[#ffffff] gap-[48px] items-start px-[12px] py-[16px] relative rounded-[12px] shrink-0 to-[#ffffff] w-[316px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 316 415\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.10000000149011612\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-5.0327 -41.5 47.59 -4.375 250.13 415)\\\'><stop stop-color=\\\'rgba(233,187,71,0.2)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(228,104,163,0.2)\\\' offset=\\\'0.18044\\\'/><stop stop-color=\\\'rgba(224,20,255,0.2)\\\' offset=\\\'0.36087\\\'/><stop stop-color=\\\'rgba(136,0,255,0.8)\\\' offset=\\\'0.96852\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[#6155f5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      {isFlipped ? (
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
          <p className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-black w-full text-center" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Arc-rated clothing and Class 0 electrical gloves are the most critical PPE for electrical maintenance work.
          </p>
        </div>
      ) : (
        <FlashCardContent />
      )}
    </div>
  );
}

function FlashCardContainer() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
      <FlashCard isFlipped={isFlipped} onFlip={() => setIsFlipped(!isFlipped)} />
      <FlipCardButton onClick={() => setIsFlipped(!isFlipped)} />
    </div>
  );
}

function FlashCardTab() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full h-full py-4">
      <FlashCardContainer />
    </div>
  );
}

// Resources Tab Components  
function File06() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="file-06">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="file-06">
          <path d={svgPathsResources.p2c0a2000} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ResourceIcon() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex gap-[10px] items-center justify-center relative rounded-[68px] shrink-0 size-[40px]">
      <File06 />
    </div>
  );
}

function ChevronRightIcon() {
  return (
    <div className="relative size-[16px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-left">
          <path d="M10 12L6 8L10 4" id="Icon" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ResourceButton({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[8px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors" 
      data-name="button"
      onClick={onClick}
    >
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#6155f5] text-[14px] text-nowrap whitespace-pre">Open Source</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
}

function ResourceCard({ title, subtitle, description, onClick }: { 
  title: string; 
  subtitle: string; 
  description: string; 
  onClick?: () => void 
}) {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10.682px] items-start justify-center px-[12.819px] py-[18.16px] relative rounded-[14.955px] shrink-0 w-[318px]">
      <div aria-hidden="true" className="absolute border-[1.068px] border-solid border-white inset-[-1.068px] pointer-events-none rounded-[16.0232px] shadow-[0px_4.273px_12.819px_-4.273px_rgba(99,140,243,0.2)]" />
      <ResourceIcon />
      <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
        <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] relative shrink-0 text-black w-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
              {title}
            </p>
            <p className="font-['Noto_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
              {subtitle}
            </p>
          </div>
          <p className="font-['Noto_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] w-[241.68px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            {description}
          </p>
        </div>
        <ResourceButton onClick={onClick} />
      </div>
    </div>
  );
}

function ResourcesTab() {
  const resources = [
    {
      title: "GEAPP Safety Guide — BESS: PPE & LOTO",
      subtitle: "ev 2.1, 2025 — Sections 3.1, 4.2",
      description: "Class 0 gloves, face shield, and arc-rated clothing required for energised work."
    },
    {
      title: "IEC 62933-5-1 — Safety for stationary energy storage systems", 
      subtitle: "2023 — Clauses 6.2, 7.1",
      description: "Personnel shall use appropriate PPE when accessing energized equipment."
    }
  ];

  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full h-full overflow-y-auto">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 pt-4 pb-4">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            subtitle={resource.subtitle}
            description={resource.description}
            onClick={() => console.log(`Opening resource: ${resource.title}`)}
          />
        ))}
      </div>
    </div>
  );
}

// Information Tab Components
function CheckCircleBroken() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check-circle-broken">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check-circle-broken">
          <path d={svgPathsInformation.p35464b80} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SlashCircle01() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="slash-circle-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="slash-circle-01">
          <path d={svgPathsInformation.p24054700} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AlertTriangle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="alert-triangle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="alert-triangle">
          <path d={svgPathsInformation.p968f180} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function InfoCard({ type, title, description, bgColor, iconBgColor, icon }: {
  type: string;
  title: string;
  description: string;
  bgColor: string;
  iconBgColor: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white relative rounded-[14.955px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[1.068px] border-solid border-white inset-[-1.068px] pointer-events-none rounded-[16.0232px] shadow-[0px_4.273px_12.819px_-4.273px_rgba(99,140,243,0.2)]" />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[10.682px] items-start justify-center px-[12.819px] py-[18.16px] relative w-full">
          <div className={`${iconBgColor} content-stretch flex gap-[10px] items-center justify-center relative rounded-[68px] shrink-0 size-[40px]`}>
            {icon}
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                  {title}
                </p>
              </div>
              <p className="font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black w-[241.68px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InformationTab() {
  const infoCards = [
    {
      type: "do",
      title: "Do",
      description: "Evacuate on hissing/venting/acrid odor/abnormal heat; inform control room.",
      bgColor: "bg-[#e8ffd7]",
      iconBgColor: "bg-[#e8ffd7]",
      icon: <CheckCircleBroken />
    },
    {
      type: "dont",
      title: "Don't",
      description: "Do not spray water on energized DC equipment.",
      bgColor: "bg-[#ffa57c]",
      iconBgColor: "bg-[#ffa57c]", 
      icon: <SlashCircle01 />
    },
    {
      type: "important",
      title: "Important",
      description: "Use the site-approved suppressant; follow emergency response plan / AHJ guidance.",
      bgColor: "bg-[#ffe8ae]",
      iconBgColor: "bg-[#ffe8ae]",
      icon: <AlertTriangle />
    }
  ];

  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full h-full overflow-y-auto">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full pt-4 pb-4">
        {infoCards.map((card, index) => (
          <InfoCard
            key={index}
            type={card.type}
            title={card.title}
            description={card.description}
            bgColor={card.bgColor}
            iconBgColor={card.iconBgColor}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
}

// Navigation Icons
function Stars01({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="stars-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="stars-01">
          <g id="Icon">
            <path d={svgPaths.p21042080} stroke={isActive ? "var(--stroke-0, #6155F5)" : "var(--stroke-0, black)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p30b86b00} stroke={isActive ? "var(--stroke-0, #6155F5)" : "var(--stroke-0, black)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Dice5({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="dice-5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_6_76)" id="dice-5">
          <path d={svgPaths.p11803800} id="Icon" stroke={isActive ? "var(--stroke-0, #6155F5)" : "var(--stroke-0, black)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_6_76">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CheckDone01({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check-done-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check-done-01">
          <path d={svgPaths.pd23a800} id="Icon" stroke={isActive ? "var(--stroke-0, #6155F5)" : "var(--stroke-0, black)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function File05({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="file-05">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="file-05">
          <path d={svgPaths.p14b7ef00} id="Icon" stroke={isActive ? "var(--stroke-0, #6155F5)" : "var(--stroke-0, black)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AnnotationAlert({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="annotation-alert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="annotation-alert">
          <path d={svgPaths.p31e28580} id="Icon" stroke={isActive ? "var(--stroke-0, #6155F5)" : "var(--stroke-0, black)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

// Navigation Tab Component
function NavTab({ isActive, onClick, children }: { isActive: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <div 
      className={`box-border content-stretch flex items-center p-[12px] relative rounded-[99px] shrink-0 size-[48px] cursor-pointer transition-colors ${
        isActive 
          ? 'bg-[rgba(97,85,245,0.2)] shadow-[0px_4.273px_12.819px_-4.273px_rgba(99,140,243,0.2)]' 
          : 'bg-[rgba(255,255,255,0.24)] hover:bg-[rgba(255,255,255,0.4)]'
      }`}
      onClick={onClick}
    >
      {!isActive && (
        <div aria-hidden="true" className="absolute border-[1.068px] border-solid border-white inset-[-1.068px] pointer-events-none rounded-[100.068px] shadow-[0px_4.273px_12.819px_-4.273px_rgba(99,140,243,0.2)]" />
      )}
      {children}
    </div>
  );
}

function Frame75({ activeTab, setActiveTab }: { activeTab: AssistantTab; setActiveTab: (tab: AssistantTab) => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <NavTab isActive={activeTab === 'chat'} onClick={() => setActiveTab('chat')}>
        <Stars01 isActive={activeTab === 'chat'} />
      </NavTab>
      <NavTab isActive={activeTab === 'practice'} onClick={() => setActiveTab('practice')}>
        <Dice5 isActive={activeTab === 'practice'} />
      </NavTab>
      <NavTab isActive={activeTab === 'flashcard'} onClick={() => setActiveTab('flashcard')}>
        <CheckDone01 isActive={activeTab === 'flashcard'} />
      </NavTab>
      <NavTab isActive={activeTab === 'resources'} onClick={() => setActiveTab('resources')}>
        <File05 isActive={activeTab === 'resources'} />
      </NavTab>
      <NavTab isActive={activeTab === 'information'} onClick={() => setActiveTab('information')}>
        <AnnotationAlert isActive={activeTab === 'information'} />
      </NavTab>
    </div>
  );
}

function Frame110({ activeTab, setActiveTab }: { activeTab: AssistantTab; setActiveTab: (tab: AssistantTab) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full bg-white py-4 border-t border-gray-100 mt-auto">
      <Frame75 activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

// Main Tab Content Renderer
function TabContent({ activeTab, currentPage, isAssessmentMode, userLevel }: { activeTab: AssistantTab; currentPage?: string; isAssessmentMode?: boolean; userLevel?: 'beginner' | 'expert' }) {
  switch (activeTab) {
    case 'chat':
      return <ChatTab activeTab={activeTab} currentPage={currentPage} isAssessmentMode={isAssessmentMode} userLevel={userLevel} />;
    case 'practice':
      return <PracticeTab />;
    case 'flashcard':
      return <FlashCardTab />;
    case 'resources':
      return <ResourcesTab />;
    case 'information':
      return <InformationTab />;
    default:
      return <ChatTab activeTab={activeTab} currentPage={currentPage} isAssessmentMode={isAssessmentMode} userLevel={userLevel} />;
  }
}

function Frame77({ activeTab, setActiveTab, currentPage, isAssessmentMode, userLevel }: { activeTab: AssistantTab; setActiveTab: (tab: AssistantTab) => void; currentPage?: string; isAssessmentMode?: boolean; userLevel?: 'beginner' | 'expert' }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full h-full">
      <div className="flex-1 w-full overflow-y-auto px-2">
        <TabContent activeTab={activeTab} currentPage={currentPage} isAssessmentMode={isAssessmentMode} userLevel={userLevel} />
      </div>
      <Frame110 activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Frame20({ onClose, currentPage, isAssessmentMode, userLevel }: {
  onClose?: () => void;
  currentPage?: string;
  isAssessmentMode?: boolean;
  userLevel?: 'beginner' | 'expert';
}) {
  const [activeTab, setActiveTab] = useState<AssistantTab>('chat');

  const getTitle = (tab: AssistantTab) => {
    switch (tab) {
      case 'chat': return 'Assistant';
      case 'practice': return 'Practice';
      case 'flashcard': return 'Flash Cards';
      case 'resources': return 'Sources & Provenance';
      case 'information': return "Do's & Dont's";
      default: return 'Assistant';
    }
  };

  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 flex flex-col">
      <div className="flex flex-col items-center overflow-clip relative flex-1">
        <div className="box-border content-stretch flex flex-col items-center justify-between px-[14px] py-[17px] relative w-full h-full">
          <Frame114 onClose={onClose} title={getTitle(activeTab)} />
          <Frame77 activeTab={activeTab} setActiveTab={setActiveTab} currentPage={currentPage} isAssessmentMode={isAssessmentMode} userLevel={userLevel} />
        </div>
      </div>
    </div>
  );
}

export default function Frame63({ onClose, currentPage, isAssessmentMode, userLevel }: { onClose?: () => void; currentPage?: string; isAssessmentMode?: boolean; userLevel?: 'beginner' | 'expert' }) {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-row items-stretch relative w-full h-full">
        <div className="box-border content-stretch flex gap-[10px] items-stretch pl-0 pr-[8px] py-[8px] relative w-full h-full">
          <Frame20 onClose={onClose} currentPage={currentPage} isAssessmentMode={isAssessmentMode} userLevel={userLevel} />
        </div>
      </div>
    </div>
  );
}