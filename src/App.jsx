import { useState } from "react";
import addbutton from "/addbutton.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter-main-container">
        <div className="counter-container">
          <div className="counter">{count}</div>
          <div className="buttonContainer">
            <div onClick={() => setCount(0)}>
              <button className="reset-button">Reset</button>
            </div>
            <div>
              <button
                className="add-button"
                onClick={() => {
                  setCount((pre) => pre + 1);
                }}
              >
                <img src={addbutton} alt="addbutton" width={40} height={40} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
