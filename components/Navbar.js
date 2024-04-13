"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import ModeButton from "./ModeButton";

function Navbar() {
  const scrollToAbout = () => {
    const contactSection = document.getElementById("about");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-md flex px-8 sm:px-0">
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/Icon_dark.png"
          alt="Vercel Logo"
          className="invert"
          width={100}
          height={24}
          priority
        />
      </a>
      <div className="flex w-full items-center justify-end bg-gradient-to-t sm:text-[16px] text-white">
        <a
          className="cursor-pointer"
          onClick={() => scrollToAbout()}
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
        <a
          className="ml-4 text-white bg-[#bb1c4b] p-2 rounded-md cursor-pointer sm:ml-2"
          onClick={() => scrollToContact()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
        <div className="ml-4 sm:ml-2">
          <ModeButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
