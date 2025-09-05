"use client";
import React from 'react';
import Image from 'next/image';

const AdminHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading4 font-bold text-charcoal">Admin Dashboard</h1>
          <p className="text-small text-coolgray dark:text-darktext/70">Manage your society efficiently</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-coolgray dark:text-darktext hover:text-emerald">
            <Image src="/icons/chat-icon.svg" alt="Notifications" width={20} height={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-redrose rounded-full"></span>
          </button>
          
          <div className="flex items-center gap-3">
            <Image src="/images/avatar1.png" alt="Admin" width={32} height={32} className="rounded-full" />
            <div>
              <p className="text-small font-semibold text-charcoal">Admin User</p>
              <p className="text-xs-small text-coolgray dark:text-darktext/70">Society Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;