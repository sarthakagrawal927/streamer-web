import React from "react";

const Input = ({ label, placeholder, name, type, onChange }) => {
    return (
        <div className='mb-4'>
            <label
                className='block text-gray-700 text-sm font-bold mb-2'
                for={name}>
                {label}
            </label>
            <input
                onChange={onChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
