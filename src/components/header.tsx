import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
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
  return (
    <div className="bg-white border-b border-b-gray-300 text-coolgray flex w-full">
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
          <div className="flex items-center gap-[16px]">
            <nav>
              <ul className="flex gap-[16px]">{menuList}</ul>
            </nav>
            <div className="flex gap-[8px]">
              <Link className="btn btn-outline" href="/user">
                Login/Sign Up
              </Link>
              <Link className="btn btn-blue" href="/user">
                Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
