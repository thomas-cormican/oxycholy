import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ModeButton = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <button
        className="p-2 bg-neutral-100 font-extrabold text-white text-center rounded-full"
        onClick={() => {
          setTheme("light");
        }}
      >
        <IoMoonOutline />
      </button>
    );
  }

  if (resolvedTheme == "light") {
    return (
      <button
        className="p-2 bg-gray-700 text-white text-center rounded-full"
        onClick={() => {
          setTheme("dark");
        }}
      >
        <IoMoonOutline />
      </button>
    );
  } else {
    return (
      <button
        className="p-2 bg-neutral-100 font-extrabold text-black text-center rounded-full"
        onClick={() => {
          setTheme("light");
        }}
      >
        <IoSunnyOutline className="font-extrabold" />
      </button>
    );
  }
};

export default ModeButton;
