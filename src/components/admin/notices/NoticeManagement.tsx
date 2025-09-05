import React from 'react';
import Image from 'next/image';

const NoticeManagement = () => {
  const notices = [
    { id: 1, title: 'Water Supply Maintenance', type: 'urgent', date: '2024-01-15', status: 'published' },
    { id: 2, title: 'Society Annual Meeting', type: 'event', date: '2024-01-14', status: 'draft' },
    { id: 3, title: 'New Security Guidelines', type: 'info', date: '2024-01-13', status: 'published' }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'urgent': return 'bg-redrose/10 text-redrose';
      case 'event': return 'bg-emerald/10 text-emerald';
      default: return 'bg-skyblue/10 text-skyblue';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-heading4 font-bold text-charcoal">Notice Management</h2>
          <button className="btn btn-primary">Create Notice</button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Title</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Type</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Date</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Status</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4 text-para text-charcoal font-semibold">{notice.title}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-small font-semibold ${getTypeColor(notice.type)}`}>
                    {notice.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-para text-charcoal">{notice.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-small font-semibold ${
                    notice.status === 'published' 
                      ? 'bg-springgreen/10 text-springgreen' 
                      : 'bg-amber/10 text-amber'
                  }`}>
                    {notice.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 text-emerald hover:bg-emerald/10 rounded">
                      <Image src="/icons/edit.svg" alt="Edit" width={16} height={16} />
                    </button>
                    <button className="p-2 text-skyblue hover:bg-skyblue/10 rounded">
                      <Image src="/icons/info.svg" alt="View" width={16} height={16} />
                    </button>
                    <button className="p-2 text-redrose hover:bg-redrose/10 rounded">
                      <Image src="/icons/trash.svg" alt="Delete" width={16} height={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NoticeManagement;