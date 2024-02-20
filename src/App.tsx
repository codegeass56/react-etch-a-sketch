import { useState } from "react";
import Button from "./components/Button";
import FlexContainer from "./components/FlexContainer";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Slider from "./components/Slider";
import GridItem from "./components/GridItem";

function App() {
  const [shadingValue, setShadingValue] = useState(0);
  return (
    <div className="app">
      <Header />
      <FlexContainer>
        <Button className="eraserBtn">Eraser</Button>
        <Button className="clearBtn">Clear</Button>
      </FlexContainer>
      <Grid>
        {Array.from({ length: Math.pow(16, 2) }, (_, i) => (
          <GridItem key={i} />
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
