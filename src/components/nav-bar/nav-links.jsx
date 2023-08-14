import React from "react";
import { navBarContent } from "./nav-content";
import SingleNavLink from "./single-nav-link";
const NavLinks = () => {
  console.log(navBarContent);
  return (
    <ul
      className="flex xl:gap-20 xs:gap-6 lg:bg-darkBlack h-24 items-center justify-center text-md  transition-all duration-300
    lg:flex-row flex-col lg:relative xs:h-[100vh] xs:w-[100vw] lg:h-24 xs:absolute xs:justify-start xs:left-0 xs:top-28 lg:w-auto lg:top-0
    xs:bg-black xs:pt-10 lg:pt-0 self-center 
    "
    >
      {navBarContent.map((link, i) => (
        <SingleNavLink link={link} key={i} />
      ))}
    </ul>
  );
};

export default NavLinks;
