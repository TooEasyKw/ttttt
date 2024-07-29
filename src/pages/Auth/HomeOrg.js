import React from "react";
import EventCArd from "../../components/events/EventCard";
import MobileEventCard from "../../components/events/MobileEventCard ";
import DesktopEventCard from "../../components/events/DesktopEventCard ";

const HomeOrg = () => {
  return (
    <div className=" flex flex-col gap-5 w-full h-full  ">
      <DesktopEventCard />
      <div className="flex gap-5 flex-wrap  ">
        <MobileEventCard />
        <MobileEventCard />
        <MobileEventCard />
        <MobileEventCard />
        <MobileEventCard />
        <MobileEventCard />
      </div>
    </div>
  );
};

export default HomeOrg;
