import React from "react";
import "./Button.scss";
const Button = ({ text, type, primary }) => {
    return primary ? (
        <button type={type} className='btn btn-primary'>
            {text}
        </button>
    ) : (
        <button type={type} className='btn btn-secondary'>
            {text}
        </button>
    );
};

export default Button;
