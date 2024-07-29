import React, { useState } from "react";
import MenuSVG from "../svgs/MenuSVG";
import LOGO_ONLY from "../assets/LOGO_ONLY.png";
import LOGO_TEXT from "../assets/LOGO_TEXT.png";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
const Main = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-screen min-w-screen h-screen min-h-screen bg-[#1E1E2B] flex ">
      {/* SIDEBAR */}
      <div
        className={`flex flex-col h-screen bg-[#34324C] fixed top-0 transition-all duration-300 z-10 ease-in-out ${
          isOpen ? "w-[400px] lg:w-[300px]" : "w-[75px]"
        }  `}
      >
        <div className="w-full h-[75px] ">
          {!isOpen && (
            <img
              src={LOGO_ONLY}
              alt="LOGO"
              className="w-full h-full object-contain"
            />
          )}
          {isOpen && (
            <img
              src={LOGO_TEXT}
              alt="LOGO"
              className="w-full h-full object-contain"
            />
          )}
        </div>
        <SideBar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      </div>

      <div className={`w-full  `}>
        {/* NAVBAR */}
        <div
          className={`top-0 right-0 w-full z-[20] fixed transition-all duration-300 pl-[75px] ${
            isOpen ? "pl-[400px] lg:pl-[300px]" : "pl-[75px]"
          }`}
        >
          <NavBar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        </div>

        {/* PAGE */}
        <div
          className={` w-[90%]  ml-auto mr-auto pt-[85px] p-5 ${
            isOpen ? "pl-[400px] lg:pl-[300px]" : "pl-[75px]"
          }`}
        >
          {children}
        </div>

        {isOpen && (
          <div
            className="absolute inset-0 bg-[#00000066] z[-10] block lg:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Main;
