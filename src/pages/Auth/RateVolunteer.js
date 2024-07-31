import React from "react";
import profileImage from "../../assets/user_defualt.jfif";
import PrimaryButton from "../../components/PrimaryButton";
import EventCard from "../../components/events/MobileEventCard ";

const RateVolunteer = () => {
  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-8 mb-8">
          <div className="relative">
            <div className="absolute w-[15rem] h-[15rem]  bg-[#323048] rounded-full p-4"></div>
            <img
              src={profileImage}
              alt="Jason Taylor"
              className="relative w-[13rem] h-[13rem] flex justify-center items-center rounded-full"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-white text-4xl font-bold mt-4">Jason Taylor</h2>
            <div className="flex items-center mt-2">
              <span className="text-[#4F96F4] text-2xl">(4.5)</span>
              <div className="bg-green-500 w-24 h-5 ml-2"></div>
            </div>
            <div className="mt-4 w-full flex justify-end items-end lg:items-start">
              <PrimaryButton label="Give Feedback" className="w-full mt-4" />
            </div>
          </div>
        </div>

        {/* Past Reviews Section */}
        <div className="mb-8">
          <h3 className="text-white text-2xl font-bold mb-4">Past Reviews</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-[#282836] p-4 rounded-[10px]">
              <div className="flex items-center mb-2">
                <img
                  src={profileImage}
                  alt="Albert Jason"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-2">
                  <h4 className="text-white">Albert Jason</h4>
                  <div className="bg-green-500 w-16 h-3"></div>
                </div>
              </div>
              <p className="text-[#DDD] text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="bg-[#282836] p-4 rounded-[10px]">
              <div className="flex items-center mb-2">
                <img
                  src={profileImage}
                  alt="Albert Jason"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-2">
                  <h4 className="text-white">Albert Jason</h4>
                  <div className="bg-green-500 w-16 h-3"></div>
                </div>
              </div>
              <p className="text-[#DDD] text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="bg-[#282836] p-4 rounded-[10px]">
              <div className="flex items-center mb-2">
                <img
                  src={profileImage}
                  alt="Albert Jason"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-2">
                  <h4 className="text-white">Albert Jason</h4>
                  <div className="bg-green-500 w-16 h-3"></div>
                </div>
              </div>
              <p className="text-[#DDD] text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>

        {/* Past Events Attended Section */}
        <div className="mb-8">
          <h3 className="text-white text-2xl font-bold mb-4">
            Past Events Attended
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <EventCard
              title="Goodwill Event A"
              date="28 Aug, 2024"
              location="Street 8 venue, California, USA"
              participants="1.5k participants"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
            <EventCard
              title="Goodwill Event B"
              date="28 Aug, 2024"
              location="Street 8 venue, California, USA"
              participants="1.5k participants"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
            <EventCard
              title="Goodwill Event C"
              date="28 Aug, 2024"
              location="Street 8 venue, California, USA"
              participants="1.5k participants"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
          </div>
        </div>

        {/* Back Button Section */}
        <div className="mt-8 flex justify-center">
          <PrimaryButton label="Back" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default RateVolunteer;
