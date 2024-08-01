import React from "react";

function AddPhotoSVG({ onClick }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="179"
      height="161"
      fill="none"
      viewBox="0 0 179 161"
      style={{ cursor: "pointer" }}
    >
      <rect
        width="179"
        height="161"
        fill="url(#paint0_linear_0_1)"
        rx="10"
      ></rect>
      <ellipse
        cx="89.5"
        cy="59.5"
        fill="#000"
        opacity="0.4"
        rx="33.5"
        ry="32.5"
      ></ellipse>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M95.784 65.841l-6.455-6.368-6.454 6.368M89.328 59.473v14.329"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M102.867 69.647a8.004 8.004 0 003.534-3.808 7.866 7.866 0 00.423-5.145 7.951 7.951 0 00-2.865-4.32 8.138 8.138 0 00-4.949-1.677h-2.033a12.678 12.678 0 00-2.662-5.061 12.896 12.896 0 00-4.635-3.408 13.062 13.062 0 00-11.258.41 12.86 12.86 0 00-4.367 3.734 12.65 12.65 0 00-2.278 5.241 12.572 12.572 0 00.268 5.696 12.686 12.686 0 002.76 5.01"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M95.784 65.841l-6.455-6.368-6.454 6.368"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="0"
          x2="184.705"
          y1="80.858"
          y2="80.858"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5080D2"></stop>
          <stop offset="1" stopColor="#9367B7"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default AddPhotoSVG;
