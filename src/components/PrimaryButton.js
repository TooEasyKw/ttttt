import React from "react";

const PrimaryButton = ({
  label = "Primary Button",
  onClick = () => {},
  className = "",
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`back-ground rounded-[12px] px-[26px] py-[18px] text-[18px] text-white
        flex justify-center items-center
        ${className}
        ${disabled && "opacity-50 cursor-not-allowed"}
      `}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
