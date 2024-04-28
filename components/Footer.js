import React from "react";
import { FaTools, FaCheckCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="flex flex-col items-center w-full p-4 border-t-[1px] bg-black border-t-gray-500 text-center">
      <div className="flex sm:flex-col gap-8 text-gray-100 py-4">
        <div className="flex flex-col items-center w-[160px]">
          <FaTools className="text-[60px]" />
          <h4 className="text-sm mt-4">Industry Specialists</h4>
        </div>
        <div className="flex flex-col items-center w-[160px]">
          <FaCheckCircle className="text-[60px]" />
          <h4 className="text-sm mt-4">Guaranteed Results</h4>
        </div>
        <div className="flex flex-col items-center w-[160px]">
          <FaMagnifyingGlass className="text-[60px]" />
          <h4 className="text-sm mt-4">Qualified Leads</h4>
        </div>
      </div>
      <div className="my-8">
        <Logo width={300} />
      </div>
      <div className="flex text-4xl mb-4">
        <a href="https://www.facebook.com/profile.php?id=61557975647242">
          <FaFacebookSquare />
        </a>
      </div>

      <p className="text-sm text-gray-500">
        <a href="https://www.privacypolicies.com/live/8c48d388-85e9-4f33-9e2c-8f8701a286e2">
          Our Privacy Policy
        </a>
      </p>
      <p className="text-sm text-gray-500">
        Oxycholy - @2024 All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
