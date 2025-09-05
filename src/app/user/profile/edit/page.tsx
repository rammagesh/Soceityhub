import PagetopHeader from "@/components/user/pagetop-header";
import Tabs from "@/components/user/tabs";
import ProfileEditForm from "@/components/user/ProfileEditForm";
import React from "react";

const ProfileEditPage = () => {
  return (
    <div className="w-full relative pt-[80px] pb-[71px] bg-gradient-to-br from-emerald/5 to-forest/5 min-h-screen">
      <PagetopHeader title="Edit Profile" url="/user/profile" />
      <ProfileEditForm />
      <Tabs />
    </div>
  );
};

export default ProfileEditPage;