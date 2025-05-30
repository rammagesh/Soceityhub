import Image from "next/image";
import Link from "next/link";
import React from "react";

const PagetopHeader = ({ title, url }: any) => {
  return (
    <>
      {/* top header   */}
      <div className="fixed border-b-gray-500 bg-default border-b-[2px] top-[0] left-[0] w-full flex items-center justify-center px-[16px] py-[20px] bg-defaults">
        <Link className="absolute top-[18px] left-[16px]" href={url}>
          <Image
            src="/icons/arrow-left.svg"
            className="icon"
            alt="icon"
            width={30}
            height={30}
          />
        </Link>
        <div className="h4">{title}</div>
      </div>
      {/* top header END  */}
    </>
  );
};

export default PagetopHeader;
