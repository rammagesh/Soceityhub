'use client';

import React from 'react';
import SuperAdminDashboard from '@/components/super-admin/SuperAdminDashboard';
import SuperAdminHeader from '@/components/super-admin/SuperAdminHeader';
import SuperAdminSidebar from '@/components/super-admin/SuperAdminSidebar';

const SuperAdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SuperAdminHeader />
      <div className="flex">
        <SuperAdminSidebar />
        <main className="flex-1 p-6">
          <SuperAdminDashboard />
        </main>
      </div>
    </div>
  );
};

export default SuperAdminPage;