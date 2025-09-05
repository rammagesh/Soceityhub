import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Residents' },
    { number: '500+', label: 'Societies Connected' },
    { number: '50,000+', label: 'Visitors Managed' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <section className="py-16 bg-emerald">
      <div className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-heading2 font-bold mb-2">{stat.number}</div>
              <div className="text-para opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;