"use client";

import { Sidebar } from "@/components/Sidebar";
import { UserButton } from "@/components/UserButton";

const mockApplications = [
  {
    id: 1,
    company: "Google",
    role: "Software Engineer",
    status: "Applied",
    dateApplied: "2024-01-15",
    source: "LinkedIn"
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Frontend Developer",
    status: "Interview",
    dateApplied: "2024-01-10",
    source: "Company Website"
  },
  {
    id: 3,
    company: "Amazon",
    role: "Full Stack Developer",
    status: "Rejected",
    dateApplied: "2024-01-05",
    source: "Indeed"
  },
  {
    id: 4,
    company: "Meta",
    role: "React Developer",
    status: "Offer",
    dateApplied: "2024-01-20",
    source: "Glassdoor"
  }
];

const statusOptions = ["Applied", "Interview", "Rejected", "Offer"];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <UserButton />
          </div>
        </header>
        
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Application Tracker</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date Applied
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockApplications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {app.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {app.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <select 
                          value={app.status} 
                          disabled
                          className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-gray-100 cursor-not-allowed"
                        >
                          {statusOptions.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {app.dateApplied}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {app.source}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
