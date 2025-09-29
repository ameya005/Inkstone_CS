import React, { useState, useEffect } from 'react';
import InterviewChat from './InterviewChat';
import CodeEditor from './CodeEditor';

interface Question {
  id: string;
  title: string;
  difficulty: string;
  category: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  constraints: string[];
}

interface InterviewSession {
  session_id: string;
  question: Question;
  user_code: string;
  conversation: Array<{
    role: string;
    content: string;
    timestamp: string;
  }>;
  start_time: string;
  scores: Record<string, number>;
  feedback: string[];
}

interface InterviewEvaluation {
  scores: {
    problem_understanding: number;
    approach: number;
    code_quality: number;
    technical_knowledge: number;
    communication: number;
    debugging: number;
    overall: number;
  };
  recommendation: 'HIRE' | 'NO HIRE' | 'BORDERLINE';
  strengths: string[];
  improvements: string[];
  feedback: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8001';

interface InterviewDashboardProps {
  onInterviewComplete?: (evaluation: InterviewEvaluation) => void;
}

export default function InterviewDashboard({ onInterviewComplete }: InterviewDashboardProps = {}) {
  const [session, setSession] = useState<InterviewSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [code, setCode] = useState<string>('');
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);

  // Auto-start interview when component mounts
  useEffect(() => {
    startNewInterview();
  }, []);

  const startNewInterview = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/sessions/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error('Failed to start interview session');
      }

      const newSession = await response.json();
      setSession(newSession);
      setCode('# Write your solution here\n');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start interview');
    } finally {
      setIsLoading(false);
    }
  };

  const submitCode = async () => {
    if (!session) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/sessions/${session.session_id}/submit-code`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            session_id: session.session_id,
            code: code,
            language: 'python',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit code');
      }

      const evaluation = await response.json();
      console.log('Code evaluation:', evaluation);
      // Update session with evaluation results
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit code');
    } finally {
      setIsLoading(false);
    }
  };

  const updateSessionCode = async () => {
    if (!session) return;

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/sessions/${session.session_id}/update-code`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            session_id: session.session_id,
            code: code,
            language: 'python',
          }),
        }
      );

      if (!response.ok) {
        console.warn('Failed to update session code');
      }
    } catch (err) {
      console.warn('Error updating session code:', err);
    }
  };

  const sendMessage = async (message: string) => {
    if (!session) return '';

    try {
      // First, update the session with current code
      await updateSessionCode();

      const response = await fetch(
        `${API_BASE_URL}/api/chat/${session.session_id}/message`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            session_id: session.session_id,
            message: message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();

      // Check if interview has ended
      if (result.interview_ended) {
        setShowCompletionModal(true);
        setIsEvaluating(true);

        // Small delay for modal display, then trigger evaluation
        setTimeout(() => {
          setIsEvaluating(false);
          if (onInterviewComplete && result.evaluation) {
            onInterviewComplete(result.evaluation);
          }
        }, 2000);
      }

      return result.message;
    } catch (err) {
      console.error('Failed to send message:', err);
      return 'Sorry, I encountered an error. Please try again.';
    }
  };

  if (!session) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-50">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Interview Coach</h1>
            <p className="text-gray-600">Practice coding interviews with AI guidance</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
              {error}
            </div>
          )}

          <button
            onClick={startNewInterview}
            disabled={isLoading}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Starting Interview...' : 'Start New Interview'}
          </button>

          <div className="text-sm text-gray-500 max-w-md mx-auto">
            <p>🤖 AI interviewer will guide you through coding problems</p>
            <p>💻 Write code in the integrated editor</p>
            <p>📊 Get real-time feedback on your solutions</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="h-full flex">
        {/* Left Panel - AI Interviewer */}
        <div className="w-1/2 border-r border-gray-200">
          <InterviewChat
            session={session}
            onSendMessage={sendMessage}
            currentCode={code}
          />
        </div>

        {/* Right Panel - Code Editor */}
        <div className="w-1/2 flex flex-col">
          <div className="border-b border-gray-200 p-4 bg-white">
            <h2 className="text-lg font-semibold text-gray-900">
              {session.question.title}
            </h2>
            <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
              session.question.difficulty === 'easy'
                ? 'bg-green-100 text-green-800'
                : session.question.difficulty === 'medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {session.question.difficulty}
            </span>
          </div>

          <CodeEditor
            value={code}
            onChange={setCode}
            onSubmit={submitCode}
            isLoading={isLoading}
          />
        </div>
      </div>

      {/* Interview Completion Modal */}
      {showCompletionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Interview Complete!
              </h3>
              {isEvaluating ? (
                <div className="space-y-3">
                  <p className="text-gray-600">Analyzing your performance...</p>
                  <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600">Preparing your results...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}