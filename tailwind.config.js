/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "40rem", // 640px
        md: "48rem", // 768px
        lg: "64rem", // 1024px
        xl: "80rem", // 1280px
        "2xl": "96rem", // 1536px
      },
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, #4F96F4, #9333ea)",
      },
      textColor: {
        "gradient-to-r": "transparent",
      },
      backgroundClip: {
        text: "text",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-gradient": {
            "background-image": "linear-gradient(to right, #4F96F4, #9333ea)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
