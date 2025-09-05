'use client';

import React from 'react';
import SuperAdminHeader from '@/components/super-admin/SuperAdminHeader';
import SuperAdminSidebar from '@/components/super-admin/SuperAdminSidebar';
import ApprovalRequests from '@/components/super-admin/ApprovalRequests';

const ApprovalsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SuperAdminHeader />
      <div className="flex">
        <SuperAdminSidebar />
        <main className="flex-1 p-6">
          <ApprovalRequests />
        </main>
      </div>
    </div>
  );
};

export default ApprovalsPage;