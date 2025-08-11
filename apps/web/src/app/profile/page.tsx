"use client";

import { Sidebar } from "@/components/Sidebar";
import { UserButton } from "@/components/UserButton";

export default function Profile() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
            <UserButton />
          </div>
        </header>
        
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">User Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" 
                  placeholder="Enter your full name"
                  disabled
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" 
                  placeholder="Enter your email"
                  disabled
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input 
                  type="tel" 
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" 
                  placeholder="Enter your phone number"
                  disabled
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Bio</label>
                <textarea 
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 h-32" 
                  placeholder="Tell us about yourself"
                  disabled
                />
              </div>
              
              <div className="pt-4">
                <button 
                  disabled
                  className="bg-blue-500 text-white px-4 py-2 rounded-md opacity-50 cursor-not-allowed"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
