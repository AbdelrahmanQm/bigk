"use client";
import React from "react";
import Logo from "./logo";
import MenuButton from "./menu-button";
import NavLinks from "./nav-links";
import QuizButton from "./quiz-button";
import { useSelector } from "react-redux";
const FullNav = () => {
  const menuState = useSelector((state) => state.toggleMenu.value);
  return (
    <nav className="bg-darkBlack relative">
      <div className="bg-darkBlack flex justify-between h-28 items-center max-w-[1650px] m-auto px-4 ">
        <div className="h-24 flex items-center ">
          <Logo />
        </div>
        <div className={`lg:h-full xs:h-auto lg:flex overflow-x-hidden `}>
          <NavLinks />
        </div>
        <div className="flex justify-between items-center gap-8">
          <div className="sm:block xs:hidden">
            <QuizButton />
          </div>
          <div className="lg:hidden xs:block">
            <MenuButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FullNav;
