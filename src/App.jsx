import { useState } from "react";
import { GlobalStyle } from "./styles/globalStyle";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import prettierLogo from "./assets/prettier.svg";
import esLintLogo from "./assets/eSLint.svg";
import pnpmLogo from "./assets/pnpmlogo.svg";
import styledLogo from "./assets/styled-components-logo.png";
import pwaLogo from "./assets/vite-pwalogo.svg";

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
      <GlobalStyle />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClickUp}>+</button>
        <h3>{count}</h3>
        <button onClick={handleClickDown}>-</button>
      </div>
      <div className="card additional">
        <h4>Including:</h4>
        <img src={prettierLogo} alt="prettier" title="prettier" />
        <img src={esLintLogo} alt="esLing" title="eslint" />
        <img src={pnpmLogo} alt="pnpm" title="pnpm" />
        <img src={styledLogo} alt="styledComponents" title="styledComponents" />
        <img src={pwaLogo} alt="vitePwa" title="vite PWA" />
      </div>
    </>
  );
}

export default App;
