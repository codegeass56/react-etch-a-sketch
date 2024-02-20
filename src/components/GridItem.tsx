import { useState } from "react";

type Props = {
  onGridEnable: () => void;
  onGridDisable: () => void;
  gridIsClicked: boolean;
  isEraserMode: boolean;
};

function GridItem({
  onGridEnable,
  onGridDisable,
  gridIsClicked,
  isEraserMode,
}: Props) {
  const [alpha, setAlpha] = useState(0);
  const styles: React.CSSProperties = {
    backgroundColor: `rgba(0,0,0,${alpha})`,
    border: "1px solid rgb(204, 204, 204)",
  };

  function handleShade() {
    if (!gridIsClicked) return;
    if (isEraserMode) {
      eraseCell();
    } else {
      colorCell();
    }
  }

  function colorCell() {
    setAlpha((alpha) => {
      const val = Number((alpha + 0.1).toFixed(1));
      return val > 0.9 ? 1 : val;
    });
  }

  function eraseCell() {
    setAlpha((alpha) => {
      const val = Number((alpha - 0.1).toFixed(1));
      return val < 0 ? 0 : val;
    });
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
        onGridEnable();
      }}
      onMouseUp={onGridDisable}
      onMouseEnter={() => {
        handleShade();
      }}
    ></div>
  );
}

export default GridItem;
