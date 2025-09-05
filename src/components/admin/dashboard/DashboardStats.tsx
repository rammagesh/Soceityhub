import React from 'react';
import Image from 'next/image';

const DashboardStats = () => {
  const stats = [
    { title: 'Total Residents', value: '248', icon: '/icons/group-people.svg', color: 'emerald' },
    { title: 'Pending Visitors', value: '12', icon: '/icons/home-outline.svg', color: 'amber' },
    { title: 'Maintenance Requests', value: '8', icon: '/icons/office-building.svg', color: 'skyblue' },
    { title: 'Monthly Collection', value: '₹2.4L', icon: '/icons/credit-card.svg', color: 'springgreen' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 bg-${stat.color}/10 rounded-lg flex items-center justify-center`}>
              <Image src={stat.icon} alt={stat.title} width={24} height={24} />
            </div>
          </div>
          <h3 className="text-heading3 font-bold text-charcoal dark:text-darktext mb-1">{stat.value}</h3>
          <p className="text-small text-coolgray dark:text-darktext/70">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;