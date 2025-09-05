'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setDeferredPrompt(null);
  };

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white rounded-xl shadow-lg border border-gray-200 p-4 z-50">
      <div className="flex items-start gap-3">
        <div className="bg-emerald/10 rounded-lg p-2 flex-shrink-0">
          <Image src="/logo/icon-192x192.png" alt="SocietyHub" width={24} height={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-heading6 font-bold text-charcoal mb-1">Install SocietyHub</h3>
          <p className="text-small text-coolgray mb-3">Get quick access to your society dashboard</p>
          <div className="flex gap-2">
            <button 
              onClick={handleInstallClick}
              className="btn btn-primary text-small px-3 py-1.5"
            >
              Install
            </button>
            <button 
              onClick={handleDismiss}
              className="btn btn-outline text-small px-3 py-1.5"
            >
              Later
            </button>
          </div>
        </div>
        <button 
          onClick={handleDismiss}
          className="text-coolgray hover:text-charcoal p-1"
        >
          <Image src="/icons/close.svg" alt="Close" width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;