import './App.css';
import React, { useState } from 'react';

function ColorGenerator() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: 'url(/images/1282786204310.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="color-box">
        <div
          className="generated-color"
          style={{ backgroundColor: backgroundColor }}
        >
          Generated Color: {backgroundColor}
        </div>

        <button className="Generate" onClick={generateColor}>
          `Generate`
        </button>
      </div>
    </div>
  );
}

export default ColorGenerator;
