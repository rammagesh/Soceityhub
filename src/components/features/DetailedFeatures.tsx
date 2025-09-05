import React from 'react';
import Image from 'next/image';

const DetailedFeatures = () => {
  const features = [
    {
      icon: '/icons/home.svg',
      title: 'Visitor Management System',
      description: 'Complete visitor tracking with pre-approval, digital logs, and real-time notifications.',
      benefits: ['Pre-approve visitors', 'Digital visitor logs', 'SMS notifications', 'Photo capture']
    },
    {
      icon: '/icons/group-people.svg',
      title: 'Community Portal',
      description: 'Connect residents through announcements, events, and discussion forums.',
      benefits: ['Society announcements', 'Event management', 'Neighbor directory', 'Discussion forums']
    },
    {
      icon: '/icons/office-building.svg',
      title: 'Maintenance Management',
      description: 'Streamlined maintenance requests with tracking and vendor management.',
      benefits: ['Issue reporting', 'Status tracking', 'Vendor management', 'Cost tracking']
    },
    {
      icon: '/icons/credit-card.svg',
      title: 'Digital Payment System',
      description: 'Secure online payments for maintenance fees, utilities, and other charges.',
      benefits: ['Online payments', 'Payment history', 'Auto-reminders', 'Receipt generation']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="w-16 h-16 bg-emerald/10 rounded-xl flex items-center justify-center mb-6">
                  <Image src={feature.icon} alt={feature.title} width={32} height={32} />
                </div>
                <h3 className="text-heading3 font-bold text-charcoal mb-4">{feature.title}</h3>
                <p className="text-para-lg text-coolgray mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-para text-coolgray">
                      <Image src="/icons/check.svg" alt="Check" width={16} height={16} className="mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-gray-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="aspect-video bg-white rounded-lg flex items-center justify-center">
                  <span className="text-coolgray">Feature Demo</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;