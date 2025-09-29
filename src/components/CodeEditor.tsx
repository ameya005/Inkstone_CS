import React, { useState, useRef } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export default function CodeEditor({ value, onChange, onSubmit, isLoading }: CodeEditorProps) {
  const [language, setLanguage] = useState('python');
  const [theme, setTheme] = useState<'vs-dark' | 'light'>('vs-dark');
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const languages = [
    { value: 'python', label: 'Python', monacoLang: 'python' },
    { value: 'javascript', label: 'JavaScript', monacoLang: 'javascript' },
    { value: 'java', label: 'Java', monacoLang: 'java' },
    { value: 'cpp', label: 'C++', monacoLang: 'cpp' },
  ];

  const themes = [
    { value: 'vs-dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
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

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;

    // Add keyboard shortcut for running code (Ctrl/Cmd + Enter)
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      if (!isLoading) {
        onSubmit();
      }
    });

    // Configure editor options
    editor.updateOptions({
      fontSize: 14,
      minimap: { enabled: true },
      scrollBeyondLastLine: false,
      wordWrap: 'on',
      automaticLayout: true,
      suggestOnTriggerCharacters: true,
      quickSuggestions: true,
      tabSize: 4,
      renderWhitespace: 'selection',
      formatOnPaste: true,
      formatOnType: true,
    });
  };

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    if (!value || value.trim() === '' || value === getPlaceholder(language)) {
      onChange(getPlaceholder(newLang));
    }
  };

  const handleRun = () => {
    onSubmit();
  };

  const handleReset = () => {
    onChange(getPlaceholder(language));
  };

  const handleFormat = () => {
    if (editorRef.current) {
      editorRef.current.getAction('editor.action.formatDocument')?.run();
    }
  };

  const getCurrentMonacoLanguage = () => {
    const langConfig = languages.find(l => l.value === language);
    return langConfig?.monacoLang || 'python';
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

          <label className="text-sm font-medium text-gray-700 ml-4">Theme:</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as 'vs-dark' | 'light')}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {themes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleFormat}
            className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors border border-gray-300 rounded"
            title="Format Code (Shift+Alt+F)"
          >
            Format
          </button>
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

      {/* Monaco Editor */}
      <div className="flex-1 relative">
        <Editor
          height="100%"
          language={getCurrentMonacoLanguage()}
          value={value}
          theme={theme}
          onChange={(newValue) => onChange(newValue || '')}
          onMount={handleEditorDidMount}
          options={{
            fontSize: 14,
            minimap: { enabled: true },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            automaticLayout: true,
            suggestOnTriggerCharacters: true,
            quickSuggestions: true,
            tabSize: 4,
            renderWhitespace: 'selection',
            formatOnPaste: true,
            formatOnType: true,
            padding: { top: 16, bottom: 16 },
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
          <span>Ctrl/Cmd + Enter to run • Shift+Alt+F to format</span>
        </div>
      </div>
    </div>
  );
}