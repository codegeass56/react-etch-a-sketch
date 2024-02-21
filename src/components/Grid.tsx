import { useEffect, useState } from "react";
import GridItem from "./GridItem";

type Props = {
  size: number;
  isEraserMode: boolean;
  showLines: boolean;
  isClear: boolean;
};
function Grid({ size, isEraserMode, showLines, isClear }: Props) {
  const [gridIsClicked, setGridIsClicked] = useState(false);
  useEffect(() => {
    document.addEventListener("mouseup", () => {
      setGridIsClicked(false);
    });
  }, []);
  const styles: React.CSSProperties = {
    gridTemplateRows: `repeat(${size}, auto)`,
    gridTemplateColumns: `repeat(${size}, auto)`,
  };
  return (
    <div
      className="grid"
      style={styles}
      onMouseDown={() => setGridIsClicked(true)}
      onMouseUp={() => setGridIsClicked(false)}
    >
      {Array.from({ length: size ** 2 }, (_, i) => (
        <GridItem
          key={i}
          isEraserMode={isEraserMode}
          showLines={showLines}
          gridIsClicked={gridIsClicked}
          isClear={isClear}
        />
      ))}
    </div>
  );
}

export default Grid;
