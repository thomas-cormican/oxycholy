"use client";

import React from "react";
import Image from "next/image";

const Logo = ({ width }) => {
  return (
    <Image
      className="relative m-auto"
      src="/Logo_light.png"
      alt="Next.js Logo"
      width={width}
      height={37}
      priority
    />
  );
};

export default Logo;
