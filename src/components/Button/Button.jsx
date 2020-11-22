import React from "react";
import "./Button.scss";
const Button = ({ text, type, primary, onClick, style }) => {
    return primary ? (
        <button
            style={style}
            type={type}
            className='btn btn-primary'
            onClick={onClick}>
            {text}
        </button>
    ) : (
        <button
            style={style}
            type={type}
            className='btn btn-secondary'
            onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
