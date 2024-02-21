import { memo, useState } from "react";

type Props = {
  isEraserMode: boolean;
  showLines: boolean;
  gridIsClicked: boolean;
  isClear: boolean;
};

const GridItem = memo(function GridItem({
  isEraserMode,
  showLines,
  gridIsClicked,
}: Props) {
  const [colorValue, setColorValue] = useState(0);
  const styles: React.CSSProperties = {
    backgroundColor: `rgba(0,0,0,${colorValue})`,
    border: showLines ? "1px solid rgb(204, 204, 204)" : "none",
  };

  function handleColoring() {
    if (!gridIsClicked) return;
    if (isEraserMode) {
      eraseCell();
    } else {
      colorCell();
    }
  }

  function colorCell() {
    let newVal = Number((colorValue + 0.1).toFixed(1));
    newVal = newVal > 0.9 ? 1 : newVal;
    setColorValue(newVal);
  }

  function eraseCell() {
    let newVal = Number((colorValue - 0.1).toFixed(1));
    newVal = newVal < 0 ? 0 : newVal;
    setColorValue(newVal);
  }

  return (
    <div
      onDragStart={(e) => e.preventDefault()}
      style={styles}
      className="gridItem"
      onMouseDown={() => {
        if (isEraserMode) {
          eraseCell();
        } else {
          colorCell();
        }
      }}
      onMouseEnter={() => handleColoring()}
    ></div>
  );
});

export default GridItem;
