import './App.css';
import React, { useState } from 'react';
import Button from './Button';

function ColorGenerator() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  function generateColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  }

  return (
    <div>
      <Button onClick={generateColor} />
      <div style={{ backgroundColor: backgroundColor }}>
        Generated Color: {backgroundColor}
      </div>
    </div>
  );
}

export default ColorGenerator;
