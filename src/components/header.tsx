"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerData = [
    { id: 0, menuTitle: "Home", url: "/" },
    { id: 1, menuTitle: "Features", url: "/features" },
    { id: 2, menuTitle: "Solutions", url: "/solutions" },
    { id: 3, menuTitle: "Pricing", url: "/pricing" },
    { id: 4, menuTitle: "Contact", url: "/contact" },
  ];
  const menuList = headerData.map((items) => {
    const isActive = pathname === items.url;
    return (
      <li key={items.id}>
        <Link
          className={`p-[12px] font-medium underline-offset-8 hover:underline hover:text-emerald ${
            isActive ? 'underline text-emerald' : ''
          }`}
          href={items.url}
        >
          {items.menuTitle}
        </Link>
      </li>
    );
  });
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-b-gray-300 dark:border-gray-700 text-coolgray dark:text-gray-300 flex w-full">
      <div className="max-w-container mx-auto w-full px-[16px] md:px-[20px] xl:px-[0]">
        <div className="flex justify-between items-center w-full py-[16px]">
          <Link href="/">
            <Image
              src="/logo/web-logo.png"
              alt="logo"
              width={150}
              height={60}
            />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-[16px]">
            <nav>
              <ul className="flex gap-[16px]">{menuList}</ul>
            </nav>
            <div className="flex gap-[8px]">
              <Link className="btn btn-outline" href="/auth">
                Login/Sign Up
              </Link>
              <Link className="btn btn-blue" href="/demo">
                Demo
              </Link>
            </div>
          </div>
          
          {/* Mobile/Tablet Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-300 dark:border-gray-700">
            <nav className="px-[16px] py-4">
              <ul className="flex flex-col gap-2">{menuList}</ul>
              <div className="flex flex-col gap-2 mt-4">
                <Link className="btn btn-outline w-full" href="/auth">
                  Login/Sign Up
                </Link>
                <Link className="btn btn-blue w-full" href="/demo">
                  Demo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
