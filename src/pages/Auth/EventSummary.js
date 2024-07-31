import React from "react";
import eventImage from "../../assets/image.png";
import { useParams } from "react-router-dom";
import { getEventById } from "../../api/auth";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../api";

const EventSummary = () => {
  const { eventId } = useParams();

  const { data: event } = useQuery({
    queryKey: ["event", eventId],
    queryFn: () => getEventById(eventId),
  });
  console.log(event);
  if (!event) return null;
  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-[30px] mb-8">{event.name}</h1>
        <div className="w-full mb-8">
          <div className="flex gap-4 overflow-scroll">
            {event.images?.map((image) => {
              return (
                <img
                  src={BASE_URL + "/" + image}
                  alt="Event"
                  className="w-1/3 h-auto rounded"
                />
              );
            })}
            <img
              src={eventImage}
              alt="Event"
              className="w-1/3 h-auto rounded"
            />
            <img
              src={eventImage}
              alt="Event"
              className="w-1/3 h-auto rounded"
            />
            <img
              src={eventImage}
              alt="Event"
              className="w-1/3 h-auto rounded"
            />
            <img
              src={eventImage}
              alt="Event"
              className="w-1/3 h-auto rounded"
            />
          </div>
        </div>
        {/* VOL 1 */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <h2 className="text-white text-[20px] mb-4">
              Volunteer List [Pending]
            </h2>
            <div className="flex flex-col gap-4">
              <VolunteerCArd />
              <VolunteerCArd />
              <VolunteerCArd />
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex max-h-[500px] flex-col">
            <h2 className="text-white text-[20px] mb-4">Event Details</h2>
            <div className="bg-[#323048] p-4 rounded-[10px] flex-grow">
              <p className="text-white">{event.description}</p>
            </div>
          </div>
        </div>
        {/* VOL 2 */}
        <div className="flex flex-col lg:flex-row gap-8 pt-5">
          <div className="w-full">
            <h2 className="text-white text-[20px] mb-4">
              Volunteer List [Approved]
            </h2>
            <div className="flex flex-col gap-4">
              <VolunteerCArd />
              <VolunteerCArd />
              <VolunteerCArd />
              {/* <div className="bg-[#323048] rounded-[10px] p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-white text-lg">Goodwill Event</h3>
                  <p className="text-[#DDD] text-sm">
                    Street 8 venue, California, USA
                  </p>
                  <p className="text-[#DDD] text-sm">1.5k participants</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-red-500 rounded p-2"></button>
                  <button className="bg-red-500 rounded p-2"></button>
                  <button className="bg-red-500 rounded p-2"></button>
                </div>
              </div>
              <div className="bg-[#323048] rounded-[10px] p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-white text-lg">Goodwill Event</h3>
                  <p className="text-[#DDD] text-sm">
                    Street 8 venue, California, USA
                  </p>
                  <p className="text-[#DDD] text-sm">1.5k participants</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-red-500 rounded p-2"></button>
                  <button className="bg-red-500 rounded p-2"></button>
                  <button className="bg-red-500 rounded p-2"></button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VolunteerCArd = ({
  image,
  name = "Testing",
  onAccept = () => {},
  onDecline = () => {},
  onMsg = () => {},
}) => {
  return (
    <div className="bg-[#323048] rounded-[10px] p-4 flex justify-between items-end">
      <div className="flex gap-5 ">
        <img
          src={BASE_URL + "/" + image}
          alt="Event"
          className=" h-[150px] aspect-square rounded object-cover"
        />
        <div>
          <h3 className="text-white text-lg">{name}</h3>
        </div>
      </div>
      <div className="flex gap-2 ">
        <button
          onClick={(_id) => onAccept(_id)}
          className="bg-red-500 rounded p-2 h-[50px] aspect-square"
        ></button>
        <button
          onClick={(_id) => onDecline(_id)}
          className="bg-red-500 rounded p-2  h-[50px] aspect-square"
        ></button>
        <button
          onClick={(_id) => onMsg(_id)}
          className="bg-red-500 rounded p-2  h-[50px] aspect-square"
        ></button>
      </div>
    </div>
  );
};
export default EventSummary;
