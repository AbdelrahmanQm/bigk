import Image from "next/image";
import React from "react";
import logo from "../../../public/logo-sm-in-2-min.png";
const Logo = () => {
  return (
    <Image
      src="/logo.png"
      height={60}
      width={129}
      unoptimized={true}
      alt="Big K Fitness Coach"
      className="h-[60px] w-[129px]"
      priority={true}
    />
  );
};

export default Logo;
