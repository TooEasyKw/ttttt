import React from "react";
import { useTranslation } from "../context/LanguageProvider";

const TextArea = ({
  label = null,
  SVG = null,
  onChange = () => {},
  placeholder = "Enter your text ",
  value = null,
  error = null,
  SVG2 = null,
}) => {
  const { language } = useTranslation();

  const isArabic = language === "AR";

  return (
    <div>
      {label && (
        <div className={`pb-[5px] text-white ${isArabic && "text-right"}`}>
          {label}
        </div>
      )}
      <div className="border-[1px] border-[#4583D5] rounded-md relative flex justify-start items-center">
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`focus:outline-none bg-transparent w-full h-full p-[10px] text-white placeholder-white resize-none
            ${SVG && (isArabic ? "pr-[40px]" : "pl-[40px]")}
            ${SVG2 && (isArabic ? "pl-[40px]" : "pr-[40px]")}
            ${isArabic && "text-right"}
          `}
        ></textarea>
        {SVG && (
          <div className={`absolute ${isArabic ? "right-2" : "left-2"}`}>
            {SVG}
          </div>
        )}
        {SVG2 && (
          <div className={`absolute ${isArabic ? "left-2" : "right-2"}`}>
            {SVG2}
          </div>
        )}
      </div>

      {error && <div className="pt-[5px] pl-[10px] text-red-500">{error}</div>}
    </div>
  );
};

export default TextArea;
