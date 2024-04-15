import React from "react";

const Card = ({ heading, number, children }) => {
  return (
    <div className="flex">
      <div>
        <span className="flex w-[50px] h-[50px] justify-center items-center text-center rounded-full bg-blue-500">
          <span className="text-2xl">{number}</span>
        </span>
      </div>
      <div className="ml-4">
        <h4 className="text-2xl font-bold">{heading}</h4>
        <p className="text-[16px]">{children}</p>
      </div>
    </div>
  );
};

export default Card;
