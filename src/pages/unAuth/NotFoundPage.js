import React from "react";
import funnyFace from "../../assets/Sad_FACE.png";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full lg:w-3/4 h-[70vh] flex">
        {/* Left half with the GIF */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3Q1YTc2Y2V2YXlicjR0dTg4aDU5eWR0Y2R3bmFhaXFid2s2M21layZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12PDIphhPmfYIw/giphy.webp"
            alt="Funny GIF"
            className="w-[28rem] h-[30rem] rounded-[10px]"
          />
        </div>
        {/* Right half with the text */}
        <div className="w-1/2 flex flex-col justify-center items-center text-center p-4">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-white text-4xl font-bold mb-2 flex items-center gap-2">
              OOPS
              <img src={funnyFace} alt="Funny face" className="w-12 h-12" />
            </h1>
            <h2 className="text-[12rem] font-bold text-gradient mb-4 leading-none">
              <span className="text-blue-500">4</span>
              <span className="text-purple-500">0</span>
              <span className="text-blue-500">4</span>
            </h2>
            <h3 className="text-white text-3xl mb-4">Page Not Found</h3>
            <p className="text-[#DDD] text-lg">
              Well, this is awkward. You’ve found a page that doesn’t exist.
              Maybe it’s hiding or just taking a break. Either way, it’s not
              here!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
