'use client';

import React, { useState, useEffect } from 'react';
import { Sidebar } from '@/components/sidebar';
import { useRouter } from 'next/navigation';

export default function BudgetAIPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('budget');
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar - hidden on mobile unless sidebarOpen is true */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobile={isMobile}
      />

      {/* Main Content */}
      <main className={`flex-1 ${sidebarOpen && isMobile ? 'ml-0' : 'md:ml-64'} p-4 md:p-8 overflow-y-auto`}>
        {/* Mobile header with hamburger menu */}
        {isMobile && (
          <div className="flex items-center mb-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mr-4 text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold text-gray-800">BudgetAI</h1>
          </div>
        )}

        {/* Desktop header (only shown when not mobile) */}
        {!isMobile && (
          <h1 className="text-xl font-semibold text-gray-800 mb-4">BudgetAI</h1>
        )}

        {/* Input Section */}
        <div className="flex flex-col items-center justify-center mt-16 md:mt-32">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-800 px-4">
            Apa yang bisa <span className="text-[#1877AA] font-bold">AkuTrust</span> bantu?
          </h2>

          {/* Input box with button */}
          <div className="mt-6 w-full max-w-xl px-4">
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg shadow px-4 py-3">
              <input
                type="text"
                placeholder="Buat apapun"
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm md:text-base"
              />
              <button className="text-[#1877AA] font-bold text-lg md:text-xl px-3">{'>'}</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}