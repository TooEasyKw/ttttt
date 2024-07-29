import React, { useState, useContext } from "react";
import Input from "../../components/Input";
import Logo from "../../components/login/Logo";
import WelcomeText from "../../components/login/WelcomeText";
import { useTranslation } from "../../context/LanguageProvider";
import { T } from "../../translate";
import LinkButton from "../../components/LinkButton";
import ToggleCheckBox from "../../components/ToggleCheckBox";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import MailIcon from "../../svgs/Email";
import PasswordSVG from "../../svgs/PasswordSVG";
import EyeSVG from "../../svgs/EyeSVG";
import GoogleSVG from "../../svgs/GoogleSVG";
import AppleSVG from "../../svgs/AppleSVG";
import EyeOpenSVG from "../../svgs/EyeOpenSVG";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import LanguageDropDown from "../../components/LanguageDropDown";
import AppContext from "../../context/AppContext";
import { toast } from "react-toastify";

const Login = () => {
  const { translate, language } = useTranslation();
  const navigate = useNavigate();
  const { setApp } = useContext(AppContext);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    remeberMe: false,
    passwordType: "password",
  });

  const { mutate } = useMutation({
    mutationFn: () =>
      signIn(userInfo.email, userInfo.password, userInfo.remeberMe),
    onSuccess: (data) => {
      setApp((prev) => {
        return { ...prev, user: true };
      });
    },
    onError: () => {
      toast.error(translate(T.LOGIN_FAILED));
    },
  });

  const isArabic = language === "AR";
  const isFormValid = () => {
    for (let key in userInfo) {
      if (!userInfo[key] && key !== "remeberMe") return true;
    }
    return false;
  };

  return (
    <div className="back-ground min-w-screen min-h-screen flex justify-center items-center">
      <div className="w-[90vw] relative lg:w-[55vw] h-[95vh] bg-[#20202D] rounded-[22px] overflow-hidden">
        <div className="absolute top-5 right-5">
          <LanguageDropDown />
        </div>

        <div className="h-[20%] flex flex-col items-center">
          <Logo />
          <WelcomeText text={translate(T.LOGIN_ACCOUNT_TEXT)} />
        </div>
        <div className="h-[80%] flex justify-center">
          <form
            className="w-[70%] flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              mutate();
            }}
          >
            <Input
              type="email"
              SVG={<MailIcon />}
              onChange={(e) => {
                setUserInfo({ ...userInfo, email: e.target.value });
              }}
              label={translate(T.LOGIN_INPUT_EMAIL_FIELD)}
              placeholder={translate(T.LOGIN_INPUT_EMAIL_PLACEHOLDER)}
            />
            <Input
              type={userInfo.passwordType}
              SVG={<PasswordSVG />}
              SVG2={
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setUserInfo({
                      ...userInfo,
                      passwordType:
                        userInfo.passwordType === "text" ? "password" : "text",
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
              label={translate(T.LOGIN_INPUT_PASSWORD_FIELD)}
              placeholder={translate(T.LOGIN_INPUT_PASSWORD_PLACEHOLDER)}
            />
            <LinkButton text={translate(T.LOGIN_FORGOT_PASSWORD)} />

            <ToggleCheckBox
              isChecked={userInfo.remeberMe}
              onClick={() =>
                setUserInfo({ ...userInfo, remeberMe: !userInfo.remeberMe })
              }
              label={translate(T.LOGIN_REMEMBER_ME)}
            />

            <PrimaryButton
              disabled={isFormValid()}
              label={translate(T.LOGIN_BUTTON)}
              type="submit"
            />

            <div className="text-white text-center">
              -- {translate(T.LOGIN_OR_CONTINUEWITH)} --
            </div>
            <div className="flex w-full justify-between gap-5 flex-col lg:flex-row">
              <SecondaryButton
                label={translate(T.LOGIN_GOOGLE)}
                SVG={<GoogleSVG />}
              />
              <SecondaryButton
                label={translate(T.LOGIN_APPLE)}
                SVG={<AppleSVG />}
              />
            </div>
            <hr className="border-[#ffffff80] mt-3 lg:mt-16" />
            <div
              className={`flex gap-3 justify-center items-center text-white
              ${isArabic && "flex-row-reverse"}
              `}
            >
              <div>{translate(T.LOGIN_DONT_HAVE_ACCOUNT)}</div>
              <LinkButton
                onClick={() => navigate("/register")}
                text={translate(T.LOGIN_REGISTER)}
                className={"text-[16px]"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
