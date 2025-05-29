import React from "react";

const NoticeBoard = () => {
  return (
    <div className="pl-[16px] md:pl-[20px] flex flex-col gap-[8px]">
      <div className="h2">Notice board</div>
      <div className="overflow-x-auto snap-x snap-mandatory scroll-smooth flex space-x-[16px] px-4">
        <div className="snap-start shrink-0 w-64 h-40 bg-red-200 rounded-lg flex items-center justify-center text-xl font-bold">
          Slide 1
        </div>
        <div className="snap-start shrink-0 w-64 h-40 bg-green-200 rounded-lg flex items-center justify-center text-xl font-bold">
          Slide 2
        </div>
        <div className="snap-start shrink-0 w-64 h-40 bg-blue-200 rounded-lg flex items-center justify-center text-xl font-bold">
          Slide 3
        </div>
        <div className="snap-start shrink-0 w-64 h-40 bg-yellow-200 rounded-lg flex items-center justify-center text-xl font-bold">
          Slide 4
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
