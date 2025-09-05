"use client";
import React from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import VisitorRequests from '@/components/admin/visitors/VisitorRequests';

const AdminVisitors = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        
        <main className="flex-1 overflow-y-auto p-6">
          <VisitorRequests />
        </main>
      </div>
    </div>
  );
};

export default AdminVisitors;