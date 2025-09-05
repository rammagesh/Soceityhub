"use client";
import React from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import MaintenanceRequests from '@/components/admin/maintenance/MaintenanceRequests';

const AdminMaintenance = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        
        <main className="flex-1 overflow-y-auto p-6">
          <MaintenanceRequests />
        </main>
      </div>
    </div>
  );
};

export default AdminMaintenance;