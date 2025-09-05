import React from 'react';
import PricingHero from '@/components/pricing/PricingHero';
import PricingPlans from '@/components/pricing/PricingPlans';
import CTASection from '@/components/home/CTASection';

const PricingPage = () => {
  return (
    <main>
      <PricingHero />
      <PricingPlans />
      <CTASection />
    </main>
  );
};

export default PricingPage;