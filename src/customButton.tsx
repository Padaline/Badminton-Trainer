import React from 'react';
import { CSSProperties } from 'react';
import './customButton.css'

function CustomButton() {
    return (
        <div className="Controller">
        <button className="button">
            <div className="wrapper">
                <div className="text">
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dicta cum, quam corporis ipsum eum exercitationem et veniam odio voluptatem. Magnam voluptatum, adipisci atque minus mollitia nulla magni quas rem.</p>
                </div>
                <div className="iconBox">
                    <p className='icon'>test</p>
                </div>
            </div>
        </button>
        </div>
    );
}

export default CustomButton;