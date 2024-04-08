import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClickUp = () => {
    setCount(count + 1);
  };
  const handleClickDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={handleClickUp}>+</button>
      <h3>{count}</h3>
      <button onClick={handleClickDown}>-</button>
    </>
  );
}

export default App;
