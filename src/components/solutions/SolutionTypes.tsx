import React from 'react';
import Image from 'next/image';

const SolutionTypes = () => {
  const solutions = [
    {
      title: 'Small Residential Complexes',
      description: 'Perfect for societies with 50-200 units',
      features: ['Basic visitor management', 'Community announcements', 'Maintenance tracking', 'Digital payments'],
      icon: '/icons/home.svg'
    },
    {
      title: 'Large Gated Communities',
      description: 'Comprehensive solution for 200+ units',
      features: ['Advanced security', 'Multiple entry points', 'Facility booking', 'Vendor management'],
      icon: '/icons/office-building.svg'
    },
    {
      title: 'Commercial Complexes',
      description: 'Specialized for office and retail spaces',
      features: ['Visitor pre-approval', 'Parking management', 'Tenant directory', 'Service requests'],
      icon: '/icons/group-people.svg'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-heading2 font-bold text-charcoal mb-4">
            Choose Your Perfect Solution
          </h2>
          <p className="text-para-lg text-coolgray max-w-2xl mx-auto">
            Our flexible platform adapts to your society's size and requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald/10 rounded-xl flex items-center justify-center mb-6">
                <Image src={solution.icon} alt={solution.title} width={32} height={32} />
              </div>
              <h3 className="text-heading4 font-bold text-charcoal mb-3">{solution.title}</h3>
              <p className="text-para text-coolgray mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-small text-coolgray">
                    <Image src="/icons/check.svg" alt="Check" width={16} height={16} className="mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionTypes;