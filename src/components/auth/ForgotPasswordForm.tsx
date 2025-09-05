'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/auth/verify-otp');
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald to-forest dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-white rounded-2xl shadow-xl w-full max-w-[600px] p-8">
        <div className="text-center mb-8">
          <Image src="/logo/web-logo.png" alt="SocietyHub" width={150} height={60} className="mx-auto mb-4" />
          <h1 className="text-heading3 font-bold text-charcoal mb-2">
            Reset Password
          </h1>
          <p className="text-para text-coolgray dark:text-gray-400">
            Enter your email to receive reset instructions
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-small font-semibold text-charcoal mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald focus:outline-none text-charcoal bg-white"
              placeholder="john@example.com"
              required
            />
          </div>
          
          <button type="submit" disabled={isLoading} className="btn btn-primary w-full disabled:opacity-50">
            {isLoading ? 'Sending...' : 'Send OTP'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/auth" className="text-small text-emerald hover:underline">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;