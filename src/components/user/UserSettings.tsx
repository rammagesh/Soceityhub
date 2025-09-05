'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const UserSettings = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isPWA, setIsPWA] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' }
  ];

  useEffect(() => {
    setIsPWA(window.matchMedia('(display-mode: standalone)').matches);
  }, []);

  const settingsOptions = [
    { id: 1, title: t('notifications'), desc: "Manage push notifications", icon: "/icons/alert.svg", toggle: true },
    { id: 2, title: t('privacy'), desc: "Control your privacy settings", icon: "/icons/key.svg" },
    { id: 3, title: t('security'), desc: "Password & security options", icon: "/icons/setting.svg" },
    { id: 5, title: t('help_support'), desc: "Get help and contact support", icon: "/icons/phone.svg" },
    { id: 6, title: t('about'), desc: "App version and information", icon: "/icons/info.svg" }
  ];

  return (
    <div className="px-[16px] md:px-[20px] py-[20px] space-y-6">
      {/* Profile Section */}
      <Link href="/user/profile" className="block dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3">
          <Image
            src="/images/avatar1.png"
            width={50}
            height={50}
            alt="Profile"
            className="rounded-full border-2 border-emerald/20"
          />
          <div className="flex-1">
            <h3 className="small font-semibold dark:text-darktext">Hashmitha R</h3>
            <p className="xs-small text-coolgray dark:text-darktext/70">A-210, FiveGen Society</p>
          </div>
          <Image src="/icons/arrow-left.svg" alt="Arrow" width={16} height={16} className="rotate-180 icon" />
        </div>
      </Link>

      {/* Theme Toggle - Only in PWA */}
      {isPWA && (
        <div className="dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-emerald/10 rounded-lg p-2">
                <Image src="/icons/setting.svg" alt="Theme" width={20} height={20} className="icon" />
              </div>
              <div>
                <h4 className="small font-semibold dark:text-darktext">{t('dark_mode')}</h4>
                <p className="xs-small text-coolgray dark:text-darktext/70">Switch between light and dark theme</p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                theme === 'dark' ? 'bg-emerald' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  theme === 'dark' ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      )}

      {/* Language Selection */}
      <div className="dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-md transition-shadow" onClick={() => setShowLanguageModal(true)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-emerald/10 rounded-lg p-2">
              <Image src="/icons/info.svg" alt="Language" width={20} height={20} className="icon" />
            </div>
            <div>
              <h4 className="small font-semibold dark:text-darktext">{t('language')}</h4>
              <p className="xs-small text-coolgray dark:text-darktext/70">{languages.find(l => l.code === language)?.nativeName}</p>
            </div>
          </div>
          <Image src="/icons/arrow-left.svg" alt="Arrow" width={16} height={16} className="rotate-180 icon" />
        </div>
      </div>

      {/* Settings Options */}
      <div className="space-y-3">
        {settingsOptions.map((option) => (
          <div key={option.id} className="dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-emerald/10 rounded-lg p-2">
                  <Image src={option.icon} alt={option.title} width={20} height={20} className="icon" />
                </div>
                <div>
                  <h4 className="small font-semibold dark:text-darktext">{option.title}</h4>
                  <p className="xs-small text-coolgray dark:text-darktext/70">{option.desc}</p>
                </div>
              </div>
              {option.toggle ? (
                <div className="w-10 h-5 bg-gray-300 rounded-full relative">
                  <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full" />
                </div>
              ) : (
                <Image src="/icons/arrow-left.svg" alt="Arrow" width={16} height={16} className="rotate-180 icon" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Account Actions */}
      <div className="dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="small font-semibold mb-4 dark:text-darktext">Account</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="bg-skyblue/10 rounded-lg p-2">
              <Image src="/icons/paste.svg" alt="Backup" width={16} height={16} className="icon" />
            </div>
            <span className="small dark:text-darktext">Backup Data</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-redrose/5 transition-colors text-redrose">
            <div className="bg-redrose/10 rounded-lg p-2">
              <Image src="/icons/trash.svg" alt="Logout" width={16} height={16} />
            </div>
            <span className="small">Logout</span>
          </button>
        </div>
      </div>

      {/* Language Selection Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="dark:bg-gray-800 rounded-xl p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="h5 font-bold dark:text-darktext">{t('language')}</h3>
              <button onClick={() => setShowLanguageModal(false)}>
                <Image src="/icons/close.svg" alt="Close" width={20} height={20} className="icon" />
              </button>
            </div>
            <div className="space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    setShowLanguageModal(false);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                    language === lang.code
                      ? 'bg-emerald/10 border border-emerald/30'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="text-left">
                    <p className="small font-semibold dark:text-darktext">{lang.nativeName}</p>
                    <p className="xs-small text-coolgray dark:text-darktext/70">{lang.name}</p>
                  </div>
                  {language === lang.code && (
                    <Image src="/icons/check.svg" alt="Selected" width={16} height={16} className="text-emerald" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSettings;