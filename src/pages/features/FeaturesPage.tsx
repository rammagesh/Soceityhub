import React from 'react';
import FeaturesHero from '@/components/features/FeaturesHero';
import DetailedFeatures from '@/components/features/DetailedFeatures';
import CTASection from '@/components/home/CTASection';

const FeaturesPage = () => {
  return (
    <main>
      <FeaturesHero />
      <DetailedFeatures />
      <CTASection />
    </main>
  );
};

export default FeaturesPage;