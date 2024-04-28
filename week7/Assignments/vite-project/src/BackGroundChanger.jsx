import React from "react";

const BackGroundChanger = () => {
  const handleClick = (e) => {
    document.body.style.background = e.target.innerText.toLowerCase();
  };

  return (
    <div>
      <button id="red" onClick={handleClick} style={{ background: "red" }}>
        red
      </button>
      <button
        id="yellow"
        onClick={handleClick}
        style={{ background: "yellow" }}
      >
        yellow
      </button>
      <button id="black" onClick={handleClick} style={{ background: "black" }}>
        black
      </button>
      <button
        id="purple"
        onClick={handleClick}
        style={{ background: "purple" }}
      >
        purple
      </button>
    </div>
  );
};

export default BackGroundChanger;
