import React from "react";
import { useTranslation } from "../context/LanguageProvider";
// import MailIcon from "../svgs/Email";

const SecondaryButton = ({
  label = "Primary Button",
  onClick = () => {},
  className = "",
  disabled = false,
  type = "button",
  SVG = null,
}) => {
  const { language } = useTranslation();

  const isArabic = language === "AR";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#34324C] rounded-[12px] px-[26px] py-[18px] text-[18px] text-white
        flex justify-center items-center gap-3 w-full
        ${!isArabic && "flex-row-reverse"}
        ${className}
        ${disabled && "opacity-50 cursor-not-allowed"}
      `}
    >
      {label}
      {SVG}
    </button>
  );
};

export default SecondaryButton;
