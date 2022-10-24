import logo from "./logo.svg";
import "./App.css";

import Card from "./stories/Card/Card";
import Block from "./stories/Block";
import Button from "./stories/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          backgroundColor={"darkgreen"}
          primary={true}
          size={"extra-large"}
          onClick={undefined}
          label={"Click Me"}
        />

        <Block header="Test Header" />

        <Card />
      </header>
    </div>
  );
}

export default App;
