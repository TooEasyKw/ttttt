import React, { useState } from "react";
import MenuSVG from "../svgs/MenuSVG";
import LanguageDropDown from "./LanguageDropDown";
import { getOrganizationProfile } from "../api/auth";
import { BASE_URL } from "../api";
import { useQuery } from "@tanstack/react-query";

const NavBar = ({ toggleSidebar, isOpen }) => {
  const [orgProfile, setOrgProfile] = useState({ name: "", profilePic: "" });

  const { data, error, isLoading } = useQuery({
    queryKey: ["organizationProfile"],
    queryFn: getOrganizationProfile,
    onSuccess: (data) => {
      setOrgProfile({ name: data.username, profilePic: data.image });
    },
    onError: (error) => {
      console.error("Error fetching organization profile", error);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-[75px] bg-[#34324C] flex justify-between items-center p-4 relative z-10">
      <button
        onClick={toggleSidebar}
        className="text-white focus:outline-none relative"
      >
        <div className="absolute">{!isOpen && <MenuSVG />}</div>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen && "M6 18L18 6M6 6l12 12"}
          ></path>
        </svg>
      </button>
      <div className="text-white">
        <div className="flex justify-center items-center gap-3">
          <div className="relative h-[75px] justify-center flex items-center">
            <LanguageDropDown />
          </div>

          <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full">
            <img
              src={BASE_URL + "/" + orgProfile.profilePic}
              alt="Organization Profile"
              className="w-[55px] h-[55px] bg-[#34324C] flex justify-center items-center rounded-full"
            />
          </div>

          <h1
            className={`max-w-[70px] lg:max-w-[250px] ${
              isOpen ? "hidden lg:block" : "block"
            }`}
          >
            {orgProfile.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
