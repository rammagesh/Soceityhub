'use client';

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const NoticeBoard = () => {
  const { t } = useLanguage();
  const notices = [
    {
      id: 1,
      title: "Water Supply Maintenance",
      message: "Water supply will be interrupted tomorrow from 10 AM to 2 PM for maintenance work.",
      type: "urgent",
      time: "2 hours ago",
      icon: "/icons/alert.svg"
    },
    {
      id: 2,
      title: "Society Annual Meeting",
      message: "Annual general meeting scheduled for this Saturday at 6 PM in the community hall.",
      type: "event",
      time: "1 day ago",
      icon: "/icons/group-people.svg"
    },
    {
      id: 3,
      title: "New Security Guidelines",
      message: "Updated visitor entry procedures. Please ensure all guests are pre-registered.",
      type: "info",
      time: "3 days ago",
      icon: "/icons/info.svg"
    },
    {
      id: 4,
      title: "Amenity Booking Update",
      message: "Swimming pool timings extended. Now open from 6 AM to 10 PM daily.",
      type: "update",
      time: "1 week ago",
      icon: "/icons/office-building.svg"
    }
  ];

  const getNoticeStyle = (type: string) => {
    switch (type) {
      case 'urgent': return 'border-redrose/30 bg-redrose/5 dark:bg-redrose/10 dark:border-redrose/40';
      case 'event': return 'border-emerald/30 bg-emerald/5 dark:bg-emerald/10 dark:border-emerald/40';
      case 'info': return 'border-skyblue/30 bg-skyblue/5 dark:bg-skyblue/10 dark:border-skyblue/40';
      default: return 'border-amber/30 bg-amber/5 dark:bg-amber/10 dark:border-amber/40';
    }
  };

  return (
    <div className="pl-[16px] md:pl-[20px] flex flex-col gap-4">
      <div className="flex items-center justify-between pr-[16px] md:pr-[20px]">
        <h3 className="h5 flex items-center gap-2">
          <span className="w-1 h-6 bg-amber rounded-full"></span>
          {t('notice_board')}
        </h3>
        <button className="text-emerald small font-semibold">{t('view_all')}</button>
      </div>
      <div className="overflow-x-auto snap-x snap-mandatory scroll-smooth flex space-x-4 pb-2">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className={`snap-start shrink-0 w-72 p-4 rounded-xl border-2 ${getNoticeStyle(notice.type)} cursor-pointer hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-2">
                <Image src={notice.icon} alt={notice.type} width={16} height={16} className="icon" />
              </div>
              <div className="flex-1">
                <h4 className="small font-semibold mb-1 dark:text-white">{notice.title}</h4>
                <p className="xs-small text-coolgray dark:text-gray-400">{notice.time}</p>
              </div>
            </div>
            <p className="xs-small text-charcoal dark:text-gray-300 leading-relaxed">{notice.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;