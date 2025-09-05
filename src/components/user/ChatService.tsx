import React from 'react';
import Image from 'next/image';

const ChatService = () => {
  const chatGroups = [
    { id: 1, name: "Society General", lastMessage: "Meeting tomorrow at 6 PM", time: "2:30 PM", unread: 3, type: "group" },
    { id: 2, name: "Security Team", lastMessage: "New visitor protocol updated", time: "1:15 PM", unread: 0, type: "official" },
    { id: 3, name: "Maintenance", lastMessage: "Water supply will be off from 10-12", time: "11:45 AM", unread: 1, type: "official" },
    { id: 4, name: "Block A Residents", lastMessage: "Parking issue discussion", time: "Yesterday", unread: 5, type: "group" },
    { id: 5, name: "Admin Office", lastMessage: "Monthly dues reminder", time: "Yesterday", unread: 0, type: "official" }
  ];

  const quickActions = [
    { id: 1, title: "Security", icon: "/icons/alert.svg", desc: "Emergency contact" },
    { id: 2, title: "Maintenance", icon: "/icons/office-building.svg", desc: "Report issues" },
    { id: 3, title: "Admin", icon: "/icons/setting.svg", desc: "General queries" },
    { id: 4, title: "Delivery", icon: "/icons/home.svg", desc: "Package updates" }
  ];

  return (
    <div className="px-[16px] md:px-[20px] py-[20px] space-y-6">
      {/* Quick Actions */}
      <div>
        <h3 className="h5 mb-4">Quick Contact</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <div key={action.id} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
              <div className="bg-emerald/10 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Image src={action.icon} alt={action.title} width={20} height={20} />
              </div>
              <p className="small font-semibold">{action.title}</p>
              <p className="xs-small text-coolgray">{action.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Groups */}
      <div>
        <h3 className="h5 mb-4">Recent Chats</h3>
        <div className="space-y-2">
          {chatGroups.map((chat) => (
            <div key={chat.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  chat.type === 'official' ? 'bg-skyblue/10' : 'bg-emerald/10'
                }`}>
                  <Image 
                    src={chat.type === 'official' ? "/icons/office-building.svg" : "/icons/group-people.svg"} 
                    alt={chat.name} 
                    width={24} 
                    height={24} 
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="small font-semibold">{chat.name}</h4>
                    <span className="xs-small text-coolgray">{chat.time}</span>
                  </div>
                  <p className="xs-small text-coolgray truncate">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="bg-redrose text-white rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="xs-small font-bold">{chat.unread}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-gradient-to-r from-redrose/10 to-redrose/5 rounded-xl p-4 border border-redrose/20">
        <div className="flex items-center gap-3">
          <div className="bg-redrose/10 rounded-full p-3">
            <Image src="/icons/phone.svg" alt="Emergency" width={24} height={24} />
          </div>
          <div className="flex-1">
            <h4 className="small font-semibold text-redrose">Emergency Contact</h4>
            <p className="xs-small text-coolgray">24/7 Security & Emergency Services</p>
          </div>
          <button className="btn btn-danger text-xs-small px-3 py-1">Call Now</button>
        </div>
      </div>
    </div>
  );
};

export default ChatService;