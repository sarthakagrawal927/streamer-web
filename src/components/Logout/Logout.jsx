import React from "react";
import Button from "../Button/Button";
import "./Logout.scss";
const Logout = () => {
    return (
        <div className='logout-container'>
            <div className='logout-container-heading'>Logout</div>
            <div className='sub-container'>
                <div className='sub-container-heading'>
                    Do you want to logout?
                </div>
                <div className='sub-container-buttons'>
                    <Button text='YES' type='submit' primary={true} />
                    <Button text='NO' type='submit' primary={false} />
                </div>
            </div>
        </div>
    );
};

export default Logout;
