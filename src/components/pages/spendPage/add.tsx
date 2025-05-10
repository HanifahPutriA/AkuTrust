'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AddPage() {
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
        isMobile={false}
      />

      {/* Main */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        {/* Title */}
        <h1 className="text-lg font-semibold mb-2">Tambah Pelaporan Keuangan</h1>

        {/* Breadcrumb Steps */}
        <div className="flex items-center text-sm text-gray-600 mb-8 space-x-2">
          {['Proposal Proyek', 'Proposal RAB', 'Laporan Pertanggung Jawaban', 'Verifikasi'].map(
            (step, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className={`w-6 h-6 rounded-full text-white flex items-center justify-center text-xs font-medium ${
                    index === 0 ? 'bg-[#1877AA]' : 'bg-gray-300'
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`${
                    index === 0 ? 'font-semibold text-[#1877AA]' : 'text-gray-500'
                  }`}
                >
                  {step}
                </span>
                {index !== 3 && <span className="text-gray-400">›</span>}
              </div>
            )
          )}
        </div>

        {/* Informasi Proyek */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h2 className="font-semibold text-sm mb-4">Informasi Proyek</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upload Foto */}
            <div className="border border-dashed border-gray-300 rounded-md h-40 flex items-center justify-center">
              <div className="text-center text-[#1877AA]">
                <Upload className="mx-auto mb-2" />
                <p className="text-sm">Unggah Foto</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nama Proyek<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="Type here"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">ID Proyek (Otomatis)</label>
                <input
                  type="text"
                  readOnly
                  value="#IDP01"
                  className="w-full bg-blue-100 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Deskripsi</label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="Type here"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Dokumen Proposal Proyek */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="font-semibold text-sm mb-4">Dokumen Proposal Proyek</h2>
          <label className="block text-sm font-medium mb-2">
            Docs<span className="text-red-500">*</span>
          </label>
          <div className="border border-dashed border-gray-300 rounded-md h-40 flex items-center justify-center">
            <div className="text-center text-[#1877AA]">
              <Upload className="mx-auto mb-2" />
              <p className="text-sm">Unggah Dokumen</p>
            </div>
          </div>
        </div>

        {/* Tombol Selanjutnya */}
        <div className="flex justify-end">
          <button 
          className="bg-[#1877AA] hover:bg-[#145f88] text-white text-sm px-6 py-2 rounded-md"
          onClick={() => router.push('/rab')}
          >
            Selanjutnya
          </button>
        </div>
      </main>
    </div>
  );
}
