import React from "react";
import ProfileDashboard from "@/components/user/profile-dashboard";
import ServiceListout from "@/components/user/service-listout";
import NoticeBoard from "@/components/user/notice-board";
import Tabs from "@/components/user/tabs";

const page = () => {
  return (
    <div className="max-w-container mx-auto">
      <div className="flex flex-col pt-[20px] gap-[16px] pb-[90px]">
        <ProfileDashboard />
        <NoticeBoard />
        <ServiceListout />
      </div>
      <Tabs />
    </div>
  );
};

export default page;
