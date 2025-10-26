import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/admin/DashboardSidebar";
import DashboardHeader from "../components/admin/DashboardHeader";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <DashboardSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {/* Header */}
        <DashboardHeader 
          sidebarOpen={sidebarOpen} 
          onToggleSidebar={toggleSidebar} 
        />
        
        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}