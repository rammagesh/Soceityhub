'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const UserProfile = () => {
  const profile = {
    name: 'Hashmitha R',
    unit: 'A-210',
    society: 'FiveGen Society',
    phone: '+91 98765 43210',
    email: 'hashmitha@example.com'
  };

  const quickStats = [
    { label: "Visitors This Month", value: "12" },
    { label: "Pending Dues", value: "₹2,500" },
    { label: "Complaints Raised", value: "2" },
    { label: "Amenity Bookings", value: "5" }
  ];

  return (
    <div className="px-[16px] md:px-[20px] py-[20px] space-y-6">
      {/* Profile Header */}
      <div className="dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <Image
              src="/images/avatar1.png"
              width={80}
              height={80}
              alt="Profile"
              className="rounded-full border-4 border-emerald/20"
            />
            <button className="absolute -bottom-1 -right-1 bg-emerald rounded-full p-2">
              <Image src="/icons/edit.svg" alt="Edit" width={12} height={12} className="filter brightness-0 invert" />
            </button>
          </div>
          <div className="flex-1">
            <div>
              <h2 className="h4 font-bold dark:text-white">{profile.name}</h2>
              <p className="small text-coolgray dark:text-gray-400">{profile.unit}, {profile.society}</p>
              <p className="xs-small text-coolgray dark:text-gray-400">Member since Jan 2023</p>
            </div>
          </div>
          <div className="text-right">
            <Link href="/user/profile/edit" className="btn btn-outline text-xs-small px-3 py-1">Edit</Link>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="h5 font-bold text-charcoal dark:text-darktext">{stat.value}</p>
              <p className="xs-small text-coolgray dark:text-darktext/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="small font-semibold mb-4 dark:text-darktext">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="small text-coolgray dark:text-gray-400">Phone</span>
            <span className="small font-semibold dark:text-white">{profile.phone}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="small text-coolgray dark:text-gray-400">Email</span>
            <span className="small font-semibold dark:text-white">{profile.email}</span>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="space-y-3">
        {[
          { title: "Family Members", icon: "/icons/group-people.svg" },
          { title: "Vehicle Details", icon: "/icons/key.svg" },
          { title: "Emergency Contacts", icon: "/icons/phone.svg" }
        ].map((section, index) => (
          <div key={index} className="dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-emerald/10 rounded-lg p-2">
                  <Image src={section.icon} alt={section.title} width={20} height={20} className="icon" />
                </div>
                <span className="small font-semibold dark:text-darktext">{section.title}</span>
              </div>
              <Image src="/icons/arrow-left.svg" alt="Arrow" width={16} height={16} className="rotate-180 icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;