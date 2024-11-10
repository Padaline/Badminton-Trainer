import React from 'react';
import './largeButton.css'; // Assuming CSS for styling
import drillImage from './drill1.jpg'; // Correct path to your image
import { CSSProperties } from 'react';

function LargeButton() {


  return (
    <button>
        <img className='imageStyle' src={drillImage}></img>
        <div className='divStyle'><h1 className='titleTextPositioning'>speed</h1></div>
        
    </button>
  );
}

export default LargeButton;
