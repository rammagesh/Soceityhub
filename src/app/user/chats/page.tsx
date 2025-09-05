import PagetopHeader from "@/components/user/pagetop-header";
import Tabs from "@/components/user/tabs";
import ChatService from "@/components/user/ChatService";
import React from "react";

const ChatsPage = () => {
  return (
    <div className="w-full relative pt-[80px] pb-[71px] bg-gradient-to-br from-emerald/5 to-forest/5 min-h-screen">
      <PagetopHeader title="Chats" url="/user" />
      <ChatService />
      <Tabs />
    </div>
  );
};

export default ChatsPage;
