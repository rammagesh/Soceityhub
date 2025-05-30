import Image from "next/image";
import React from "react";

const ProfileDashboard = () => {
  return (
    <div className="px-[16px] md:px-20px flex justify-between">
      <div className="flex gap-[8px]">
        <span className="overflow-hidden rounded-[50px] border-[4px] border-bg-[var(--background)]">
          <Image
            src="/images/avatar1.png"
            width={58}
            height={58}
            alt="avartar icon"
          />
        </span>
        <div className="flex flex-col gap-[4px]">
          <div className="h3">Hi Hashmitha R</div>
          <span>A-210 | FiveGen Society</span>
        </div>
      </div>
      <span className="flex items-center justify-center relative">
        <span className="z-[1] absolute mr-[-15px] mt-[-15px] w-[10px] h-[10px] bg-redrose rounded-[20px]"></span>
        <Image
          className="icon"
          src="/icons/alert.svg"
          width={30}
          height={30}
          alt="notification bell"
        />
      </span>
    </div>
  );
};

export default ProfileDashboard;
