import { useState } from "react";

function Slider() {
  const [value, setValue] = useState(16);
  return (
    <div className="sliderContainer">
      <input
        type="range"
        min="16"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <span>
        Grid Size {value} x {value}
      </span>
    </div>
  );
}

export default Slider;
