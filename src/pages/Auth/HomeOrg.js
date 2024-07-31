import React from "react";
import MobileEventCard from "../../components/events/MobileEventCard ";
import DesktopEventCard from "../../components/events/DesktopEventCard ";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents, getMyEvents } from "../../api/auth";
import dayjs from "dayjs";
import { BASE_URL } from "../../api";
import { useNavigate } from "react-router-dom";

const HomeOrg = () => {
  const naviagte = useNavigate();

  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: () => getMyEvents(),
  });

  const onCardClick = (id) => {
    naviagte(`/summary/${id}`);
  };
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div>
        <h2 className="text-white text-[30px] mb-4">Current Event</h2>

        {data?.map((event) => {
          const eventDate = dayjs(event.date).format("MM-DD-YYYY");
          const todayDate = dayjs().format("MM-DD-YYYY");
          if (eventDate == todayDate)
            return (
              <DesktopEventCard
                onClick={() => onCardClick(event._id)}
                eventDate={eventDate}
                eventDetails={event.description}
                eventImage={BASE_URL + "/" + event.image}
                eventLocation={event.location}
                eventTitle={event.name}
                key={event._id}
                orgImage={BASE_URL + "/" + event.owner.image}
                volunteers={event.confirmedAttendees}
              />
            );
        })}
      </div>
      <div>
        <h2 className="text-white text-[30px] mb-4">Upcoming Events</h2>
        <div className="flex gap-5 flex-wrap">
          {data?.map((event) => {
            const eventDate = dayjs(event.date).format("MM-DD-YYYY");
            const todayDate = dayjs().format("MM-DD-YYYY");
            if (dayjs(eventDate).isAfter(dayjs(todayDate)))
              return (
                <MobileEventCard
                  onClick={() => onCardClick(event._id)}
                  eventDate={eventDate}
                  eventDetails={event.description}
                  eventImage={BASE_URL + "/" + event.image}
                  eventLocation={event.location}
                  eventTitle={event.name}
                  key={event._id}
                  orgImage={BASE_URL + "/" + event.owner.image}
                  volunteers={event.confirmedAttendees}
                />
              );
          })}
        </div>
      </div>
      <div>
        <h2 className="text-white text-[30px] mb-4">Past Events</h2>
        <div className="flex gap-5 flex-wrap">
          {data?.map((event) => {
            const eventDate = dayjs(event.date).format("MM-DD-YYYY");
            const todayDate = dayjs().format("MM-DD-YYYY");
            if (dayjs(eventDate).isBefore(dayjs(todayDate)))
              return (
                <MobileEventCard
                  onClick={() => onCardClick(event._id)}
                  eventDate={eventDate}
                  eventDetails={event.description}
                  eventImage={BASE_URL + "/" + event.image}
                  eventLocation={event.location}
                  eventTitle={event.name}
                  key={event._id}
                  orgImage={BASE_URL + "/" + event.owner.image}
                  volunteers={event.confirmedAttendees}
                />
              );
          })}
        </div>
      </div>
      {/* <div>
        <h2 className="text-white text-[30px] mb-4">Pending Events</h2>
        <div className="flex gap-5 flex-wrap">
          <MobileEventCard />
          <MobileEventCard />
          <MobileEventCard />
        </div>
      </div> */}
    </div>
  );
};

export default HomeOrg;
