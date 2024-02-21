import { useEffect } from "react";

type Props = {
  value: number;
  onSlide: (size: number) => void;
};

function Slider({ value, onSlide }: Props) {
  useEffect(() => {
    const elements = document.querySelectorAll(".gridItem");
    elements.forEach(
      (gridItem) =>
        ((gridItem as HTMLElement).style.backgroundColor = "rgba(0,0,0,0)")
    );
  }, [value]);
  return (
    <div className="sliderContainer">
      <input
        type="range"
        min="16"
        max="100"
        value={value}
        onChange={(e) => {
          onSlide(Number(e.target.value));
        }}
      />
      <span>
        Grid Size {value} x {value}
      </span>
    </div>
  );
}

export default Slider;
