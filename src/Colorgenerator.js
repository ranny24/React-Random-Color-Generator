import './App.css';
import React, { useRef, useState } from 'react';
import Button from './Button';

function ColorGenerator() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const colorBoxRef = useRef(null);

  const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
    colorBoxRef.current.style.backgroundColor = randomColor;
    const colorText = `Generated Color: ${randomColor}`;
    const colorTextElements = colorBoxRef.current.querySelectorAll('.color-text');
    colorTextElements.forEach((el) => {
      el.textContent = colorText;
    });
  };

  return (
    <div className="container">
      <div className="color-box" ref={colorBoxRef}>
        <div className="color-text">
        
          Generated Color: <span className="color-hex">{backgroundColor}</span>
        </div>
      </div>
      <Button onClick={generateColor} />
    </div>
  );
}

export default ColorGenerator;
