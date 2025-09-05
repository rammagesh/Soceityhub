import React from 'react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald to-forest">
      <div className="max-w-container mx-auto px-4 text-center">
        <h2 className="text-heading2 font-bold text-white mb-4">
          Ready to Transform Your Society?
        </h2>
        <p className="text-para-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of societies already using SocietyHub to create safer, more connected communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/user" className="btn btn-primary bg-white text-emerald hover:bg-gray-100">
            Start Free Trial
          </Link>
          <Link href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-emerald">
            Schedule Demo
          </Link>
        </div>
        <p className="text-small text-white/70 mt-4">
          No credit card required • 30-day free trial • Setup in minutes
        </p>
      </div>
    </section>
  );
};

export default CTASection;