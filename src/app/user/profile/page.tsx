import PagetopHeader from "@/components/user/pagetop-header";
import Tabs from "@/components/user/tabs";
import UserProfile from "@/components/user/UserProfile";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="w-full relative pt-[80px] pb-[71px] bg-gradient-to-br from-emerald/5 to-forest/5 min-h-screen">
      <PagetopHeader title="Profile" url="/user" />
      <UserProfile />
      <Tabs />
    </div>
  );
};

export default ProfilePage;
