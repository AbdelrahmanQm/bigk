import React from "react";

const IntroCard = ({ text, image }) => {
  return (
    <div
      className=" border-[1px]  overflow-hidden h-[220px] w-[350px] rounded-xl shadow-md bg-white flex flex-col justify-between items-center
    transform translate-y-0 transition-all hover:-translate-y-4 duration-300
    "
    >
      <div className="overflow-hidden max-h-[150px]">
        <img src={image} alt="nutrition" className="cover " />
      </div>
      <div className="text">
        <h2 className="text-xl">{text}</h2>
      </div>
      <div className="w-full h-1 bg-red"></div>
    </div>
  );
};

export default IntroCard;
