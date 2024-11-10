import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Player from "./components/Player";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>The Almost Final Countdown</h1>
        <p className="center">
          Stop the timer once you estimate that time is (almost) up
        </p>
      </header>
      <Player />
    </>
  );
}

export default App;
