import { useState, useEffect } from "react";

const SillySketch = () => {
  const [position, setPosition] = useState([0, 0]);
  const moveButton = () => {
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    setPosition([posX, posY]);
  };

  const clickHandler = () => {
    alert("You did it!");
  };

  const buttonStyle = {
    position: "absolute",
    top: position[0],
    left: position[0],
  };

  const [confirmCounter, setConfirmCounter] = useState(0);
  const [confirm, setConfirm] = useState(false);
  // useEffect(() => {
  //   let open = window.confirm(
  //     `You have seen ${confirmCounter} modals. Open another confirm modal?`
  //   );
  //   if (open) {
  //     setConfirm(!confirm);
  //     setConfirmCounter(confirmCounter + 1);
  //   }
  // }, [confirm]);

  return (
    <div>
      {JSON.stringify(confirm)}
      <p>The button you cant click!</p>
      <div style={{ position: "relative" }}>
        <button
          className="button p-4 border-4"
          onClick={clickHandler}
          style={buttonStyle}
          onMouseOver={moveButton}
        >
          Click me, if you can!
        </button>
      </div>
    </div>
  );
};

export default SillySketch;
