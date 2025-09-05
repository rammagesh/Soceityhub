import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const headerData = [
    { id: 0, menuTitle: "Home", url: "/" },
    { id: 1, menuTitle: "Features", url: "/features" },
    { id: 2, menuTitle: "Solutions", url: "/solutions" },
    { id: 3, menuTitle: "Pricing", url: "/pricing" },
    { id: 4, menuTitle: "Contact", url: "/contact" },
  ];
  const menuList = headerData.map((items) => (
    <li key={items.id}>
      <Link
        className="p-[12px] font-medium underline-offset-8 hover:underline hover:text-emerald"
        href={items.url}
      >
        {items.menuTitle}
      </Link>
    </li>
  ));
  const footerData = [
    { id: 0, menuTitle: "Terms & Conditions", url: "/terms" },
    { id: 1, menuTitle: "Privacy Policy", url: "/privacy" },
    { id: 2, menuTitle: "Data Privacy", url: "/data-privacy" },
    { id: 3, menuTitle: "Support", url: "/support" },
  ];
  const footerList = footerData.map((items) => (
    <li key={items.id}>
      <Link
        className="p-[12px] font-medium underline-offset-8 hover:underline hover:text-emerald"
        href={items.url}
      >
        {items.menuTitle}
      </Link>
    </li>
  ));
  return (
    <div className="bg-white border-t border-t-gray-300 text-coolgray flex flex-col gap-[8px] w-full">
      <div className="max-w-container mx-auto w-full px-[16px] md:px-[20px] xl:px-[0]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-[40px]">
          <div className="">
            <Link href="/">
              <Image
                src="/logo/web-logo.png"
                alt="SocietyHub Logo"
                width={150}
                height={60}
              />
            </Link>
            <p className="text-small text-coolgray mt-4 max-w-xs">
              Smart society management platform connecting communities and simplifying residential life.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-charcoal mb-4">Quick Links</h4>
            <nav>
              <ul className="flex flex-col gap-[8px]">{menuList}</ul>
            </nav>
          </div>
          <div>
            <h4 className="font-bold text-charcoal mb-4">Legal</h4>
            <ul className="flex flex-col gap-[8px]">{footerList}</ul>
          </div>
          <div className="flex flex-col items-start gap-[8px]">
            <div className="h5">Stay Updated</div>
            <p className="text-small text-coolgray mb-2">Get society management tips & updates</p>
            <form className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                className="flex-1 py-[8px] px-[12px] border border-gray-300 rounded-[8px] focus:border-emerald focus:outline-none text-charcoal min-w-0"
                type="email"
                name="email"
                required
                placeholder="Enter your email..."
              />
              <button type="submit" className="btn btn-primary text-small sm:whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-t-gray-300">
        <div className="max-w-container mx-auto w-full px-[16px] md:px-[20px] xl:px-[0]">
          <div className="py-[8px] flex justify-center">
            <span>©2025 SocietyHub. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
