import React from "react";
import { useTranslation } from "../context/LanguageProvider";

const ToggleCheckBox = ({ isChecked = true, label, onClick }) => {
  const { language } = useTranslation();

  const isArabic = language === "AR";
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 cursor-pointer
    ${isArabic ? "justify-start flex-row-reverse" : "justify-start flex-row"}
    `}
    >
      <div className="w-[12px] h-[12px] rounded-sm flex justify-center items-center bg-white">
        {isChecked && (
          <div className="w-[70%] h-[70%] rounded-sm bg-[#4583D5]"></div>
        )}
      </div>

      <div className="text-white relative ">
        {label}
        <div className="absolute top-0 left-0 right-0 bottom-0 "></div>
      </div>
    </div>
  );
};

export default ToggleCheckBox;
