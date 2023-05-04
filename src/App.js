import './App.css';
import React, { useState } from 'react';
import Button from './Button';

// Define the ColorGenerator component
function ColorGenerator() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  // Render the component
  return (
    <div className="container">
      <div className="color-box" style={{ backgroundColor: backgroundColor }}>
        <div className="color-text">
        Generated Color: {backgroundColor}
          <span className="color-hex">{backgroundColor}</span>
        </div>
      </div>
      <Button onClick={generateColor} />

      {backgroundColor !== '#FFFFFF' && (
        <div className="generated-color">
          {backgroundColor}
        </div>
      )}
    </div>
  );
}

<div> Generated Color </div>

export default ColorGenerator;
