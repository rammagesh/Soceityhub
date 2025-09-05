'use client';

import React from 'react';
import SuperAdminHeader from '@/components/super-admin/SuperAdminHeader';
import SuperAdminSidebar from '@/components/super-admin/SuperAdminSidebar';
import AdminManagement from '@/components/super-admin/AdminManagement';

const AdminsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SuperAdminHeader />
      <div className="flex">
        <SuperAdminSidebar />
        <main className="flex-1 p-6">
          <AdminManagement />
        </main>
      </div>
    </div>
  );
};

export default AdminsPage;