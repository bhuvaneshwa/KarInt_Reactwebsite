import { useState } from 'react';
import WhoWeAreManagement from './about/WhoWeAreManagement';
import VisionMissionManagement from './about/VisionMissionManagement';
import LeadershipManagement from './about/LeadershipManagement';

export default function AboutCMS() {
  const [activeTab, setActiveTab] = useState('who-we-are');

  const tabs = [
    { id: 'who-we-are', name: 'Who We Are', icon: '🏢' },
    { id: 'vision-mission', name: 'Vision & Mission', icon: '🎯' },
    { id: 'leadership', name: 'Leadership', icon: '👥' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'who-we-are':
        return <WhoWeAreManagement />;
      case 'vision-mission':
        return <VisionMissionManagement />;
      case 'leadership':
        return <LeadershipManagement />;
      default:
        return <WhoWeAreManagement />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">About Page Content Management</h1>
        <p className="text-gray-600 mt-1">Manage all about page content including company info, vision & mission, and leadership team</p>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="text-2xl mr-3">🏢</div>
            <div>
              <p className="text-sm font-medium text-gray-600">Company Values</p>
              <p className="text-2xl font-bold text-gray-900">
                {JSON.parse(localStorage.getItem('kar_company_info') || '{}').values?.length || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="text-2xl mr-3">🎯</div>
            <div>
              <p className="text-sm font-medium text-gray-600">Core Values</p>
              <p className="text-2xl font-bold text-gray-900">
                {JSON.parse(localStorage.getItem('kar_vision_mission') || '{}').coreValues?.length || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="text-2xl mr-3">👥</div>
            <div>
              <p className="text-sm font-medium text-gray-600">Active Leaders</p>
              <p className="text-2xl font-bold text-gray-900">
                {JSON.parse(localStorage.getItem('kar_leadership') || '[]').filter(l => l.isActive).length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}