import React from "react";
import LOGO from "../../assets/logo-text-pur.png";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import { useTranslation } from "../../context/LanguageProvider";
import { T } from "../../translate";
import { useNavigate } from "react-router-dom";
import LanguageDropDown from "../../components/LanguageDropDown";
const Home = () => {
  const { translate, setLanguage, language } = useTranslation();
  const naviagte = useNavigate();

  return (
    <div className="back-ground min-w-screen min-h-screen flex justify-center items-center ">
      {/* <div className="flex items-center justify-center h-screen">
    
      </div> */}

      <div className="w-[90vw] lg:w-[55vw] justify-around h-[85vh] bg-[#20202D] p-[40px] rounded-[22px] overflow-hidden flex flex-col relative  items-center">
        <div className="absolute top-5 right-5 ">
          <LanguageDropDown />
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="text-[60px] text-white">
            {translate(T.HOME_WELCOME)}
          </div>
          <div className="text-[18px] text-white ">
            {translate(T.HOME_SANAD)}
          </div>
        </div>

        <img alt="LOGO" src={LOGO} className="w-full lg:w-[80%]" />
        <div className="w-full flex flex-col gap-3">
          <PrimaryButton
            onClick={() => {
              naviagte("/login");
            }}
            label={translate(T.HOME_LOGIN)}
          />
          <SecondaryButton
            onClick={() => {
              naviagte("/register");
            }}
            label={translate(T.HOME_REGISTER)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
