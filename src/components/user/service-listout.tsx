import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceListout = () => {
  const essentialServices = [
    { id: 1, title: "Visitors", describe: "Pre-approve & track visitors", icon: "/icons/home.svg", url: "/user/visitors", badge: "3 Today" },
    { id: 2, title: "Payments", describe: "Pay dues & view bills", icon: "/icons/credit-card.svg", url: "/user/payments", badge: "Due: ₹2.5K" },
    { id: 3, title: "Deliveries", describe: "Track packages & deliveries", icon: "/icons/paste.svg", url: "/user/deliveries", badge: "2 Pending" },
    { id: 4, title: "Complaints", describe: "Report issues & track status", icon: "/icons/alert.svg", url: "/user/helpdesk", badge: "1 Open" }
  ];

  const communityServices = [
    { id: 5, title: "Notice Board", describe: "Society announcements", icon: "/icons/info.svg", url: "/user/noticeboard" },
    { id: 6, title: "Members", describe: "Connect with neighbors", icon: "/icons/group-people.svg", url: "/user/members" },
    { id: 7, title: "Chats", describe: "Community discussions", icon: "/icons/chat-icon.svg", url: "/user/chats" },
    { id: 8, title: "Amenities", describe: "Book facilities", icon: "/icons/office-building.svg", url: "/user/amenities" },
    { id: 9, title: "Events", describe: "Society events & activities", icon: "/icons/group-people.svg", url: "/user/events" },
    { id: 10, title: "Directory", describe: "Contact information", icon: "/icons/phone.svg", url: "/user/directory" }
  ];
  const renderServiceCard = (service: any, isEssential = false) => (
    <Link
      key={service.id}
      href={service.url}
      className={`relative cursor-pointer border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between p-4 rounded-xl ${
        isEssential ? 'border-emerald/20' : ''
      }`}
    >
      {service.badge && (
        <div className="absolute -top-2 -right-2 bg-redrose text-white text-xs-small px-2 py-1 rounded-full font-semibold">
          {service.badge}
        </div>
      )}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h4 className="small font-semibold">{service.title}</h4>
          <div className={`p-2 rounded-lg ${
            isEssential ? 'bg-emerald/10' : 'bg-gray-100'
          }`}>
            <Image src={service.icon} alt={service.title} width={20} height={20} />
          </div>
        </div>
        <p className="xs-small text-coolgray">{service.describe}</p>
      </div>
    </Link>
  );
  return (
    <div className="flex flex-col gap-6 px-[16px] md:px-[20px]">
      {/* Essential Services */}
      <div>
        <h3 className="h5 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald rounded-full"></span>
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {essentialServices.map((service) => renderServiceCard(service, true))}
        </div>
      </div>

      {/* Community Services */}
      <div>
        <h3 className="h5 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-skyblue rounded-full"></span>
          Community Services
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {communityServices.map((service) => renderServiceCard(service))}
        </div>
      </div>
    </div>
  );
};

export default ServiceListout;
