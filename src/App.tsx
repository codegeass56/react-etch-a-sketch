import { useEffect, useState } from "react";
import Button from "./components/Button";
import FlexContainer from "./components/FlexContainer";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ClearButton from "./components/ClearButton";

const DEFAULT_GRID_SIZE = 16;

function App() {
  const [isEraserMode, setIsEraserMode] = useState(false);
  const [showLines, setShowLines] = useState(true);
  const [gridSize, setGridSize] = useState(DEFAULT_GRID_SIZE);
  const [isClear, setIsClear] = useState(false);

  useEffect(() => {
    if (isClear) {
      const elements = document.querySelectorAll(".gridItem");
      elements.forEach(
        (gridItem) =>
          ((gridItem as HTMLElement).style.backgroundColor = "rgba(0,0,0,0)")
      );
      setIsClear(false);
    }
  }, [isClear]);

  return (
    <div className="app">
      <Header />
      <FlexContainer>
        <Button
          className={isEraserMode ? "eraserOn" : "eraserBtn"}
          onClick={() => setIsEraserMode((mode) => !mode)}
        >
          Eraser
        </Button>
        <ClearButton onClear={setIsClear} />
      </FlexContainer>
      <Grid
        size={gridSize}
        isEraserMode={isEraserMode}
        showLines={showLines}
        isClear={isClear}
      />
      <FlexContainer>
        <Button
          className="toggleLinesBtn"
          onClick={() => setShowLines((showLines) => !showLines)}
        >
          Toggle Grid Lines
        </Button>
        <Slider value={gridSize} onSlide={(size) => setGridSize(size)} />
      </FlexContainer>
    </div>
  );
}

export default App;
