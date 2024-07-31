import React, { useState } from "react";
import LOGO from "../../assets/LOGO_ONLY.png";
import LocationSVG from "../../svgs/LocationSVG";
import EventTestImage from "../../assets/image.png";
import RingSVG from "../../svgs/RingSVG";
import UserDeafult from "../../assets/user_defualt.jfif";
const profiles = [
  { image: LOGO },
  { image: LOGO },
  { image: LOGO },
  { image: LOGO },
  { image: LOGO },
  { image: LOGO },
  { image: LOGO },
];
const MobileEventCard = ({
  eventImage = EventTestImage,
  eventTitle = "Goodwill Event",
  eventLocation = "Street 8 venue, California, USA",
  volunteers = profiles,
  eventDetails = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  eventDate = "24,Aug,2024",
  orgImage = UserDeafult,
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className="w-[26rem] cursor-pointer min-w-[26rem] bg-[#323048] relative p-[0.875rem] rounded-[0.625rem] h-[24.25rem] max-w-[75rem]   flex flex-col  gap-[0.875rem]"
    >
      <div className="h-[12.5rem] ">
        <img
          src={eventImage}
          className="object-cover h-full w-full rounded-[0.625rem]"
        />
      </div>
      {/* MOBILE */}
      <div className="w-full h-full   flex flex-col gap-[0.875rem]">
        <div className="flex justify-between">
          <div className="text-white text-[1.25rem] font-bold w-full">
            {eventTitle}
          </div>
          {/* TITLE & PROFILES */}
          <div className="w-full  flex">
            <div
              className="flex relative ml-auto   items-center h-full justify-center"
              style={{ width: `${15 * volunteers.length}px` }}
            >
              {volunteers?.map((profile, index) => {
                return (
                  <div
                    className={` w-[25px] absolute overflow-hidden aspect-square rounded-full  `}
                    style={{
                      left: `${index * 12}px`,
                      zIndex: profiles.length - index,
                    }}
                  >
                    <img className="w-full h-full" src={profile.image} />
                  </div>
                );
              })}
            </div>
            <p className="flex gap-1 justify-center items-center text-[#DDD]">
              <span className="text-white text-[0.875rem] font-bold ">
                {volunteers.length}
              </span>
              participants
            </p>
          </div>
        </div>
        {/* LOCATION */}
        <div className="text-[0.875rem] text-[#DDD] flex gap-2 items-center">
          <LocationSVG />
          {eventLocation}
        </div>

        {/* DETIALS */}
        <div className="text-[0.75rem] h-full text-[#DDD]">{eventDetails}</div>
      </div>

      <div className="bg-[#4D4A71]  rounded-md p-[10px] pl-5 pr-5 text-[0.875rem] text-white absolute top-5 right-5">
        {eventDate}
      </div>
    </div>
  );
};

export default MobileEventCard;
