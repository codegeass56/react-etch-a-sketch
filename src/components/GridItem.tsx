type Props = {
  onGridEnable: () => void;
  onGridDisable: () => void;
  gridIsClicked: boolean;
  isEraserMode: boolean;
  colorValue: number;
  onShade: React.Dispatch<React.SetStateAction<number[]>>;
  index: number;
  showLines: boolean;
};

function GridItem({
  onGridEnable,
  onGridDisable,
  gridIsClicked,
  isEraserMode,
  colorValue,
  onShade,
  index,
  showLines,
}: Props) {
  const styles: React.CSSProperties = {
    backgroundColor: `rgba(0,0,0,${colorValue})`,
    border: showLines ? "1px solid rgb(204, 204, 204)" : "none",
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
    let newVal = Number((colorValue + 0.1).toFixed(1));
    newVal = newVal > 0.9 ? 1 : newVal;

    onShade((values) => values.map((val, i) => (i === index ? newVal : val)));
  }

  function eraseCell() {
    let newVal = Number((colorValue - 0.1).toFixed(1));
    newVal = newVal < 0 ? 0 : newVal;

    onShade((values) => values.map((val, i) => (i === index ? newVal : val)));
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
