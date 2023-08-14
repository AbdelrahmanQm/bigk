import Link from "next/link";
import React from "react";
import ArrowDown from "../../../public/svgs/arrow-down.svg";
const SingleNavLink = ({ link }) => {
  return (
    <li
      className="text-white group hover:text-red
      lg:bg-darkBlack sm:bg-black w-full h-16 
    transition-all duration-300 transform hover:scale-105"
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Link
          href={link.linkDestination}
          className="flex items-center justify-center gap-2 w-full "
        >
          {link.linkName} {link.subLinks && <ArrowDown />}
        </Link>

        <div className="bg-lightGreen group-hover:w-full w-0 h-[2px] transition-all duration-300 mt-2"></div>
      </div>
      {link.subLinks && (
        <ul className="hidden">
          {link.subLinks.map((subLink, i) => (
            <li key={i}>
              <Link href={subLink.subLinkDestination}>
                {subLink.subLinkName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SingleNavLink;
