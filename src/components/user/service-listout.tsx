import Image from "next/image";
import React from "react";

const ServiceListout = () => {
  const communityCardContent = [
    {
      id: 1,
      title: "Members",
      describe: "connect society members",
      icon: "./icons/group-people.svg",
    },
    {
      id: 2,
      title: "Visitors",
      describe: "Manage visitor entry",
      icon: "./icons/group-people.svg",
    },
    {
      id: 3,
      title: "Notice board",
      describe: "soceity announcement & event notice",
      icon: "./icons/group-people.svg",
    },
    {
      id: 4,
      title: "Payments",
      describe: "Direct payment of society due",
      icon: "./icons/credit-card.svg",
    },
    {
      id: 5,
      title: "Book amenities",
      describe: "pre book amenities",
      icon: "./icons/office-building.svg",
    },
    {
      id: 6,
      title: "Help desk",
      describe: "Complaint & suggestion",
      icon: "./icons/group-people.svg",
    },
  ];
  const communityCard = communityCardContent.map((items) => (
    <div className="bg-mint cursor-pointer border border-b-gray-400 text-black flex flex-col justify-between p-[12px] rounded-[8px]">
      <div key={items.id} className="">
        <div className="h3">{items.title}</div>
        <p className="x-small">{items.describe}</p>
      </div>
      <span className="flex justify-end">
        <Image src={items.icon} alt="icon" width="50" height="50" />
      </span>
    </div>
  ));
  return (
    <div className="flex flex-col gap-[8px] px-[16px] md:px-20px">
      <div className="h2">Community</div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[12px]">
        {communityCard}
      </div>
    </div>
  );
};

export default ServiceListout;
