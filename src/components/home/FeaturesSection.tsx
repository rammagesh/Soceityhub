import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const features = [
    {
      icon: '/icons/home.svg',
      title: 'Visitor Management',
      description: 'Pre-approve visitors, track entries, and enhance security with digital visitor logs.'
    },
    {
      icon: '/icons/group-people.svg',
      title: 'Community Connect',
      description: 'Stay connected with neighbors through announcements, events, and community discussions.'
    },
    {
      icon: '/icons/office-building.svg',
      title: 'Maintenance Requests',
      description: 'Report issues, track maintenance status, and communicate with facility management.'
    },
    {
      icon: '/icons/credit-card.svg',
      title: 'Digital Payments',
      description: 'Pay maintenance fees, utility bills, and other society charges online securely.'
    },
    {
      icon: '/icons/chat-icon.svg',
      title: 'Emergency Alerts',
      description: 'Receive instant notifications for emergencies and important society updates.'
    },
    {
      icon: '/icons/setting.svg',
      title: 'Facility Booking',
      description: 'Book common areas, amenities, and facilities with easy scheduling system.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-heading2 font-bold text-charcoal mb-4">
            Everything You Need for Modern Society Living
          </h2>
          <p className="text-para-lg text-coolgray max-w-2xl mx-auto">
            Streamline your society management with our comprehensive suite of features designed for residents and administrators.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mb-4">
                <Image src={feature.icon} alt={feature.title} width={24} height={24} />
              </div>
              <h3 className="text-heading5 font-bold text-charcoal mb-3">{feature.title}</h3>
              <p className="text-para text-coolgray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;