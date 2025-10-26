import { useState } from 'react';
import BannerManagement from './home/BannerManagement';
import CounterManagement from './home/CounterManagement';
import ClientsManagement from './home/ClientsManagement';
import TestimonialsManagement from './home/TestimonialsManagement';

export default function HomeCMS() {
  const [activeTab, setActiveTab] = useState('banner');

  const tabs = [
    { id: 'banner', name: 'Banner', icon: '🏞️' },
    { id: 'counter', name: 'Counter', icon: '📊' },
    { id: 'clients', name: 'Clients', icon: '🏢' },
    { id: 'testimonials', name: 'Testimonials', icon: '⭐' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'banner':
        return <BannerManagement />;
      case 'counter':
        return <CounterManagement />;
      case 'clients':
        return <ClientsManagement />;
      case 'testimonials':
        return <TestimonialsManagement />;
      default:
        return <BannerManagement />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Home Page Content Management</h1>
        <p className="text-gray-600 mt-1">Manage all homepage content including banners, counters, clients, and testimonials</p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.name}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="text-2xl mr-3">🏞️</div>
            <div>
              <p className="text-sm font-medium text-gray-600">Active Banners</p>
              <p className="text-2xl font-bold text-gray-900">
                {JSON.parse(localStorage.getItem('kar_banners') || '[]').filter(b => b.isActive).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="text-2xl mr-3">📊</div>
            <div>
              <p className="text-sm font-medium text-gray-600">Active Counters</p>
              <p className="text-2xl font-bold text-gray-900">
                {JSON.parse(localStorage.getItem('kar_counters') || '[]').filter(c => c.isActive).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="text-2xl mr-3">🏢</div>
            <div>
              <p className="text-sm font-medium text-gray-600">Active Clients</p>
              <p className="text-2xl font-bold text-gray-900">
                {JSON.parse(localStorage.getItem('kar_clients') || '[]').filter(c => c.isActive).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="text-2xl mr-3">⭐</div>
            <div>
              <p className="text-sm font-medium text-gray-600">Active Testimonials</p>
              <p className="text-2xl font-bold text-gray-900">
                {JSON.parse(localStorage.getItem('kar_testimonials') || '[]').filter(t => t.isActive).length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}