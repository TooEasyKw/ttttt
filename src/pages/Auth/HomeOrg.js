import React from "react";
import MobileEventCard from "../../components/events/MobileEventCard ";
import DesktopEventCard from "../../components/events/DesktopEventCard ";

const HomeOrg = () => {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div>
        <h2 className="text-white text-[30px] mb-4">Current Event</h2>
        <DesktopEventCard />
      </div>
      <div>
        <h2 className="text-white text-[30px] mb-4">Upcoming Events</h2>
        <div className="flex gap-5 flex-wrap">
          <MobileEventCard />
          <MobileEventCard />
          <MobileEventCard />
        </div>
      </div>
      <div>
        <h2 className="text-white text-[30px] mb-4">Past Events</h2>
        <div className="flex gap-5 flex-wrap">
          <MobileEventCard />
          <MobileEventCard />
          <MobileEventCard />
        </div>
      </div>
      <div>
        <h2 className="text-white text-[30px] mb-4">Pending Events</h2>
        <div className="flex gap-5 flex-wrap">
          <MobileEventCard />
          <MobileEventCard />
          <MobileEventCard />
        </div>
      </div>
    </div>
  );
};

export default HomeOrg;
