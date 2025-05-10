'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RabPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('spend');
  const router = useRouter();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <h1 className="text-lg font-semibold mb-2">Tambah Pelaporan Keuangan</h1>

        {/* Step Wizard */}
        <div className="flex items-center text-sm text-gray-600 mb-8 space-x-2">
          {['Proposal Proyek', 'Proposal RAB', 'Laporan Pertanggung Jawaban', 'Verifikasi'].map(
            (step, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className={`w-6 h-6 rounded-full text-white flex items-center justify-center text-xs font-medium ${
                    index === 1 ? 'bg-[#1877AA]' : index < 1 ? 'bg-[#145f88]' : 'bg-gray-300'
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`${
                    index === 1 ? 'font-semibold text-[#1877AA]' : 'text-gray-500'
                  }`}
                >
                  {step}
                </span>
                {index !== 3 && <span className="text-gray-400">›</span>}
              </div>
            )
          )}
        </div>

        {/* Card Dokumen Proposal RAB */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="font-semibold text-sm mb-4">Dokumen Proposal RAB</h2>
          <label className="block text-sm font-medium mb-2">
            Excel<span className="text-red-500">*</span>
          </label>
          <div className="border border-dashed border-gray-300 rounded-md h-40 flex items-center justify-center">
            <div className="text-center text-[#1877AA]">
              <Upload className="mx-auto mb-2" />
              <p className="text-sm">Unggah Dokumen</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button 
          className="bg-[#0F4C75] hover:bg-[#0d3d61] text-white text-sm px-6 py-2 rounded-md"
          onClick={() => router.push('/lpj')}
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  );
}
