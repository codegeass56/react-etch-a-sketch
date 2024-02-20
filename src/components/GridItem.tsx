import { useState } from "react";

type Props = {
  onGridEnable: () => void;
  onGridDisable: () => void;
  gridIsClicked: boolean;
};

function GridItem({ onGridEnable, onGridDisable, gridIsClicked }: Props) {
  const [alpha, setAlpha] = useState(0);
  const styles: React.CSSProperties = {
    backgroundColor: `rgba(0,0,0,${alpha})`,
    border: "1px solid rgb(204, 204, 204)",
  };

  function handleShade() {
    if (!gridIsClicked) return;
    colorCell();
  }

  function colorCell() {
    if (alpha > 0.9) {
      setAlpha(1);
    } else {
      setAlpha((alpha) => Number((alpha + 0.1).toFixed(1)));
    }
  }

  return (
    <div
      onDragStart={(e) => e.preventDefault()}
      style={styles}
      className="gridItem"
      onMouseDown={() => {
        colorCell();
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
