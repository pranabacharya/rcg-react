import React, { useEffect, useState } from "react";
import Alert from "./components/Alert/Alert";
import "./App.css";
import DeveloperInfo from "./components/DeveloperInfo/DeveloperInfo";

function App() {
  const [color, setColor] = useState("#12ab33ff");
  const [copied, setCopied] = useState(false);

  const generateRandomHex = () => {
    let hexString = "0123456789ABCDEF";
    let random = "#";
    for (let i = 0; i < 8; i++) {
      random += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return random.toLowerCase();
  };
  const generateRandomRGBA = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let a = (Math.random() * 1).toFixed(1);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };
  const generateRandomRGB = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
  };
  const generateHSLA = () => {
    let hue = Math.floor(Math.random() * 350);
    let saturation = Math.floor(Math.random() * 100);
    let lightness = Math.floor(Math.random() * 100);
    let alpha = (Math.random() * 1).toFixed(1);

    return `hsl(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
  };
  const generateHSL = () => {
    let hue = Math.floor(Math.random() * 350);
    let saturation = Math.floor(Math.random() * 100);
    let lightness = Math.floor(Math.random() * 100);

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const copyColorValue = (value) => {
    navigator.clipboard.writeText(value.color);
    setCopied(() => true);
    let timeout = setTimeout(() => {
      setCopied(() => false);
      clearTimeout(timeout);
    }, 3000);
  };

  useEffect(() => {
    setCopied(() => false);
  }, [color]);

  return (
    <div className="App">
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <div
        className="pallete"
        style={{ backgroundColor: color }}
        onClick={() => copyColorValue({ color })}
      >
        {color}
        {copied ? <Alert value={color} /> : null}
      </div>
      <div className="buttons">
        <button onClick={() => setColor(generateRandomHex())}>
          Random Hex Color
        </button>
        <button onClick={() => setColor(generateRandomRGBA())}>
          Random RGBA Color
        </button>
        <button onClick={() => setColor(generateRandomRGB())}>
          Random RGB Color
        </button>
        <button onClick={() => setColor(generateHSL())}>
          Random HSL Color
        </button>
        <button onClick={() => setColor(generateHSLA())}>
          Random HSLA Color
        </button>
      </div>
      <div className="colorCards"></div>
      <DeveloperInfo />
    </div>
  );
}

export default App;
