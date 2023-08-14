import React from "react";
import Logo from "./logo";
import NavLinks from "./nav-links";
import QuizButton from "./quiz-button";

const FullNave = () => {
  return (
    <nav className="bg-darkBlack relative">
      <div className="bg-darkBlack flex justify-between h-28 items-center max-w-[1650px] m-auto px-4 ">
        <div className="h-24 flex items-center ">
          <Logo />
        </div>
        <div className="h-full flex items-start">
          <NavLinks />
        </div>
        <div className="sm:block xs:hidden">
          <QuizButton />
        </div>
      </div>
    </nav>
  );
};

export default FullNave;
