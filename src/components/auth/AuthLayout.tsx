import React from 'react';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald to-forest dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-white rounded-2xl shadow-xl w-full max-w-[600px] p-8">
        <div className="text-center mb-8">
          <Image src="/logo/web-logo.png" alt="SocietyHub" width={150} height={60} className="mx-auto mb-4" />
          <h1 className="text-heading3 font-bold text-charcoal mb-2">{title}</h1>
          {subtitle && (
            <p className="text-para text-coolgray dark:text-gray-400">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;