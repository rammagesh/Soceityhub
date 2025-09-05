import React from 'react';
import Image from 'next/image';

const ApprovalRequests = () => {
  const requests = [
    {
      id: 1,
      type: 'Admin Registration',
      requester: 'John Doe',
      email: 'john@society.com',
      society: 'Green Valley Society',
      description: 'Request to become admin for Green Valley Society',
      date: '2024-01-20',
      status: 'Pending'
    },
    {
      id: 2,
      type: 'Society Registration',
      requester: 'Jane Smith',
      email: 'jane@apartments.com',
      society: 'Blue Ridge Apartments',
      description: 'New society registration request',
      date: '2024-01-19',
      status: 'Pending'
    },
    {
      id: 3,
      type: 'Admin Role Change',
      requester: 'Mike Johnson',
      email: 'mike@heights.com',
      society: 'Sunset Heights',
      description: 'Request to upgrade admin permissions',
      date: '2024-01-18',
      status: 'Under Review'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Admin Registration': return '/icons/group-people.svg';
      case 'Society Registration': return '/icons/office-building.svg';
      case 'Admin Role Change': return '/icons/setting.svg';
      default: return '/icons/alert.svg';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Admin Registration': return 'bg-emerald/10 text-emerald';
      case 'Society Registration': return 'bg-skyblue/10 text-skyblue';
      case 'Admin Role Change': return 'bg-amber/10 text-amber';
      default: return 'bg-gray-100 text-coolgray';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading3 font-bold text-charcoal dark:text-white">Approval Requests</h1>
          <p className="text-para text-coolgray dark:text-darktext/70">Review and approve pending requests</p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-outline">Filter</button>
          <button className="btn btn-primary">Bulk Actions</button>
        </div>
      </div>

      <div className="grid gap-6">
        {requests.map((request) => (
          <div key={request.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className={`rounded-lg p-3 ${getTypeColor(request.type)}`}>
                  <Image src={getTypeIcon(request.type)} alt={request.type} width={24} height={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-heading5 font-bold text-charcoal dark:text-white">{request.type}</h3>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber/10 text-amber">
                      {request.status}
                    </span>
                  </div>
                  <p className="text-para text-coolgray dark:text-darktext/70 mb-3">{request.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-small">
                    <div>
                      <span className="text-coolgray dark:text-darktext/70">Requester:</span>
                      <p className="font-medium text-charcoal dark:text-white">{request.requester}</p>
                      <p className="text-xs-small text-coolgray dark:text-darktext/70">{request.email}</p>
                    </div>
                    <div>
                      <span className="text-coolgray dark:text-darktext/70">Society:</span>
                      <p className="font-medium text-charcoal dark:text-white">{request.society}</p>
                    </div>
                    <div>
                      <span className="text-coolgray dark:text-darktext/70">Request Date:</span>
                      <p className="font-medium text-charcoal dark:text-white">{request.date}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <button className="btn btn-outline text-small">View Details</button>
                <button className="btn btn-outline text-small text-redrose border-redrose hover:bg-redrose hover:text-white">
                  Reject
                </button>
                <button className="btn btn-primary text-small">Approve</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovalRequests;