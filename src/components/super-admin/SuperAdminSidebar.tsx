'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SuperAdminSidebar = () => {
  const menuItems = [
    { icon: '/icons/home.svg', label: 'Dashboard', href: '/super-admin' },
    { icon: '/icons/group-people.svg', label: 'Admin Management', href: '/super-admin/admins' },
    { icon: '/icons/office-building.svg', label: 'Society Management', href: '/super-admin/societies' },
    { icon: '/icons/alert.svg', label: 'Approval Requests', href: '/super-admin/approvals' },
    { icon: '/icons/credit-card.svg', label: 'System Analytics', href: '/super-admin/analytics' },
    { icon: '/icons/setting.svg', label: 'System Settings', href: '/super-admin/settings' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-3 mb-8">
          <Image src="/logo/web-logo.png" alt="SocietyHub" width={120} height={48} />
        </Link>
        
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-coolgray dark:text-darktext hover:bg-emerald/10 hover:text-emerald rounded-lg transition-colors"
            >
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <span className="text-small font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SuperAdminSidebar;