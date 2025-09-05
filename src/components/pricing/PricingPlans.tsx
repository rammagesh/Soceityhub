import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹999',
      period: '/month',
      description: 'Perfect for small societies up to 50 units',
      features: ['Basic visitor management', 'Community announcements', 'Maintenance requests', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹2,499',
      period: '/month',
      description: 'Ideal for medium societies up to 200 units',
      features: ['Advanced visitor management', 'Facility booking', 'Digital payments', 'Vendor management', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large communities with 200+ units',
      features: ['All Professional features', 'Custom integrations', 'Dedicated account manager', '24/7 phone support', 'Custom branding'],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-sm border-2 ${plan.popular ? 'border-emerald' : 'border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald text-white px-4 py-2 rounded-full text-small font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-heading4 font-bold text-charcoal mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-heading2 font-bold text-charcoal">{plan.price}</span>
                  <span className="text-para text-coolgray">{plan.period}</span>
                </div>
                <p className="text-para text-coolgray">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-para text-coolgray">
                    <Image src="/icons/check.svg" alt="Check" width={16} height={16} className="mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/contact" 
                className={`btn w-full text-center block ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;