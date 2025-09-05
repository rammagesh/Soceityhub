import React from 'react';
import Image from 'next/image';

const PaymentOverview = () => {
  const payments = [
    { id: 1, unit: 'A-101', amount: '₹5,000', type: 'Maintenance', status: 'paid', date: '2024-01-15' },
    { id: 2, unit: 'B-205', amount: '₹3,500', type: 'Utility', status: 'pending', date: '2024-01-14' },
    { id: 3, unit: 'C-301', amount: '₹5,000', type: 'Maintenance', status: 'overdue', date: '2024-01-10' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-springgreen/10 text-springgreen';
      case 'pending': return 'bg-amber/10 text-amber';
      default: return 'bg-redrose/10 text-redrose';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-springgreen/10 rounded-lg flex items-center justify-center">
              <Image src="/icons/credit-card.svg" alt="Collected" width={24} height={24} />
            </div>
            <div>
              <h3 className="text-heading4 font-bold text-charcoal">₹2.4L</h3>
              <p className="text-small text-coolgray">Collected This Month</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center">
              <Image src="/icons/clock.svg" alt="Pending" width={24} height={24} />
            </div>
            <div>
              <h3 className="text-heading4 font-bold text-charcoal">₹85K</h3>
              <p className="text-small text-coolgray">Pending Payments</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-redrose/10 rounded-lg flex items-center justify-center">
              <Image src="/icons/alert.svg" alt="Overdue" width={24} height={24} />
            </div>
            <div>
              <h3 className="text-heading4 font-bold text-charcoal">₹32K</h3>
              <p className="text-small text-coolgray">Overdue Amount</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-heading4 font-bold text-charcoal">Recent Payments</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Unit</th>
                <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Amount</th>
                <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Type</th>
                <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Status</th>
                <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Date</th>
                <th className="px-6 py-3 text-left text-small font-semibold text-charcoal">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 text-para text-charcoal font-semibold">{payment.unit}</td>
                  <td className="px-6 py-4 text-para text-charcoal">{payment.amount}</td>
                  <td className="px-6 py-4 text-para text-charcoal">{payment.type}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-small font-semibold ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-para text-charcoal">{payment.date}</td>
                  <td className="px-6 py-4">
                    <button className="p-2 text-emerald hover:bg-emerald/10 rounded">
                      <Image src="/icons/info.svg" alt="Details" width={16} height={16} />
                    </button>
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

export default PaymentOverview;