import React from 'react';
import Image from 'next/image';

const ResidentsList = () => {
  const residents = [
    { id: 1, name: 'John Smith', unit: 'A-101', phone: '+91 98765 43210', status: 'active' },
    { id: 2, name: 'Sarah Johnson', unit: 'B-205', phone: '+91 98765 43211', status: 'active' },
    { id: 3, name: 'Mike Wilson', unit: 'C-301', phone: '+91 98765 43212', status: 'inactive' },
    { id: 4, name: 'Emily Davis', unit: 'A-102', phone: '+91 98765 43213', status: 'active' }
  ];

  return (
    <div className="dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-heading4 font-bold text-charcoal dark:text-darktext">Residents Management</h2>
          <button className="btn btn-primary">Add Resident</button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal dark:text-darktext">Name</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal dark:text-darktext">Unit</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal dark:text-darktext">Phone</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal dark:text-darktext">Status</th>
              <th className="px-6 py-3 text-left text-small font-semibold text-charcoal dark:text-darktext">Actions</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((resident) => (
              <tr key={resident.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Image src="/images/avatar1.png" alt={resident.name} width={32} height={32} className="rounded-full" />
                    <span className="text-para text-charcoal dark:text-darktext">{resident.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-para text-charcoal dark:text-darktext">{resident.unit}</td>
                <td className="px-6 py-4 text-para text-charcoal dark:text-darktext">{resident.phone}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-small font-semibold ${
                    resident.status === 'active' 
                      ? 'bg-springgreen/10 text-springgreen' 
                      : 'bg-coolgray/10 text-coolgray'
                  }`}>
                    {resident.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 text-emerald hover:bg-emerald/10 rounded">
                      <Image src="/icons/edit.svg" alt="Edit" width={16} height={16} />
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

export default ResidentsList;