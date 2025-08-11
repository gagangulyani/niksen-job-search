"use client";

import { Sidebar } from "@/components/Sidebar";
import { UserButton } from "@/components/UserButton";

export default function AISettings() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-900">AI Settings</h1>
            <UserButton />
          </div>
        </header>
        
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">AI Configuration</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">AI Model</label>
                <select 
                  disabled
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 cursor-not-allowed"
                >
                  <option>GPT-4</option>
                  <option>GPT-3.5 Turbo</option>
                  <option>Claude-3</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Temperature</label>
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.1" 
                  defaultValue="0.7"
                  disabled
                  className="w-full cursor-not-allowed opacity-50"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Conservative</span>
                  <span>Balanced</span>
                  <span>Creative</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max Tokens</label>
                <input 
                  type="number" 
                  defaultValue={1000}
                  disabled
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 cursor-not-allowed"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">System Prompt</label>
                <textarea 
                  disabled
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 cursor-not-allowed"
                  placeholder="You are a helpful AI assistant for job search..."
                />
              </div>
              
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="enableAutoSuggestions" 
                  disabled
                  className="cursor-not-allowed"
                />
                <label htmlFor="enableAutoSuggestions" className="text-sm text-gray-700">
                  Enable auto-suggestions for cover letters
                </label>
              </div>
              
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="enableResumeAnalysis" 
                  disabled
                  defaultChecked
                  className="cursor-not-allowed"
                />
                <label htmlFor="enableResumeAnalysis" className="text-sm text-gray-700">
                  Enable AI resume analysis
                </label>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <button 
                  disabled
                  className="bg-blue-500 text-white px-4 py-2 rounded-md opacity-50 cursor-not-allowed mr-3"
                >
                  Save Settings
                </button>
                <button 
                  disabled
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md opacity-50 cursor-not-allowed"
                >
                  Reset to Default
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
