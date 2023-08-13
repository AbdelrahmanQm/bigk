import Link from "next/link";
import React from "react";

const SingleNavLink = ({ link }) => {
  return (
    <li className="">
      <Link href={link.linkDestination}>{link.linkName}</Link>
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
