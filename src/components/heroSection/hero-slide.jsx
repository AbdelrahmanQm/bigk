"use client";
import React from "react";
import Image from "next/image";
import QuizButton from "../nav-bar/quiz-button";

function HeroSlide() {
  return (
    <div className="relative">
      <div className="h-full flex gap-6 justify-center items-center p-8 max-w-[1350px] m-auto ">
        <div className="text flex flex-col items-start gap-8 justify-center">
          <h1 className="text-white font-bold uppercase text-7xl">
            Increase your muscle power
          </h1>
          <h6 className="text-white text-xl">
            This is a website made for Karim Mourahib AKA BigK to be used as the
            main website
          </h6>
          <div className="mt-4">
            <QuizButton className="" />
          </div>
        </div>
        <img
          src="/karim.png"
          alt="big k image"
          className="z-20 relative drop-shadow-[0_0px_84px_rgba(0,0,0,0.84)]"
        />
      </div>
      <div className="bg-red h-full w-[30%] absolute right-0 top-0 z-10"></div>
    </div>
  );
}

export default HeroSlide;
