import React from "react";
import "./Input.scss";
const Input = ({ label, placeholder, name, type, onChange }) => {
    return (
        <div className='input-container'>
            <label className='label' for={name}>
                {label}
            </label>
            <input
                onChange={onChange}
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
