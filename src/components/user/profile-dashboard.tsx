import Image from "next/image";
import React from "react";

const ProfileDashboard = () => {
  const quickStats = [
    { label: "Visitors Today", value: "3", color: "emerald" },
    { label: "Pending Dues", value: "₹2.5K", color: "amber" },
    { label: "Deliveries", value: "2", color: "skyblue" }
  ];

  return (
    <div className="px-[16px] md:px-[20px] space-y-4">
      {/* Profile Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <div className="relative">
            <Image
              src="/images/avatar1.png"
              width={58}
              height={58}
              alt="avatar"
              className="rounded-full border-3 border-emerald/20"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-springgreen rounded-full border-2 border-white"></div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="h4 font-bold">Hi Hashmitha R</h2>
            <p className="small text-coolgray dark:text-darktext/70">A-210 | FiveGen Society</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-2">
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-redrose rounded-full border border-white"></span>
            <Image
              className="icon"
              src="/icons/alert.svg"
              width={24}
              height={24}
              alt="notifications"
            />
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="grid grid-cols-3 gap-4">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="small font-bold text-charcoal">{stat.value}</p>
              <p className="xs-small text-coolgray dark:text-darktext/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
