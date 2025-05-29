import Tabs from "@/components/user/tabs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full relative pt-[80px] pb-[71px]">
      {/* top header   */}
      <div className="fixed border-b-gray-500 bg-default border-b-[2px] top-[0] left-[0] w-full flex items-center justify-center px-[16px] py-[20px] bg-defaults">
        <Link className="absolute top-[22px] left-[22px]" href="/user">
          <Image
            src="/icons/arrow-left.svg"
            className="icon"
            alt="icon"
            width={30}
            height={30}
          />
        </Link>
        <div className="h2">Chats</div>
      </div>
      {/* top header END  */}
      {/* page body  */}
      <div className="px-[16px] md:px-[20px] py-[20px] flex flex-col">
        <div className="h3">Welcome to Chats pages</div>
      </div>

      {/* page body END */}
      <Tabs />
    </div>
  );
};

export default page;
