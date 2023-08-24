import "./App.css";
import React, { useState } from "react";

function App() {
  const [selectedBox, setSelectedBox] = useState(null);

  // Function to handle click on a box
  const handleBoxClick = (boxNumber) => {
    setSelectedBox(boxNumber);
  };

  return (
    <div className="container">
      <div
        className={`line ${selectedBox === "line" ? "clicked" : ""}`}
        onClick={() => handleBoxClick("line")}
      >
        <p>------------------Bundle & Save--------------------</p>
      </div>
      <div
        className={`first-box ${selectedBox === "first-box" ? "clicked" : ""}`}
        onClick={() => handleBoxClick("first-box")}
      >
        <div className="flexing">
          <input type="radio" />
          <p>1 Pair</p>
          <p className="per">50% OFF</p>
        </div>
        <div>
          <p className="DKK">DKK 97.50</p>
        </div>
      </div>
      <div
        className={`second-box ${
          selectedBox === "second-box" ? "clicked" : ""
        }`}
        onClick={() => handleBoxClick("second-box")}
      >
        <div className="flexing">
          <input type="radio" />
          <p>2 Pair</p>
          <p className="most-popular">Most popular</p>
        </div>
        <div className="flexing">
          <p className="dkk-344">DKK 345.00</p>
          <p className="strike">DKK 195.00</p>
          <p className="fourtyPercent">40% OFF</p>
        </div>
        <div className="flexing">
          <div>
            <p>size</p>
            <div className="flexing">
              <p className="size-label">#1</p>
              <select className="size-select">
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
            <div className="flexing">
              <p className="size-label">#2</p>
              <select className="size-select">
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
          </div>
          <div>
            <p>color</p>
            <select className="color-select">
              <option>Color</option>
              <option>Red</option>
              <option>Yellow</option>
            </select>
            <br />
            <br />
            <select className="color-select">
              <option>Color</option>
              <option>Yellow</option>
              <option>Red</option>
            </select>
          </div>
        </div>
      </div>
      <br />
      <div className="third-box">
        <div className="flexing">
          <p>3 Pair</p>
          <p className="percentage">60% OFF</p>
        </div>
        <div>
          <p className="DKK528">DKK 528.00</p>
        </div>
      </div>

      <div className="flexing-free">
        <p className="shipping">Free two days shipping</p>
        <p className="total-money">Total: DKK 360.00</p>
      </div>
      <button className="cart">+ ADD TO CART</button>
      <p className="copyright">&copy; Powered by Pumper</p>
    </div>
  );
}

export default App;
