"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "📊"
  },
  {
    name: "Profile",
    href: "/profile",
    icon: "👤"
  },
  {
    name: "AI Settings",
    href: "/ai-settings",
    icon: "🤖"
  }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">Niksen Job Search</h2>
      </div>
      
      <nav className="mt-6">
        <div className="px-6">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Menu</h3>
        </div>
        
        <ul className="mt-3 space-y-1">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${
                    isActive
                      ? "bg-blue-50 border-r-2 border-blue-500 text-blue-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  } group flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 w-64 p-6 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          <p>© 2024 Niksen Job Search</p>
          <p>Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
