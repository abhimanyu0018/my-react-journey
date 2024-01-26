import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);
  const [isNum, setIsNum] = useState(false);
  const [isChar, setIsChar] = useState(false);

  return (
    <>
      <div className="main">
        <div className="input">
          <input type="text" />
          <button className="copy">copy</button>
        </div>

        <div className="control">
          <input
            type="range"
            min={0}
            max={10}
            defaultValue={5}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <label> length {count}</label>

          <input
            type="checkbox"
            onClick={() => {
              setIsNum(!isNum);
            }}
          />
          <label>Number</label>

          <input
            type="checkbox"
            onClick={() => {
              setIsChar(!isChar);
            }}
          />
          <label>Special Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
