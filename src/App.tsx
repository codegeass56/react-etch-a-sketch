import Button from "./components/Button";
import FlexContainer from "./components/FlexContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <FlexContainer>
        <Button className="eraserBtn">Eraser</Button>
        <Button className="clearBtn">Clear</Button>
      </FlexContainer>
      <FlexContainer>
        <Button className="toggleLinesBtn">Toggle Grid Lines</Button>
      </FlexContainer>
    </div>
  );
}

export default App;
