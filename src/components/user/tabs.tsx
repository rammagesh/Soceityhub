import Image from "next/image";
import Link from "next/link";
import React from "react";

const Tabs = () => {
  const tabsDetails = [
    { id: 1, title: "Home", icon: "/icons/home-outline.svg", url: "/user" },
    {
      id: 2,
      title: "Chats",
      icon: "/icons/chat-outline.svg",
      url: "/user/chats",
    },
    {
      id: 3,
      title: "Service",
      icon: "/icons/setting-outline.svg",
      url: "/user/settings",
    },
    {
      id: 4,
      title: "Profile",
      icon: "/icons/office-building.svg",
      url: "/user/profile",
    },
  ];
  const tabslist = tabsDetails.map((items) => (
    <Link
      href={items.url}
      key={items.id}
      className="flex flex-col items-center justify-center"
    >
      <Image
        className="icon"
        src={items.icon}
        alt="icon"
        width={30}
        height={30}
      />
      <span>{items.title}</span>
    </Link>
  ));
  return (
    <div className="bg-default fixed left-[0] bottom-[0] w-full border-t-[2px] border-b-gray-500 flex justify-around py-[8px] items-center">
      {tabslist}
    </div>
  );
};

export default Tabs;
