import React, { useState } from "react";
import eventImage from "../../assets/image.png";

const eventsData = [
  {
    name: "Goodwill Event A",
    location: "Street 8 venue, California, USA",
    participants: "1.5k participants",
    image: eventImage,
  },
  {
    name: "Goodwill Event B",
    location: "Street 8 venue, California, USA",
    participants: "1.5k participants",
    image: eventImage,
  },
  {
    name: "Goodwill Event C",
    location: "Street 8 venue, California, USA",
    participants: "1.5k participants",
    image: eventImage,
  },
  {
    name: "Goodwill Event D",
    location: "Street 8 venue, California, USA",
    participants: "1.5k participants",
    image: eventImage,
  },
  {
    name: "Goodwill Event E",
    location: "Street 8 venue, California, USA",
    participants: "1.5k participants",
    image: eventImage,
  },
];

const EventAttendance = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = eventsData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-[30px] mb-8">Event Attendance</h1>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search events"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-[10px] bg-[#20202D] border border-[#95AFD2] text-white"
          />
        </div>
        <div className="text-white mb-4">
          Showing results "
          <span className="text-[#4F96F4]">{filteredEvents.length}</span>"
        </div>
        <div className="space-y-8">
          {filteredEvents.map((event, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="bg-[#323048] rounded-[10px] p-4 flex justify-between items-center border-0.5 border-solid border-[#95AFD2] w-full">
                <div className="flex items-center gap-4">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-20 h-20 rounded"
                  />
                  <div>
                    <h3 className="text-white text-lg">{event.name}</h3>
                    <p className="text-[#DDD] text-sm">{event.location}</p>
                    <p className="text-[#DDD] text-sm">{event.participants}</p>
                  </div>
                </div>
                <button className="bg-green-500 rounded p-2">
                  Attendance List
                </button>
              </div>
              <div className="bg-green-500 rounded-[10px] ml-4 h-[113px] w-[245px]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventAttendance;
