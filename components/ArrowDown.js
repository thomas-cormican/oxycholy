"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ArrowDown = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          fill="#FFFFFF"
          d="M12 21.35l-11.35-11.35 2.12-2.12 9.23 9.24 9.24-9.24 2.12 2.12z"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      {resolvedTheme == "light" ? (
        <path
          fill="#000000"
          d="M12 21.35l-11.35-11.35 2.12-2.12 9.23 9.24 9.24-9.24 2.12 2.12z"
        />
      ) : (
        <path
          fill="#FFFFFF"
          d="M12 21.35l-11.35-11.35 2.12-2.12 9.23 9.24 9.24-9.24 2.12 2.12z"
        />
      )}
    </svg>
  );
};

export default ArrowDown;
