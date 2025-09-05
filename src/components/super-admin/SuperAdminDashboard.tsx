import React from 'react';
import Image from 'next/image';

const SuperAdminDashboard = () => {
  const stats = [
    { label: 'Total Societies', value: '24', icon: '/icons/office-building.svg', color: 'emerald' },
    { label: 'Active Admins', value: '48', icon: '/icons/group-people.svg', color: 'skyblue' },
    { label: 'Pending Approvals', value: '7', icon: '/icons/alert.svg', color: 'amber' },
    { label: 'Total Users', value: '2.4K', icon: '/icons/home.svg', color: 'springgreen' },
  ];

  const pendingApprovals = [
    { id: 1, type: 'Admin Registration', society: 'Green Valley Society', admin: 'John Doe', date: '2 hours ago' },
    { id: 2, type: 'Society Registration', society: 'Blue Ridge Apartments', admin: 'Jane Smith', date: '1 day ago' },
    { id: 3, type: 'Admin Role Change', society: 'Sunset Heights', admin: 'Mike Johnson', date: '2 days ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald to-forest rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-heading2 font-bold mb-2">Super Admin Control</h1>
            <p className="text-para-lg opacity-90">Manage all societies and administrators</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Image src="/icons/setting.svg" alt="Super Admin" width={32} height={32} className="filter brightness-0 invert" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-small text-coolgray dark:text-darktext/70">{stat.label}</p>
                <p className="text-heading4 font-bold text-charcoal dark:text-white">{stat.value}</p>
              </div>
              <div className={`bg-${stat.color}/10 rounded-lg p-3`}>
                <Image src={stat.icon} alt={stat.label} width={24} height={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pending Approvals */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-heading5 font-bold text-charcoal dark:text-white">Pending Approvals</h2>
          <button className="btn btn-primary">View All</button>
        </div>
        
        <div className="space-y-4">
          {pendingApprovals.map((approval) => (
            <div key={approval.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="bg-amber/10 rounded-lg p-2">
                  <Image src="/icons/alert.svg" alt="Approval" width={20} height={20} />
                </div>
                <div>
                  <h3 className="text-small font-semibold text-charcoal dark:text-white">{approval.type}</h3>
                  <p className="text-xs-small text-coolgray dark:text-darktext/70">{approval.society} - {approval.admin}</p>
                  <p className="text-xs-small text-coolgray dark:text-darktext/70">{approval.date}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-outline text-xs">Reject</button>
                <button className="btn btn-primary text-xs">Approve</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center mb-4">
            <div className="bg-emerald/10 rounded-lg p-3 mr-4">
              <Image src="/icons/group-people.svg" alt="Admins" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold dark:text-white">Admin Management</h3>
          </div>
          <p className="text-para text-coolgray dark:text-darktext/70 mb-4">Approve, manage, and monitor society administrators</p>
          <button className="btn btn-outline w-full">Manage Admins</button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center mb-4">
            <div className="bg-skyblue/10 rounded-lg p-3 mr-4">
              <Image src="/icons/office-building.svg" alt="Societies" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold dark:text-white">Society Oversight</h3>
          </div>
          <p className="text-para text-coolgray dark:text-darktext/70 mb-4">Monitor and manage all registered societies</p>
          <button className="btn btn-outline w-full">View Societies</button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center mb-4">
            <div className="bg-amber/10 rounded-lg p-3 mr-4">
              <Image src="/icons/setting.svg" alt="System" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold dark:text-white">System Control</h3>
          </div>
          <p className="text-para text-coolgray dark:text-darktext/70 mb-4">Configure system-wide settings and permissions</p>
          <button className="btn btn-outline w-full">System Settings</button>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;