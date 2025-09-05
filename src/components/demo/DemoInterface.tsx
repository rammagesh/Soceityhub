import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DemoInterface = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo/web-logo.png" alt="SocietyHub" width={120} height={48} />
            <span className="ml-4 px-3 py-1 bg-emerald/10 text-emerald text-small font-semibold rounded-full">
              DEMO MODE
            </span>
          </div>
          <Link href="/" className="btn btn-outline">
            Exit Demo
          </Link>
        </div>
      </div>

      <div className="max-w-container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-heading2 font-bold text-charcoal mb-4">
            Welcome to SocietyHub Demo
          </h1>
          <p className="text-para-lg text-coolgray">
            Explore our platform with sample data. Click on any feature to see how it works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mb-4">
              <Image src="/icons/home.svg" alt="Visitors" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold text-charcoal mb-2">Visitor Management</h3>
            <p className="text-para text-coolgray mb-4">Manage visitor entries and approvals</p>
            <div className="text-small text-emerald font-semibold">5 pending approvals</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mb-4">
              <Image src="/icons/group-people.svg" alt="Community" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold text-charcoal mb-2">Community</h3>
            <p className="text-para text-coolgray mb-4">Society announcements and events</p>
            <div className="text-small text-emerald font-semibold">3 new announcements</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mb-4">
              <Image src="/icons/office-building.svg" alt="Maintenance" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold text-charcoal mb-2">Maintenance</h3>
            <p className="text-para text-coolgray mb-4">Track maintenance requests</p>
            <div className="text-small text-emerald font-semibold">2 open requests</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mb-4">
              <Image src="/icons/credit-card.svg" alt="Payments" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold text-charcoal mb-2">Payments</h3>
            <p className="text-para text-coolgray mb-4">Manage society payments</p>
            <div className="text-small text-emerald font-semibold">₹15,000 collected</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mb-4">
              <Image src="/icons/setting.svg" alt="Settings" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold text-charcoal mb-2">Facility Booking</h3>
            <p className="text-para text-coolgray mb-4">Book common areas</p>
            <div className="text-small text-emerald font-semibold">Club house available</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mb-4">
              <Image src="/icons/chat-icon.svg" alt="Alerts" width={24} height={24} />
            </div>
            <h3 className="text-heading5 font-bold text-charcoal mb-2">Emergency Alerts</h3>
            <p className="text-para text-coolgray mb-4">Send emergency notifications</p>
            <div className="text-small text-coolgray">All systems normal</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-heading3 font-bold text-charcoal mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-para-lg text-coolgray mb-6">
              This is just a preview. Sign up to access all features for your society.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/auth" className="btn btn-primary">
                Start Free Trial
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoInterface;