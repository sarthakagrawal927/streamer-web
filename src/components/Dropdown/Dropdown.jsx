import React from "react";
import "./Dropdown.scss";
const Dropdown = ({ options, onChange, selectedValue, imgSrc }) => {
    return (
        <select
            className='select-container'
            value={selectedValue}
            onChange={onChange}
            style={{
                background: "url(" + imgSrc + ")  96% / 15% no-repeat",
                backgroundColor: "#4e5eef",
            }}>
            {console.log("In dropdown", selectedValue)}
            {options.map(({ id, name }) => {
                return (
                    <option key={id} value={name}>
                        {name}
                    </option>
                );
            })}
        </select>
    );
};

export default Dropdown;
