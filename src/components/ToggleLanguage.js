import React from "react";
import { useTranslation } from "../context/LanguageProvider";

const ToggleLanguage = () => {
  const { setLanguage } = useTranslation();

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        setLanguage((prev) => (prev === "AR" ? "EN" : "AR"));
      }}
    >
      ToggleLanguage
    </div>
  );
};

export default ToggleLanguage;
