import React from 'react';
import Image from 'next/image';

const AdminManagement = () => {
  const admins = [
    { id: 1, name: 'John Doe', email: 'john@society.com', society: 'Green Valley Society', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@apartments.com', society: 'Blue Ridge Apartments', status: 'Pending', joinDate: '2024-02-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@heights.com', society: 'Sunset Heights', status: 'Active', joinDate: '2024-01-10' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@gardens.com', society: 'Rose Gardens', status: 'Suspended', joinDate: '2024-03-05' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-springgreen bg-springgreen/10';
      case 'Pending': return 'text-amber bg-amber/10';
      case 'Suspended': return 'text-redrose bg-redrose/10';
      default: return 'text-coolgray bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading3 font-bold text-charcoal dark:text-white">Admin Management</h1>
          <p className="text-para text-coolgray dark:text-darktext/70">Manage society administrators and their permissions</p>
        </div>
        <button className="btn btn-primary">Add New Admin</button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-heading5 font-bold text-charcoal dark:text-white">All Administrators</h2>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Search admins..." 
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-emerald focus:outline-none dark:bg-gray-700 dark:text-white"
              />
              <button className="btn btn-outline">Filter</button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-coolgray dark:text-darktext uppercase tracking-wider">Admin</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-coolgray dark:text-darktext uppercase tracking-wider">Society</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-coolgray dark:text-darktext uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-coolgray dark:text-darktext uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-coolgray dark:text-darktext uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {admins.map((admin) => (
                <tr key={admin.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Image src="/images/avatar1.png" alt={admin.name} width={32} height={32} className="rounded-full mr-3" />
                      <div>
                        <div className="text-small font-medium text-charcoal dark:text-white">{admin.name}</div>
                        <div className="text-xs-small text-coolgray dark:text-darktext/70">{admin.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-small text-charcoal dark:text-white">{admin.society}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(admin.status)}`}>
                      {admin.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-small text-coolgray dark:text-darktext/70">{admin.joinDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-small">
                    <div className="flex gap-2">
                      <button className="text-emerald hover:text-emerald/80">Edit</button>
                      <button className="text-amber hover:text-amber/80">Suspend</button>
                      <button className="text-redrose hover:text-redrose/80">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminManagement;