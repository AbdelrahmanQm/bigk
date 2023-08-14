import Image from "next/image";
import React from "react";
import logo from "../../../public/logo-sm-in-2-min.png";
const Logo = () => {
  return (
    <Image
      src={logo}
      layout="responsive"
      unoptimized={true}
      alt="Big K Fitness Coach"
      className="h-24"
    />
  );
};

export default Logo;
