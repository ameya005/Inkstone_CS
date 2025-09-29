import React from 'react';

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

interface InterviewResultsProps {
  evaluation: InterviewEvaluation;
  onStartNewInterview: () => void;
}

export default function InterviewResults({ evaluation, onStartNewInterview }: InterviewResultsProps) {
  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600 bg-green-100';
    if (score >= 6) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getRecommendationStyle = (recommendation: string) => {
    switch (recommendation) {
      case 'HIRE':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'NO HIRE':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'BORDERLINE':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const rubricLabels = {
    problem_understanding: 'Problem Understanding',
    approach: 'Approach & Methodology',
    code_quality: 'Code Quality',
    technical_knowledge: 'Technical Knowledge',
    communication: 'Communication',
    debugging: 'Debugging & Self-Correction'
  };

  return (
    <div className="h-full bg-gray-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Interview Complete!</h1>
          <p className="text-lg text-gray-600">Here's your detailed performance evaluation</p>
        </div>

        {/* Overall Score & Recommendation */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {evaluation.scores.overall}/10
              </div>
              <div className="text-lg text-gray-600">Overall Score</div>
            </div>
            <div className="text-center">
              <div className={`px-6 py-3 rounded-lg border-2 text-xl font-semibold ${getRecommendationStyle(evaluation.recommendation)}`}>
                {evaluation.recommendation}
              </div>
              <div className="text-sm text-gray-500 mt-2">Recommendation</div>
            </div>
          </div>
        </div>

        {/* Detailed Scores */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Scores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(evaluation.scores).map(([key, score]) => {
              if (key === 'overall') return null;
              return (
                <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-700">
                    {rubricLabels[key as keyof typeof rubricLabels]}
                  </div>
                  <div className={`px-3 py-1 rounded-full font-bold ${getScoreColor(score)}`}>
                    {score}/10
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strengths & Improvements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Strengths */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">💪</span>
              Your Strengths
            </h3>
            <ul className="space-y-3">
              {evaluation.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">{strength.replace(/^-\s*/, '')}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas for Improvement */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">🎯</span>
              Areas for Improvement
            </h3>
            <ul className="space-y-3">
              {evaluation.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">→</span>
                  <span className="text-gray-700">{improvement.replace(/^-\s*/, '')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Feedback */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">📝</span>
            Detailed Feedback
          </h3>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {evaluation.feedback}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 pt-8">
          <button
            onClick={onStartNewInterview}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Start New Interview
          </button>
          <button
            onClick={() => window.print()}
            className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Save Results
          </button>
        </div>
      </div>
    </div>
  );
}