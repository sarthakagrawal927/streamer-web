import React from "react";
import "./Tab.scss";
const Tab = ({ imgSrc, text, onItemClicked, isActive = false }) => {
    return (
        <div
            className={isActive ? "tab" : "tab tab-inactive"}
            onClick={onItemClicked}>
            <div className='tab-icon'>
                <img src={imgSrc} alt={text} />
            </div>
            <div className='tab-info'>
                <h3>{text}</h3>
            </div>
        </div>
    );
};

export default Tab;
