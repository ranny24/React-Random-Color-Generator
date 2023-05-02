import './App.css';
import React, { useState } from 'react';
import Button from './Button';

function ColorGenerator() {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF"); // set default background color to white

  const generateColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div className="container">
      <div className="color-box" style={{ backgroundColor: backgroundColor }}>
        <div className="color-text">
        ❤️ Generated Color ❤️ : <span className="color-hex">{backgroundColor}</span>
        </div>
      </div>
      <Button onClick={generateColor} />
    </div>
  );
}

export default ColorGenerator;
