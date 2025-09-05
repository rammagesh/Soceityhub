import PagetopHeader from "@/components/user/pagetop-header";
import Tabs from "@/components/user/tabs";
import ServiceListout from "@/components/user/service-listout";
import React from "react";

const ServicesPage = () => {
  return (
    <div className="w-full relative pt-[80px] pb-[71px] bg-gradient-to-br from-emerald/5 to-forest/5 min-h-screen">
      <PagetopHeader title="Services" url="/user" />
      <div className="py-[20px]">
        <ServiceListout />
      </div>
      <Tabs />
    </div>
  );
};

export default ServicesPage;