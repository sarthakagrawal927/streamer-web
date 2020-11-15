import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <img
                    className='sidebar-logo'
                    src='/StreamerIcon.png'
                    alt='Streamer Logo'
                />
                <h2 className='sidebar-heading'>Streamer</h2>
            </div>
        </div>
    );
};

export default Sidebar;
