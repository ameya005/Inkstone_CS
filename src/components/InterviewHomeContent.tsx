import React from "react";

interface InterviewHomeContentProps {
  onStartInterview: () => void;
}

export default function InterviewHomeContent({ onStartInterview }: InterviewHomeContentProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start relative rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip relative flex-1 w-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-[24px] py-[32px] relative w-full h-full">

          {/* Welcome Section */}
          <div className="flex flex-col items-center w-full mb-12">
            <div className="text-center space-y-6 max-w-2xl">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-900">Welcome to Interview Coach</h1>
                <p className="text-xl text-gray-600">Master coding interviews with AI-powered practice sessions</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 rounded-lg bg-blue-50 border border-blue-100">
                  <div className="text-3xl mb-3">🤖</div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI Interviewer</h3>
                  <p className="text-sm text-gray-600">Get personalized feedback and hints from our intelligent interview coach</p>
                </div>

                <div className="text-center p-6 rounded-lg bg-green-50 border border-green-100">
                  <div className="text-3xl mb-3">💻</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Live Coding</h3>
                  <p className="text-sm text-gray-600">Write and test your solutions in our integrated code editor</p>
                </div>

                <div className="text-center p-6 rounded-lg bg-purple-50 border border-purple-100">
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Real-time Feedback</h3>
                  <p className="text-sm text-gray-600">Get instant evaluation of your code quality and approach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Start Interview Section */}
          <div className="flex flex-col items-center w-full">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-center text-white shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Ready to Practice?</h2>
              <p className="text-blue-100 mb-6">Start a mock coding interview and improve your skills</p>

              <button
                onClick={onStartInterview}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
              >
                🚀 Start New Interview
              </button>
            </div>

            {/* Recent Activity */}
            <div className="mt-12 w-full max-w-4xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Progress</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">0</div>
                  <div className="text-sm text-gray-600">Interviews Completed</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">0</div>
                  <div className="text-sm text-gray-600">Problems Solved</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">-</div>
                  <div className="text-sm text-gray-600">Average Score</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">0</div>
                  <div className="text-sm text-gray-600">Hours Practiced</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 w-full max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer">
                  <h4 className="font-semibold text-gray-900 mb-2">🎯 Algorithm Practice</h4>
                  <p className="text-sm text-gray-600">Practice common coding patterns and algorithms</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer">
                  <h4 className="font-semibold text-gray-900 mb-2">🏗️ System Design</h4>
                  <p className="text-sm text-gray-600">Learn to design scalable systems step-by-step</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer">
                  <h4 className="font-semibold text-gray-900 mb-2">💬 Behavioral Questions</h4>
                  <p className="text-sm text-gray-600">Practice answering common interview questions</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer">
                  <h4 className="font-semibold text-gray-900 mb-2">📈 Performance Tracking</h4>
                  <p className="text-sm text-gray-600">Monitor your progress and improvement over time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}