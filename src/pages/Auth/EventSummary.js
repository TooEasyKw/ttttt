import React from "react";
import eventImage from "../../assets/image.png";

const EventSummary = () => {
  return (
    <div className="p-8  min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-[30px] mb-8">Goodwill Event</h1>
        <div className="w-full mb-8">
          <div className="flex gap-4">
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
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <h2 className="text-white text-[20px] mb-4">Volunteer List</h2>
            <div className="flex flex-col gap-4">
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
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col">
            <h2 className="text-white text-[20px] mb-4">Event Details</h2>
            <div className="bg-[#323048] p-4 rounded-[10px] flex-grow">
              <p className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSummary;
