import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Bell, User, Home, DollarSign, FileText, Package, HelpCircle, Plus, CheckCircle, Clipboard, X, Menu as MenuIcon, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

const data = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 250 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 300 },
  { name: 'Mei', value: 400 },
  { name: 'Jun', value: 350 },
  { name: 'Jul', value: 500 },
  { name: 'Agu', value: 450 },
  { name: 'Oct', value: 400 },
  { name: 'Nov', value: 450 },
  { name: 'Des', value: 500 },
];

const projects = [
  { id: 1, idProyek: '#IDP01', description: 'Perbaikan Bangunan', location: 'Puskesmas Gayungan', image: "/proyek1.png" },
  { id: 2, idProyek: '#IDP02', description: 'Perbaikan Bangunan', location: 'Pemkot Surabaya', image: "/proyek2.png" },
  { id: 3, idProyek: '#IDP03', description: 'Perbaikan Bangunan', location: 'Rumah Sakit Hewan Surabaya', image: "/proyek3.png" },
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="fixed top-0 w-full bg-white border-b border-gray-200 flex justify-between items-center py-2 px-4 z-20 md:hidden">
        <div className="flex flex-col items-start">
          <div className="text-xs font-inter font-normal">Instansi</div>
          <div className="font-inter font-semibold text-base">Kota Surabaya</div>
        </div>
        <div className="flex items-center">
          <button className="p-1 rounded-md hover:bg-blue-50 mr-2">
            <Bell size={18} className="text-blue-500" />
          </button>
          <button className="p-1 rounded-md hover:bg-blue-50 mr-2">
            <User size={18} className="text-blue-500" />
          </button>
          <button className="p-1 rounded-md hover:bg-blue-50" onClick={toggleSidebar}>
            <MenuIcon size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar - Mobile Slide-in & Desktop Fixed */}
      <div className={`fixed top-0 right-0 h-full bg-white border-l border-gray-200 w-64 z-40 transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:left-0 md:w-48 md:z-10`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 md:border-b-0">
          <div className="flex items-center">
            <Image src="/logo.svg" width={100} height={100} alt="Logo" className="rounded-md" />
          </div>
          <button className="p-1 md:hidden" onClick={toggleSidebar}>
            <X size={18} />
          </button>
        </div>
        
        <div className="p-2 text-sm font-medium">Menu</div>
        
        <div className="flex-1">
          <div 
            className={`px-4 py-2 flex items-center cursor-pointer ${activeTab === 'home' ? 'bg-blue-500 text-white rounded-md' : 'hover:bg-gray-100'}`}
            onClick={() => setActiveTab('home')}
          >
            <Home size={18} className={`mr-2 ${activeTab === 'home' ? 'text-white' : 'text-gray-400'}`} />
            <span className='font-inter font-medium text-xs'>Home</span>
          </div>
          
          <div 
            className={`px-4 py-2 flex items-center cursor-pointer ${activeTab === 'spend' ? 'bg-blue-500 text-white rounded-md' : 'hover:bg-gray-100'}`}
            onClick={() => setActiveTab('spend')}
          >
            <DollarSign size={18} className={`mr-2 ${activeTab === 'spend' ? 'text-white' : 'text-gray-400'}`} />
            <span className='font-inter font-medium text-xs'>Spend</span>
          </div>
          
          <div 
            className={`px-4 py-2 flex items-center cursor-pointer ${activeTab === 'budget' ? 'bg-blue-500 text-white rounded-md' : 'hover:bg-gray-100'}`}
            onClick={() => setActiveTab('budget')}
          >
            <FileText size={18} className={`mr-2 ${activeTab === 'budget' ? 'text-white' : 'text-gray-400'}`} />
            <span className='font-inter font-medium text-xs'>BudgetAI</span>
          </div>
          
          <div className="p-2 text-sm font-medium mt-4">General</div>
          
          <div 
            className={`px-4 py-2 flex items-center cursor-pointer ${activeTab === 'package' ? 'bg-blue-500 text-white rounded-md' : 'hover:bg-gray-100'}`}
            onClick={() => setActiveTab('package')}
          >
            <Package size={18} className={`mr-2 ${activeTab === 'package' ? 'text-white' : 'text-gray-400'}`} />
            <span className='font-inter font-medium text-xs'>Package Price</span>
          </div>
          
          <div 
            className={`px-4 py-2 flex items-center cursor-pointer ${activeTab === 'help' ? 'bg-blue-500 text-white rounded-md' : 'hover:bg-gray-100'}`}
            onClick={() => setActiveTab('help')}
          >
            <HelpCircle size={18} className={`mr-2 ${activeTab === 'help' ? 'text-white' : 'text-gray-400'}`} />
            <span className='font-inter font-medium text-xs'>Help and Support</span>
          </div>
        </div>
        
        <div className="w-full absolute bottom-4 flex justify-center">
          <button className="w-4/5 bg-red-200 text-red-500 rounded-md py-2">
            Logout
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 md:ml-48 bg-gray-50 pt-14 md:pt-0">
        {/* Desktop Header */}
        <div className="hidden md:flex bg-white border-b border-gray-200 justify-between items-center py-2 px-6">
          <div>
            <div className="text-sm text-gray-500">Instansi</div>
            <div className="font-medium">Kota Surabaya</div>
          </div>
          <div className="flex">
            <button className="p-2 rounded-md hover:bg-blue-50 mr-2">
              <Bell size={20} className="text-blue-500" />
            </button>
            <button className="p-2 rounded-md hover:bg-blue-50">
              <User size={20} className="text-blue-500" />
            </button>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="p-4">
          <div className="flex flex-col md:flex-row md:-mx-2">
            {/* Budget Section */}
            <div className="w-full md:w-1/2 md:px-2 mb-4 md:mb-0">
              <div className="bg-white rounded-md shadow-sm p-4 h-full">
                <div className="text-sm font-inter font-normal">Anggaran digunakan 2024</div>
                <div className="text-2xl font-semibold font-inter text-blue-500 mb-2">Rp. 8.500.000.000</div>
                <div className="h-32 md:h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                      <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                      <XAxis dataKey="name" fontSize={10} />
                      <YAxis fontSize={10} />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            {/* Quick Action */}
            <div className="w-full md:w-1/2 md:px-2">
              <div className="bg-[#E9F4FB] rounded-md shadow-sm p-4 mb-4">
                <div className="text-sm font-medium font-inter mb-4">Quick Action</div>
                <div className="flex justify-between">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 md:h-12 md:w-12 bg-[#12597F] text-white rounded-md flex items-center justify-center mb-2">
                      <Plus size={18} />
                    </div>
                    <div className="text-xs text-center font-inter font-medium">Tambah Anggaran</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 md:h-12 md:w-12 bg-[#12597F] text-white rounded-md flex items-center justify-center mb-2">
                      <Clipboard size={18} />
                    </div>
                    <div className="text-xs text-center font-inter font-medium">Tambah Rencana</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 md:h-12 md:w-12 bg-[#12597F] text-white rounded-md flex items-center justify-center mb-2">
                      <ThumbsUp size={18} />
                    </div>
                    <div className="text-xs text-center font-inter font-medium">Sudah Terealisasi</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 md:h-12 md:w-12 bg-[#12597F] text-white rounded-md flex items-center justify-center mb-2">
                      <CheckCircle size={18} />
                    </div>
                    <div className="text-xs text-center font-inter font-medium">Sudah Terverifikasi</div>
                  </div>
                </div>
              </div>
              
              {/* Status */}
              <div className="bg-white rounded-md shadow-sm p-4">
                <div className="text-sm font-medium font-inter mb-2 border-b border-[#E3E8EF]">Status</div>
                <div className="flex items-start">
                  <Image src="/status.png" width={80} height={60} alt="Building" className="rounded-md mr-3" />
                  <div>
                    <div className="font-bold text-base">4 Proyek Menunggu Approval Verifikasi</div>
                    <div className="text-xs font-medium font-inter text-gray-500">Diajukan sejak: 14/03/2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project List */}
        <div className="bg-white rounded-md shadow-sm mx-4 p-4 mb-4">
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <div className="font-medium">Pengeluaran</div>
            <div className="flex items-center text-xs">
              <span className="mr-2">Sort by</span>
              <button className="p-1">
                <Image src="/Filter.png" width={15} height={15} alt="Building" />
              </button>
            </div>
          </div>
          
          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left font-medium">No.</th>
                  <th className="py-3 px-4 text-left font-medium">IDProyek</th>
                  <th className="py-3 px-4 text-left font-medium">Foto Proyek</th>
                  <th className="py-3 px-4 text-left font-medium">Deskripsi Proyek</th>
                  <th className="py-3 px-4 text-left font-medium">Lokasi Proyek</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4">{project.id}</td>
                    <td className="py-3 px-4">{project.idProyek}</td>
                    <td className="py-3 px-4">
                      <Image src={project.image} width={80} height={50} alt="Project" className="rounded-md" />
                    </td>
                    <td className="py-3 px-4">{project.description}</td>
                    <td className="py-3 px-4">{project.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mobile Table */}
          <div className="md:hidden">
            <div className="grid grid-cols-5 gap-2 py-2 text-xs font-medium border-b border-gray-200">
              <div>No.</div>
              <div>IDProyek</div>
              <div>Foto Proyek</div>
              <div>Deskripsi Proyek</div>
              <div>Lokasi Proyek</div>
            </div>
            {projects.map((project) => (
              <div key={project.id} className="grid grid-cols-5 gap-2 py-2 text-xs border-b border-gray-200">
                <div>{project.id}</div>
                <div>{project.idProyek}</div>
                <div>
                  <Image src={project.image} width={40} height={30} alt="Project" className="rounded-md" />
                </div>
                <div className="truncate">{project.description}</div>
                <div className="truncate">{project.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;