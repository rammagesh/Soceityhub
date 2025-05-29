import React from "react";
import ProfileDashboard from "@/components/user/profile-dashboard";
import ServiceListout from "@/components/user/service-listout";

const page = () => {
  return (
    <div className="max-w-container mx-auto">
      <div className="flex flex-col py-[20px] gap-[16px]">
        <ProfileDashboard />
        <ServiceListout />
      </div>
    </div>
  );
};

export default page;
