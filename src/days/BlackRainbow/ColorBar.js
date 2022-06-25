import React from "react";

const ColorBar = ({ colorClassName }) => {
  return (
    <div
      className={` bg-black duration-[5000ms] hover:duration-100 ${colorClassName} flex-1 `}
    ></div>
  );
};

export default ColorBar;
