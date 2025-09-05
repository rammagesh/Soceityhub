'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/auth/reset-password');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald/5 to-forest/5 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-[600px] bg-white dark:bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="h3 text-charcoal mb-2">Verify OTP</h1>
          <p className="text-coolgray dark:text-gray-400">Enter the 6-digit code sent to your email</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-emerald text-charcoal bg-white"
                required
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={isLoading || otp.some(digit => !digit)}
            className="w-full btn btn-primary disabled:opacity-50"
          >
            {isLoading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-coolgray dark:text-gray-400">
            Didn't receive code?{' '}
            <button className="text-emerald font-semibold hover:underline">
              Resend OTP
            </button>
          </p>
          <Link href="/auth/forgot-password" className="text-emerald font-semibold hover:underline block mt-2">
            Back to Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;