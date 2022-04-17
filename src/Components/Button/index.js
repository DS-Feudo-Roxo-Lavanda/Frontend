import React from 'react';
import './style.css';

function Button(props) {
    return (
        <div id="btn">
            <p>{props.text}</p>
        </div>
    )
}

export default Button;