import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-emerald to-forest py-20">
      <div className="max-w-container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-heading-xl font-bold mb-6 text-white">
              Smart Society Management Made Simple
            </h1>
            <p className="text-para-lg mb-8 text-white/90">
              Connect with neighbors, manage visitors, track deliveries, and stay updated with society announcements - all in one place.
            </p>
            <div className="flex gap-4">
              <Link href="/user" className="btn btn-primary bg-white text-emerald hover:bg-gray-100">
                Get Started Free
              </Link>
              <Link href="/features" className="btn btn-outline border-white text-white hover:bg-white hover:text-emerald">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Image src="/icons/home.svg" alt="Visitor" width={32} height={32} className="mx-auto mb-2" />
                  <p className="text-small text-white">Visitor Management</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Image src="/icons/group-people.svg" alt="Community" width={32} height={32} className="mx-auto mb-2" />
                  <p className="text-small text-white">Community Connect</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Image src="/icons/office-building.svg" alt="Maintenance" width={32} height={32} className="mx-auto mb-2" />
                  <p className="text-small text-white">Maintenance</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Image src="/icons/credit-card.svg" alt="Payments" width={32} height={32} className="mx-auto mb-2" />
                  <p className="text-small text-white">Digital Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;