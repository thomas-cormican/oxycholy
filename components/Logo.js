"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = ({ width }) => {
  const [isMounted, setIsMounted] = useState();
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
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
  }

  if (resolvedTheme == "light") {
    return (
      <Image
        className="relative m-auto"
        src="/Logo_dark.png"
        alt="Next.js Logo"
        width={width}
        height={37}
        priority
      />
    );
  }

  if (resolvedTheme == "dark") {
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
  }

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
