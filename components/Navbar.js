"use client";

import React from "react";
import Image from "next/image";

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
    <div className="z-10 max-w-5xl w-full items-center justify-between text-md flex px-8 sm:px-0 ">
      <a
        className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="/"
        rel="noopener noreferrer"
      >
        <Image
          src="/Icon_dark.png"
          alt="Oxycholy Logo"
          className="invert"
          width={100}
          height={24}
          priority
        />
      </a>
      <div className="flex w-full items-center justify-end bg-gradient-to-t sm:text-[16px] text-white">
        <a
          className="cursor-pointer hover:text-gray-300"
          onClick={() => scrollToAbout()}
        >
          About
        </a>
        {/* <a
          className="cursor-pointer ml-4 sm:ml-2"
          href="/blog"
          rel="noopener noreferrer"
        >
          Blog
        </a> */}
        <a
          className="ml-4 text-white bg-[#bb1c4b] p-2 rounded-md cursor-pointer sm:ml-2 hover:bg-[#881a3b]"
          onClick={() => scrollToContact()}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
