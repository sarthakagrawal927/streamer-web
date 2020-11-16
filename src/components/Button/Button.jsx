import React from "react";
import "./Button.scss";
const Button = ({ text, type, primary, onClick }) => {
    return primary ? (
        <button type={type} className='btn btn-primary' onClick={onClick}>
            {text}
        </button>
    ) : (
        <button type={type} className='btn btn-secondary' onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
