import { useState } from "react";

const DarkDay = () => {
  const [time, setTime] = useState(1);
  const handleMouseOver = () => {
    setTime(time - 0.001);
  };

  const handleStartDrag = () => {
    setTime(time - 0.001);
  };
  return (
    <button
      className="flex justify-between items-stretch  flex-col select-none p-4"
      style={{
        background: "black",
        width: "100%",
        height: "100%",
        position: "relative",
        opacity: time,
        cursor: "pointer",
      }}
      draggable
      onMouseDown={handleMouseOver}
      onDrag={handleStartDrag}
    >
      <p className="text-white">Click to turn on the light: {time}</p>
      <h3 className="text text-slate-600 text-lg  ">Sometimes its a drag...</h3>
      <p className="text-white">Click to turn on the light: {time}</p>
    </button>
  );
};

export default DarkDay;
