import { useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState(0);

  const increment = () => {
    setTemp((prev) => prev + 1);
  };

  const decrement = () => {
    setTemp((prev) => prev - 1);
  };

  return (
    <>
      <div className="container">
        <div className={(temp>=16)?'temperatureBox hot':'temperatureBox normal'}>
          <p>{temp}&deg; C</p>
        </div>
        <div className="btnBox">
          <button
            onClick={() => {
              increment();
            }}
          >
            +
          </button>
          
          <button
            onClick={() => {
              decrement();
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
