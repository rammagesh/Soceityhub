import PagetopHeader from "@/components/user/pagetop-header";
import Tabs from "@/components/user/tabs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full relative pt-[80px] pb-[71px]">
      <PagetopHeader title="Chats" url="/user" />
      {/* page body  */}
      <div className="px-[16px] md:px-[20px] py-[20px] flex flex-col">
        <div className="h4">Welcome to Chats pages</div>
      </div>

      {/* page body END */}
      <Tabs />
    </div>
  );
};

export default page;
