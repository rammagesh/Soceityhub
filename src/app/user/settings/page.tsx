import PagetopHeader from "@/components/user/pagetop-header";
import Tabs from "@/components/user/tabs";
import UserSettings from "@/components/user/UserSettings";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="w-full relative pt-[80px] pb-[71px] bg-gradient-to-br from-emerald/5 to-forest/5 min-h-screen">
      <PagetopHeader title="Settings" url="/user" />
      <UserSettings />
      <Tabs />
    </div>
  );
};

export default SettingsPage;
