import React from 'react';
import { CSSProperties } from 'react';
import './customButton.css'
import { SlArrowRight } from "react-icons/sl";

function CustomButton({drillName, description}: {drillName: string, description: String}) {
    return (
        <div className="Controller">
        <button className="button">
            <div className="wrapper">
                <div className="text">
                    <h1 className="drillName">{drillName}</h1>
                    <p className='description'>{description}</p>
                </div>
                <div className="iconBox">
                    <SlArrowRight />
                </div>
            </div>
        </button>
        </div>
    );
}

export default CustomButton;