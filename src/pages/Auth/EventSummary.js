import React, { useState } from "react";
import eventImage from "../../assets/image.png";
import { useParams } from "react-router-dom";
import { getEventById, handleAttendanceRequest } from "../../api/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
                  className="w-1/3 h-auto rounded object-cover"
                />
              );
            })}
          </div>
        </div>
        {/* VOL 1 */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <h2 className="text-white text-[20px] mb-4">
              Volunteer List [Pending]
            </h2>
            <div className="flex flex-col gap-4">
              {event?.pendingRequests.map((request) => (
                <VolunteerCArd
                  requestId={request?._id}
                  eventId={eventId}
                  name={request?.userId?.firstName}
                  image={request?.userId?.image}
                />
              ))}
              {/* <VolunteerCArd />
              <VolunteerCArd />
              <VolunteerCArd /> */}
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex max-h-[500px] flex-col">
            <h2 className="text-white text-[20px] mb-4">Event Details</h2>
            <div className="bg-[#323048] p-4 rounded-[10px] flex-grow">
              <p className="text-white">{event.description}</p>
              <p className="text-white">Start Time : {event.startTime}</p>
              <p className="text-white">End Time : {event.endTime}</p>
              <p className="text-white">
                Max Number Of Attendees : {event.maxParticipants}
              </p>
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
              {event?.confirmedAttendees.map((request) => (
                <VolunteerCArd
                  requestId={request?._id}
                  eventId={eventId}
                  name={request?.userId?.firstName}
                  image={request?.userId?.image}
                  showAction={false}
                />
              ))}
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
        {/* VOL 3 */}
        <div className="flex flex-col lg:flex-row gap-8 pt-5">
          <div className="w-full">
            <h2 className="text-white text-[20px] mb-4">
              Volunteer List [Rejected]
            </h2>
            <div className="flex flex-col gap-4">
              {event?.rejectedAttendees.map((request) => (
                <VolunteerCArd
                  requestId={request?._id}
                  eventId={eventId}
                  name={request?.userId?.firstName}
                  image={request?.userId?.image}
                  showAction={false}
                />
              ))}
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
  requestId,
  eventId,
  image,
  name = "Testing",
  showAction = true,
  onAccept = () => {},
  onDecline = () => {},
  onMsg = () => {},
}) => {
  const queryClinet = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (a) => handleAttendanceRequest(eventId, requestId, a),
    mutationKey: ["handleAttendenceRequest"],
    onSuccess: () => {
      queryClinet.invalidateQueries(["event", eventId]);
    },
  });
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
      {showAction && (
        <div className="flex gap-2 ">
          <button
            onClick={() => {
              mutate("approve");
            }}
            className="bg-green-500 rounded p-2 h-[50px] w-[65px] aspect-square text-white text-center"
          >
            Accept
          </button>
          <button
            onClick={() => {
              mutate("reject");
            }}
            className="bg-red-500 rounded p-2  w-[60px] h-[50px] aspect-square text-white text-center"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};
export default EventSummary;
