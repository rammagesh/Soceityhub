import React from 'react';
import Image from 'next/image';

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald to-forest rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-heading2 font-bold mb-2">Admin Dashboard</h1>
            <p className="text-para-lg opacity-90">Manage your society efficiently</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Image src="/icons/setting.svg" alt="Admin" width={32} height={32} className="filter brightness-0 invert" />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-small text-coolgray dark:text-darktext/70">Total Residents</p>
              <p className="text-heading4 font-bold text-charcoal dark:text-darktext">248</p>
            </div>
            <div className="bg-emerald/10 rounded-lg p-3">
              <Image src="/icons/group-people.svg" alt="Residents" width={24} height={24} />
            </div>
          </div>
        </div>

        <div className="dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-small text-coolgray dark:text-darktext/70">Pending Requests</p>
              <p className="text-heading4 font-bold text-charcoal dark:text-darktext">12</p>
            </div>
            <div className="bg-amber/10 rounded-lg p-3">
              <Image src="/icons/alert.svg" alt="Requests" width={24} height={24} />
            </div>
          </div>
        </div>

        <div className="dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-small text-coolgray dark:text-darktext/70">Monthly Revenue</p>
              <p className="text-heading4 font-bold text-charcoal dark:text-darktext">₹2.4L</p>
            </div>
            <div className="bg-springgreen/10 rounded-lg p-3">
              <Image src="/icons/credit-card.svg" alt="Revenue" width={24} height={24} />
            </div>
          </div>
        </div>

        <div className="dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-small text-coolgray dark:text-darktext/70">Active Visitors</p>
              <p className="text-heading4 font-bold text-charcoal dark:text-darktext">8</p>
            </div>
            <div className="bg-skyblue/10 rounded-lg p-3">
              <Image src="/icons/home.svg" alt="Visitors" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Management Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center mb-4">
            <div className="bg-emerald/10 rounded-lg p-3 mr-4">
              <Image src="/icons/group-people.svg" alt="Residents" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold dark:text-darktext">Resident Management</h3>
          </div>
          <p className="text-para text-coolgray dark:text-darktext/70 mb-4">Manage resident profiles, approvals, and communications</p>
          <button className="btn btn-outline w-full">Manage Residents</button>
        </div>

        <div className="dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center mb-4">
            <div className="bg-skyblue/10 rounded-lg p-3 mr-4">
              <Image src="/icons/home.svg" alt="Visitors" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold dark:text-darktext">Visitor Control</h3>
          </div>
          <p className="text-para text-coolgray dark:text-darktext/70 mb-4">Monitor and manage visitor entries and security</p>
          <button className="btn btn-outline w-full">View Visitors</button>
        </div>

        <div className="dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center mb-4">
            <div className="bg-amber/10 rounded-lg p-3 mr-4">
              <Image src="/icons/office-building.svg" alt="Maintenance" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold dark:text-darktext">Maintenance</h3>
          </div>
          <p className="text-para text-coolgray dark:text-darktext/70 mb-4">Track maintenance requests and facility management</p>
          <button className="btn btn-outline w-full">Manage Requests</button>
        </div>

        <div className="dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center mb-4">
            <div className="bg-springgreen/10 rounded-lg p-3 mr-4">
              <Image src="/icons/credit-card.svg" alt="Payments" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold dark:text-darktext">Financial Management</h3>
          </div>
          <p className="text-para text-coolgray dark:text-darktext/70 mb-4">Handle payments, dues, and financial reports</p>
          <button className="btn btn-outline w-full">View Finances</button>
        </div>

        <div className="dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center mb-4">
            <div className="bg-redrose/10 rounded-lg p-3 mr-4">
              <Image src="/icons/alert.svg" alt="Announcements" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold dark:text-darktext">Announcements</h3>
          </div>
          <p className="text-para text-coolgray dark:text-darktext/70 mb-4">Create and manage society-wide announcements</p>
          <button className="btn btn-outline w-full">Manage Notices</button>
        </div>

        <div className="dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center mb-4">
            <div className="bg-forest/10 rounded-lg p-3 mr-4">
              <Image src="/icons/setting.svg" alt="Settings" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold dark:text-darktext">System Settings</h3>
          </div>
          <p className="text-para text-coolgray dark:text-darktext/70 mb-4">Configure system preferences and security settings</p>
          <button className="btn btn-outline w-full">Open Settings</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;