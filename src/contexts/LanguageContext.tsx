'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'ta' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'notice_board': 'Notice Board',
    'view_all': 'View All',
    'home': 'Home',
    'chats': 'Chats',
    'service': 'Service',
    'settings': 'Settings',
    'profile': 'Profile',
    'dark_mode': 'Dark Mode',
    'language': 'Language',
    'notifications': 'Notifications',
    'privacy': 'Privacy',
    'security': 'Security',
    'help_support': 'Help & Support',
    'about': 'About'
  },
  ta: {
    'notice_board': 'அறிவிப்பு பலகை',
    'view_all': 'அனைத்தையும் பார்க்க',
    'home': 'முகப்பு',
    'chats': 'அரட்டைகள்',
    'service': 'சேவை',
    'settings': 'அமைப்புகள்',
    'profile': 'சுயவிவரம்',
    'dark_mode': 'இருண்ட பயன்முறை',
    'language': 'மொழி',
    'notifications': 'அறிவிப்புகள்',
    'privacy': 'தனியுரிமை',
    'security': 'பாதுகாப்பு',
    'help_support': 'உதவி மற்றும் ஆதரவு',
    'about': 'பற்றி'
  },
  hi: {
    'notice_board': 'सूचना बोर्ड',
    'view_all': 'सभी देखें',
    'home': 'होम',
    'chats': 'चैट्स',
    'service': 'सेवा',
    'settings': 'सेटिंग्स',
    'profile': 'प्रोफाइल',
    'dark_mode': 'डार्क मोड',
    'language': 'भाषा',
    'notifications': 'सूचनाएं',
    'privacy': 'गोपनीयता',
    'security': 'सुरक्षा',
    'help_support': 'सहायता और समर्थन',
    'about': 'के बारे में'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'ta', 'hi'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};