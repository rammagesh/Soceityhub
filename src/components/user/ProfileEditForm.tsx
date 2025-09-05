'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProfileEditForm = () => {
  const router = useRouter();
  const [profile, setProfile] = useState({
    name: 'Hashmitha R',
    unit: 'A-210',
    society: 'FiveGen Society',
    phone: '+91 98765 43210',
    email: 'hashmitha@example.com',
    emergencyContact: '+91 98765 43211',
    vehicleNumber: 'TN 01 AB 1234'
  });

  const handleSave = () => {
    // Save logic here
    router.push('/user/profile');
  };

  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="px-[16px] md:px-[20px] py-[20px] space-y-6">
      {/* Profile Photo */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Image
              src="/images/avatar1.png"
              width={100}
              height={100}
              alt="Profile"
              className="rounded-full border-4 border-emerald/20"
            />
            <button className="absolute -bottom-2 -right-2 bg-emerald rounded-full p-3">
              <Image src="/icons/edit.svg" alt="Edit" width={16} height={16} className="filter brightness-0 invert" />
            </button>
          </div>
          <button className="btn btn-outline text-small">Change Photo</button>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="small font-semibold mb-4 dark:text-white">Personal Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block xs-small font-semibold text-coolgray dark:text-gray-400 mb-2">Full Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block xs-small font-semibold text-coolgray dark:text-gray-400 mb-2">Unit</label>
              <input
                type="text"
                value={profile.unit}
                onChange={(e) => handleInputChange('unit', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block xs-small font-semibold text-coolgray dark:text-gray-400 mb-2">Society</label>
              <input
                type="text"
                value={profile.society}
                onChange={(e) => handleInputChange('society', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="small font-semibold mb-4 dark:text-white">Contact Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block xs-small font-semibold text-coolgray dark:text-gray-400 mb-2">Phone Number</label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="block xs-small font-semibold text-coolgray dark:text-gray-400 mb-2">Email Address</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="block xs-small font-semibold text-coolgray dark:text-gray-400 mb-2">Emergency Contact</label>
            <input
              type="tel"
              value={profile.emergencyContact}
              onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Vehicle Information */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="small font-semibold mb-4 dark:text-white">Vehicle Information</h3>
        <div>
          <label className="block xs-small font-semibold text-coolgray dark:text-gray-400 mb-2">Vehicle Number</label>
          <input
            type="text"
            value={profile.vehicleNumber}
            onChange={(e) => handleInputChange('vehicleNumber', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="TN 01 AB 1234"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button onClick={handleSave} className="flex-1 btn btn-primary">
          Save Changes
        </button>
        <button onClick={() => router.back()} className="flex-1 btn btn-outline">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProfileEditForm;