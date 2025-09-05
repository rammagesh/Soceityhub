import React from 'react';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import SolutionTypes from '@/components/solutions/SolutionTypes';
import CTASection from '@/components/home/CTASection';

const SolutionsPage = () => {
  return (
    <main>
      <SolutionsHero />
      <SolutionTypes />
      <CTASection />
    </main>
  );
};

export default SolutionsPage;