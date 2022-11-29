import "./styles.css";
import React from "react";

export default function App() {
  const handleApplyColor = (e) => {};
  const handleColorPick = (color) => {};
  return (
    <div className="App">
      <div className="l-containe" r>
        <div className="drop" onClick={handleApplyColor} style={{}}></div>
        <span>
          <strong>Apply Color </strong>
        </span>

        <div className="cp-container">
          {["red", "blue", "green", "yellow"].map((color) => (
            <div
              key={color}
              className="cp"
              onClick={() => handleColorPick(color)}
              style={{ backgroundColor: color }}
            ></div>
          ))}

          <div className="cp">
            <input
              type="color"
              onClick={(e) => handleColorPick(e.target.value)}
              onChange={(e) => handleColorPick(e.target.value)}
            />
          </div>
        </div>
        <span>
          <strong>Pick Color </strong>
        </span>
        <div className="cp-container">
          <div className="cp"></div>
        </div>
        <span>
          <strong>Selected Color </strong>
        </span>
      </div>
      <div className="r-container">
        <span>
          <strong>History</strong>
        </span>
      </div>
    </div>
  );
}
