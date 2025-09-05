import React from 'react';
import Image from 'next/image';

const VisitorRequests = () => {
  const visitors = [
    { id: 1, name: 'Alex Kumar', phone: '+91 98765 43214', unit: 'A-101', purpose: 'Personal Visit', time: '2:30 PM', status: 'pending' },
    { id: 2, name: 'Priya Sharma', phone: '+91 98765 43215', unit: 'B-205', purpose: 'Delivery', time: '3:15 PM', status: 'approved' },
    { id: 3, name: 'Raj Patel', phone: '+91 98765 43216', unit: 'C-301', purpose: 'Maintenance', time: '4:00 PM', status: 'pending' }
  ];

  return (
    <div className="dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-heading4 font-bold text-charcoal dark:text-darktext">Visitor Requests</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal dark:text-darktext">Visitor</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal dark:text-darktext">Unit</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal dark:text-darktext">Purpose</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal dark:text-darktext">Time</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal dark:text-darktext">Status</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal dark:text-darktext">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visitor) => (
              <tr key={visitor.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4">
                  <div>
                    <p className="text-para text-charcoal dark:text-darktext font-semibold">{visitor.name}</p>
                    <p className="text-small text-coolgray dark:text-darktext/70">{visitor.phone}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-para text-charcoal dark:text-darktext">{visitor.unit}</td>
                <td className="px-6 py-4 text-para text-charcoal dark:text-darktext">{visitor.purpose}</td>
                <td className="px-6 py-4 text-para text-charcoal dark:text-darktext">{visitor.time}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-small font-semibold ${
                    visitor.status === 'approved' 
                      ? 'bg-springgreen/10 text-springgreen' 
                      : 'bg-amber/10 text-amber'
                  }`}>
                    {visitor.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {visitor.status === 'pending' && (
                    <div className="flex gap-2">
                      <button className="btn btn-success text-small px-3 py-1">Approve</button>
                      <button className="btn btn-danger text-small px-3 py-1">Reject</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VisitorRequests;