import React from "react";
import { useTranslation } from "../context/LanguageProvider";

const LinkButton = ({ text, className, onClick }) => {
  const { language } = useTranslation();
  const isArabic = language === "AR";
  return (
    <div
      onClick={onClick}
      className={`text-[14px] text-[#4583D5]  cursor-pointer
    ${isArabic ? "text-left" : "text-right"}
    ${className}
    `}
    >
      {text}
    </div>
  );
};

export default LinkButton;
