import React from 'react';
import './Button.css';

function Buttom({ buttonText, style }) {
    return (
        <button type="button" className="main-buttom" style={style}>
            {buttonText}
        </button>
    );
}

export default Buttom;
