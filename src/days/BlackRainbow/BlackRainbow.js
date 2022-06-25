import React from "react";
import ColorBar from "./ColorBar";

const BlackRainbow = () => {
  return (
    <div className="flex h-full bg-gray-100 flex-col">
      <div className="absolute text-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        25-06-2022
      </div>
      <ColorBar colorClassName="hover:bg-red-500" />
      <ColorBar colorClassName="hover:bg-orange-500" />
      <ColorBar colorClassName="hover:bg-yellow-500" />
      <ColorBar colorClassName="hover:bg-green-500" />
      <ColorBar colorClassName="hover:bg-blue-500" />
      <ColorBar colorClassName="hover:bg-purple-500" />
    </div>
  );
};

export default BlackRainbow;
