import React from 'react';
import Image from 'next/image';

const MaintenanceRequests = () => {
  const requests = [
    { id: 1, unit: 'A-101', issue: 'Plumbing - Kitchen sink blocked', priority: 'high', status: 'open', date: '2024-01-15' },
    { id: 2, unit: 'B-205', issue: 'Electrical - Bedroom light not working', priority: 'medium', status: 'in-progress', date: '2024-01-14' },
    { id: 3, unit: 'C-301', issue: 'AC - Not cooling properly', priority: 'low', status: 'completed', date: '2024-01-13' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-redrose/10 text-redrose';
      case 'medium': return 'bg-amber/10 text-amber';
      default: return 'bg-emerald/10 text-emerald';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-springgreen/10 text-springgreen';
      case 'in-progress': return 'bg-skyblue/10 text-skyblue';
      default: return 'bg-amber/10 text-amber';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-heading4 font-bold text-charcoal">Maintenance Requests</h2>
          <button className="btn btn-primary">Add Request</button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Unit</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Issue</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Priority</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Status</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Date</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4 text-para text-charcoal font-semibold">{request.unit}</td>
                <td className="px-6 py-4 text-para text-charcoal">{request.issue}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-small font-semibold ${getPriorityColor(request.priority)}`}>
                    {request.priority}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-small font-semibold ${getStatusColor(request.status)}`}>
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-para text-charcoal">{request.date}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 text-emerald hover:bg-emerald/10 rounded">
                      <Image src="/icons/edit.svg" alt="Edit" width={16} height={16} />
                    </button>
                    <button className="p-2 text-skyblue hover:bg-skyblue/10 rounded">
                      <Image src="/icons/info.svg" alt="Details" width={16} height={16} />
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

export default MaintenanceRequests;