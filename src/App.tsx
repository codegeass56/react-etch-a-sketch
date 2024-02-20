import { useEffect, useState } from "react";
import Button from "./components/Button";
import FlexContainer from "./components/FlexContainer";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Slider from "./components/Slider";
import GridItem from "./components/GridItem";

function App() {
  const [gridIsClicked, setGridIsClicked] = useState(false);
  const [isEraserMode, setIsEraserMode] = useState(false);
  const [colorValues, setColorValues] = useState(Array(16 ** 2).fill(0));

  useEffect(() => {
    document.addEventListener("mouseup", () => {
      setGridIsClicked(false);
    });
  }, []);

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
        <Button
          className="clearBtn"
          onClick={() => {
            setColorValues((values) => values.map(() => 0));
          }}
        >
          Clear
        </Button>
      </FlexContainer>
      <Grid>
        {colorValues.map((val, i) => (
          <GridItem
            key={i}
            onGridEnable={() => setGridIsClicked(true)}
            onGridDisable={() => setGridIsClicked(false)}
            gridIsClicked={gridIsClicked}
            isEraserMode={isEraserMode}
            colorValue={val}
            onShade={setColorValues}
            index={i}
          />
        ))}
      </Grid>
      <FlexContainer>
        <Button className="toggleLinesBtn">Toggle Grid Lines</Button>
        <Slider />
      </FlexContainer>
    </div>
  );
}

export default App;
