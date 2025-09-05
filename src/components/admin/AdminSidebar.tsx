import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const AdminSidebar = () => {
  const pathname = usePathname();
  
  const menuItems = [
    { id: 1, title: 'Dashboard', url: '/admin', icon: '/icons/home.svg' },
    { id: 2, title: 'Residents', url: '/admin/residents', icon: '/icons/group-people.svg' },
    { id: 3, title: 'Visitors', url: '/admin/visitors', icon: '/icons/home-outline.svg' },
    { id: 4, title: 'Maintenance', url: '/admin/maintenance', icon: '/icons/office-building.svg' },
    { id: 5, title: 'Payments', url: '/admin/payments', icon: '/icons/credit-card.svg' },
    { id: 6, title: 'Notices', url: '/admin/notices', icon: '/icons/chat-icon.svg' },
    { id: 7, title: 'Settings', url: '/admin/settings', icon: '/icons/setting.svg' }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen">
      <div className="p-6 border-b border-gray-200">
        <Image src="/logo/web-logo.png" alt="SocietyHub" width={120} height={48} />
        <p className="text-small text-coolgray mt-2">Admin Panel</p>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.url;
            return (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-emerald text-white' 
                      : 'text-coolgray hover:bg-gray-50 hover:text-emerald'
                  }`}
                >
                  <Image src={item.icon} alt={item.title} width={20} height={20} />
                  <span className="font-medium">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;