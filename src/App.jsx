import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

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
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
