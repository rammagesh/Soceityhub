"use client";
import React from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import DashboardStats from '@/components/admin/dashboard/DashboardStats';
import RecentActivity from '@/components/admin/dashboard/RecentActivity';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        
        <main className="flex-1 overflow-y-auto p-6">
          <DashboardStats />
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-heading5 font-bold text-charcoal mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button className="p-4 bg-emerald/10 rounded-lg hover:bg-emerald/20 transition-colors">
                    <div className="text-emerald font-semibold">Add Resident</div>
                  </button>
                  <button className="p-4 bg-skyblue/10 rounded-lg hover:bg-skyblue/20 transition-colors">
                    <div className="text-skyblue font-semibold">Create Notice</div>
                  </button>
                  <button className="p-4 bg-amber/10 rounded-lg hover:bg-amber/20 transition-colors">
                    <div className="text-amber font-semibold">View Visitors</div>
                  </button>
                  <button className="p-4 bg-springgreen/10 rounded-lg hover:bg-springgreen/20 transition-colors">
                    <div className="text-springgreen font-semibold">Payment Report</div>
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;