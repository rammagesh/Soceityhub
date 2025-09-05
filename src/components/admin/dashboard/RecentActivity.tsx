import React from 'react';
import Image from 'next/image';

const RecentActivity = () => {
  const activities = [
    { id: 1, type: 'visitor', message: 'New visitor request from John Doe', time: '5 min ago', icon: '/icons/home-outline.svg' },
    { id: 2, type: 'maintenance', message: 'Plumbing issue reported in A-101', time: '15 min ago', icon: '/icons/office-building.svg' },
    { id: 3, type: 'payment', message: 'Maintenance fee paid by B-205', time: '1 hour ago', icon: '/icons/credit-card.svg' },
    { id: 4, type: 'notice', message: 'Water supply notice published', time: '2 hours ago', icon: '/icons/chat-icon.svg' }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-heading5 font-bold text-charcoal mb-6">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center">
              <Image src={activity.icon} alt={activity.type} width={16} height={16} />
            </div>
            <div className="flex-1">
              <p className="text-para text-charcoal">{activity.message}</p>
              <p className="text-small text-coolgray">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-emerald text-small font-semibold hover:underline">
        View All Activities
      </button>
    </div>
  );
};

export default RecentActivity;