import React, { useState } from 'react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export default function CodeEditor({ value, onChange, onSubmit, isLoading }: CodeEditorProps) {
  const [language, setLanguage] = useState('python');

  const languages = [
    { value: 'python', label: 'Python' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
  ];

  const getPlaceholder = (lang: string) => {
    switch (lang) {
      case 'python':
        return `# Write your solution here
def solution():
    # Your code here
    pass`;
      case 'javascript':
        return `// Write your solution here
function solution() {
    // Your code here
}`;
      case 'java':
        return `// Write your solution here
public class Solution {
    public void solution() {
        // Your code here
    }
}`;
      case 'cpp':
        return `// Write your solution here
#include <iostream>
using namespace std;

int main() {
    // Your code here
    return 0;
}`;
      default:
        return '// Write your solution here';
    }
  };

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    if (!value || value.trim() === '' || value === getPlaceholder(language)) {
      onChange(getPlaceholder(newLang));
    }
  };

  const handleRun = () => {
    // For now, just submit the code
    onSubmit();
  };

  const handleReset = () => {
    onChange(getPlaceholder(language));
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Toolbar */}
      <div className="border-b border-gray-200 p-3 flex items-center justify-between bg-gray-50">
        <div className="flex items-center space-x-3">
          <label className="text-sm font-medium text-gray-700">Language:</label>
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleReset}
            className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={handleRun}
            disabled={isLoading}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
          >
            {isLoading ? 'Running...' : 'Run Code'}
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={getPlaceholder(language)}
          className="w-full h-full p-4 font-mono text-sm border-none outline-none resize-none bg-gray-50"
          style={{
            fontFamily: 'Monaco, Menlo, "Ubuntu Mono", Consolas, source-code-pro, monospace',
            lineHeight: '1.5',
            tabSize: '2',
          }}
        />
      </div>

      {/* Status/Results */}
      <div className="border-t border-gray-200 p-4 bg-gray-50 min-h-[100px]">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-700">Output</h3>
          <span className="text-xs text-gray-500">Ready to run</span>
        </div>
        <div className="text-sm text-gray-600 bg-white rounded border p-3 min-h-[60px] font-mono">
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <span>Evaluating your code...</span>
            </div>
          ) : (
            <span className="text-gray-400">
              Click "Run Code" to test your solution
            </span>
          )}
        </div>
      </div>

      {/* Keyboard Shortcuts Help */}
      <div className="border-t border-gray-100 p-2 bg-gray-50">
        <div className="text-xs text-gray-500 flex items-center justify-between">
          <span>💡 Tip: Ask the interviewer for hints if you're stuck!</span>
          <span>Ctrl/Cmd + Enter to run</span>
        </div>
      </div>
    </div>
  );
}