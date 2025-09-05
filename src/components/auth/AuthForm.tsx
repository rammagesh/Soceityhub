import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald to-forest dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-white rounded-2xl shadow-xl w-full max-w-[600px] p-8">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <Image src="/logo/web-logo.png" alt="SocietyHub" width={150} height={60} className="mx-auto" />
          </Link>
          <h1 className="text-heading3 font-bold text-charcoal mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-para text-coolgray dark:text-gray-400">
            {isLogin ? 'Sign in to your account' : 'Join SocietyHub today'}
          </p>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="block text-small font-semibold text-charcoal mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald focus:outline-none text-charcoal bg-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-small font-semibold text-charcoal mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald focus:outline-none text-charcoal bg-white"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </>
          )}
          
          <div>
            <label className="block text-small font-semibold text-charcoal mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald focus:outline-none text-charcoal bg-white"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label className="block text-small font-semibold text-charcoal mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald focus:outline-none text-charcoal bg-white"
              placeholder="••••••••"
            />
          </div>
          
          {isLogin && (
            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-small text-coolgray dark:text-gray-400">Remember me</span>
              </label>
              <Link href="/auth/forgot-password" className="text-small text-emerald hover:underline">
                Forgot password?
              </Link>
            </div>
          )}
          
          <button type="submit" className="btn btn-primary w-full">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <p className="text-small text-coolgray dark:text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald hover:underline ml-1"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
          <Link href="/" className="text-small text-emerald hover:underline block">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;