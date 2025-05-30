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
    { id: 0, menuTitle: "Login/Sign Up", url: "/" },
    { id: 1, menuTitle: "Demo/Try Now", url: "/" },
    { id: 2, menuTitle: "Terms & conditions", url: "/" },
    { id: 3, menuTitle: "Data Privacy", url: "/" },
    { id: 4, menuTitle: "Privacy Policy", url: "/" },
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
        <div className="flex gap-[16px] py-[40px] justify-between">
          <div className="">
            <Link href="/">
              <Image
                src="/logo/web-logo.png"
                alt="logo"
                width={150}
                height={60}
              />
            </Link>
          </div>
          <nav>
            <ul className="flex flex-col gap-[8px]">{menuList}</ul>
          </nav>
          <div className="flex">
            <ul className="flex flex-col gap-[8px]">{footerList}</ul>
          </div>
          <div className="flex flex-col items-start gap-[8px]">
            <div className="h5">Newsletter</div>
            <input
              className="py-[8px] px-[12px] border-[2px] border-charcoal rounded-[8px]"
              type="email"
              name="email"
              required
              placeholder="Enter your Email address..."
            />
            <input type="submit" value="Submit" className="btn btn-blue" />
          </div>
        </div>
      </div>
      <div className="border-t border-t-gray-300">
        <div className="max-w-container mx-auto w-full px-[16px] md:px-[20px] xl:px-[0]">
          <div className="py-[8px] flex justify-center">
            <span>©2025. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
