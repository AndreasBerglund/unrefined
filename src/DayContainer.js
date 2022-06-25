import React from "react";

const DayContainer = ({ children }) => {
  return (
    <div style={{ border: "10px solid black", width: 600, height: 600 }}>
      {children}
    </div>
  );
};

export default DayContainer;
