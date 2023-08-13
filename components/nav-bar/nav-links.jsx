import React from "react";
import { navBarContent } from "./nav-content";
import SingleNavLink from "./single-nav-link";
const NavLinks = () => {
  console.log(navBarContent);
  return (
    <ul className="flex">
      {navBarContent.map((link, i) => (
        <SingleNavLink link={link} key={i} />
      ))}
    </ul>
  );
};

export default NavLinks;
