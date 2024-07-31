import React, { useState } from "react";
import eventImage from "../../assets/image.png";

const volunteersData = [
  { name: "John Doe", image: eventImage },
  { name: "Jane Smith", image: eventImage },
  { name: "Alice Johnson", image: eventImage },
  { name: "Bob Brown", image: eventImage },
  { name: "Charlie Davis", image: eventImage },
  { name: "Diana Evans", image: eventImage },
  { name: "Ethan Fox", image: eventImage },
  { name: "Fiona Green", image: eventImage },
];

const AllVolunteers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVolunteers = volunteersData.filter((volunteer) =>
    volunteer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-[30px] mb-8">All Volunteers</h1>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search volunteers"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-[10px] bg-[#20202D] border border-[#95AFD2] text-white"
          />
        </div>
        <div className="text-white mb-4">
          Showing results "
          <span className="text-[#4F96F4]">{filteredVolunteers.length}</span>"
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVolunteers.map((volunteer, index) => (
            <div
              key={index}
              className="bg-[#323048] rounded-[10px] p-4 flex justify-between items-center border-0.5 border-solid border-[#95AFD2]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={volunteer.image}
                  alt={volunteer.name}
                  className="w-20 h-20 rounded"
                />
                <div>
                  <h3 className="text-white text-lg">{volunteer.name}</h3>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button className="bg-green-500 rounded p-2 text-transparent">
                  ✔️
                </button>
                <button className="bg-green-500 rounded p-2 text-transparent">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllVolunteers;
