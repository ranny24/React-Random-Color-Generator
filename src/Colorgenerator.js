import React, { useState } from 'react';
import Button from './Button';

function ColorGenerator() {
  const [currentColor, setCurrentColor] = useState('#FFFFFF');

  const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setCurrentColor(randomColor);
  };

  return (
    <div className="container">
      <div className="color-box" style={{ backgroundColor: currentColor }}>
        <div className="color-text">
          Generated Color:{' '}
          <span className="color-hex">{currentColor}</span>
        </div>
      </div>

      <Button onClick={generateColor}>Generate</Button>
    </div>
  );
}

export default ColorGenerator;
