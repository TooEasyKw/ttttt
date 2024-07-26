import React, { useState } from "react";
import Input from "../components/Input";
import Logo from "../components/login/Logo";
import WelcomeText from "../components/login/WelcomeText";
import { useTranslation } from "../context/LanguageProvider";
import { T } from "../translate";
import LinkButton from "../components/LinkButton";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import EyeSVG from "../svgs/EyeSVG";
import EyeOpenSVG from "../svgs/EyeOpenSVG";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../api/auth";
import profileImage from "../assets/user_defualt.jfif";
import RingSVG from "../svgs/RingSVG";
import CameraSVG from "../svgs/CameraSVG";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { translate, language } = useTranslation();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    image: "",
    password: "",
    confirmPassword: "",
    remeberMe: true,
    passwordType: "password",
    type: "Public",
    description: "",
    socialLinks: "",
  });

  const { mutate } = useMutation({
    mutationFn: () => signUp(userInfo),
    onSuccess: () => {
      alert("NEEJA");
    },
  });

  const isArabic = language === "AR";

  const isFormValid = () => {
    for (let key in userInfo) {
      if (!userInfo[key]) return true;
    }

    if (userInfo.password !== userInfo.confirmPassword) return true;

    return false;
  };
  return (
    <div className=" pt-[40px] pb-[40px] back-ground min-w-screen min-h-screen flex justify-center items-center ">
      <div className="w-[90vw] lg:w-[55vw] pt-[20px] pb-[20px]  bg-[#20202D] rounded-[22px] overflow-hidden">
        <div className="h-[300px]   flex flex-col items-center ">
          <Logo />
          <WelcomeText text={translate(T.REGISTER_ACCOUNT_TEXT)} />
        </div>
        <div className=" flex justify-center">
          <form
            className="w-[90%] flex flex-col gap-8"
            onSubmit={(e) => {
              e.preventDefault();
              mutate();
            }}
          >
            <hr className="border-[#ffffff80] " />
            <div className="flex flex-col items-center lg:flex-row">
              {/* IMAGE */}
              <div className="w-[50%] lg:w-[30%]  aspect-square flex justify-center items-center">
                <label
                  htmlFor="image-field"
                  className="cursor-pointer w-[80%] aspect-square  rounded-full flex justify-center items-center relative"
                >
                  <RingSVG />
                  <input
                    onChange={(e) => {
                      setUserInfo({
                        ...userInfo,
                        image: URL.createObjectURL(e.target.files[0]),
                      });
                    }}
                    className="hidden"
                    id="image-field"
                    type="file"
                  />
                  <img
                    alt="User profile"
                    src={userInfo.image || profileImage}
                    className="rounded-full aspect-square w-[80%] absolute object-cover"
                  />
                  <label
                    htmlFor="image-field"
                    className="cursor-pointer absolute bottom-2 right-2 w-[50px] rounded-full flex justify-center items-center bg-[#4583D5] aspect-square border-[6px] border-[#20202D]"
                  >
                    <CameraSVG />
                  </label>
                </label>
              </div>
              {/* username */}
              <div className="w-full lg:w-[70%] flex flex-col justify-center gap-5">
                <Input
                  label={translate(T.REGISTER_ORG_NAME_LABEL)}
                  placeholder={translate(T.REGISTER_ORG_NAME_PLACEHOLDER)}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, username: e.target.value });
                  }}
                />
                <Input
                  type="email"
                  label={translate(T.REGISTER_ORG_EMAIL_LABEL)}
                  placeholder={translate(T.REGISTER_ORG_EMAIL_PLACEHOLDER)}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, email: e.target.value });
                  }}
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div
              className={`flex flex-col gap-5 
              ${isArabic ? "lg:flex-row-reverse" : "lg:flex-row"} `}
            >
              <div className="w-full">
                <Input
                  error={
                    userInfo.password !== userInfo.confirmPassword &&
                    translate(T.REGISTER_PASSWORD_UNMATCHED)
                  }
                  type={userInfo.passwordType}
                  SVG2={
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        setUserInfo({
                          ...userInfo,
                          passwordType:
                            userInfo.passwordType === "text"
                              ? "password"
                              : "text",
                        });
                      }}
                    >
                      {userInfo.passwordType === "password" ? (
                        <EyeSVG />
                      ) : (
                        <EyeOpenSVG />
                      )}
                    </div>
                  }
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, password: e.target.value });
                  }}
                  label={translate(T.REGISTER_PASSWORD_FIELD_LABLE)}
                  placeholder={translate(T.REGISTER_PASSWORD_FIELD_PLACEHOLDER)}
                />
              </div>
              <div className="w-full">
                <Input
                  type={userInfo.passwordType}
                  SVG2={
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        setUserInfo({
                          ...userInfo,
                          passwordType:
                            userInfo.passwordType === "text"
                              ? "password"
                              : "text",
                        });
                      }}
                    >
                      {userInfo.passwordType === "password" ? (
                        <EyeSVG />
                      ) : (
                        <EyeOpenSVG />
                      )}
                    </div>
                  }
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      confirmPassword: e.target.value,
                    });
                  }}
                  label={translate(T.REGISTER_PASSWORD_CONFIRM_FIELD_LABLE)}
                  placeholder={translate(
                    T.REGISTER_PASSWORD_CONFIRM_FIELD_PLACEHOLDER
                  )}
                />
              </div>
            </div>

            {/* PUBLIC */}
            <div className={`text-white ${isArabic && "text-right"}`}>
              {translate(T.REGISTER_ORG_TYPE_LABEL)}
            </div>
            <div className="flex flex-col lg:flex-row gap-5  ">
              <div
                className={`w-full border-4  ${
                  userInfo.type === "Private"
                    ? "rounded-[12px] border-4 border-[#4583D5]"
                    : "border-transparent"
                }`}
              >
                <SecondaryButton
                  onClick={() => {
                    setUserInfo({ ...userInfo, type: "Private" });
                  }}
                  label={translate(T.REGISTER_ORG_TYPE_PRIVATE)}
                />
              </div>
              <div
                className={`w-full border-4  ${
                  userInfo.type === "Public"
                    ? "rounded-[12px] border-4 border-[#4583D5]"
                    : "border-transparent"
                }`}
              >
                <SecondaryButton
                  onClick={() => {
                    setUserInfo({ ...userInfo, type: "Public" });
                  }}
                  label={translate(T.REGISTER_ORG_TYPE_PUBLICK)}
                />
              </div>
            </div>
            {/* Description */}
            <div>
              <TextArea
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    description: e.target.value,
                  });
                }}
                label={translate(T.REGISTER_DESCRIPTION_LABEL)}
                placeholder={translate(T.REGISTER_DESCRIPTION_PLACEHOLDER)}
              />
            </div>
            <Input
              onChange={(e) => {
                setUserInfo({
                  ...userInfo,
                  socialLinks: e.target.value,
                });
              }}
              placeholder={translate(T.REGISTER_SOCIAL_LINKS_PLACEHOLDER)}
              label={translate(T.REGISTER_SOCIAL_LINKS_LABEL)}
            />

            <PrimaryButton
              disabled={isFormValid()}
              type="submit"
              label={translate(T.REGISTER_REGISTER_BUTTON)}
            />
            <div
              className={`flex gap-3 justify-center items-center text-white
              ${isArabic && "flex-row-reverse"}
              `}
            >
              <div>{translate(T.REGISTER_ALREADY_HAVE_ACCOUNT)}</div>
              <LinkButton
                onClick={() => navigate("/login")}
                text={translate(T.REHISTER_LOGIN_BUTTON)}
                className={"text-[16px]"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
