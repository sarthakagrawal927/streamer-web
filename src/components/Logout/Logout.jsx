import React from "react";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
import "./Logout.scss";
const Logout = () => {
    const history = useHistory();
    const handleConfirm = () => {
        console.log("Logout");
        history.push("/login");
    };
    const handleDeny = () => {
        console.log("Deny logout.");
    };
    return (
        <div className='logout-container'>
            <div className='logout-container-heading'>Logout</div>
            <div className='sub-container'>
                <div className='sub-container-heading'>
                    Do you want to logout?
                </div>
                <div className='sub-container-buttons'>
                    <Button
                        text='YES'
                        type='submit'
                        primary={true}
                        onClick={handleConfirm}
                    />
                    <Button
                        text='NO'
                        type='submit'
                        primary={false}
                        onClick={handleDeny}
                    />
                </div>
            </div>
        </div>
    );
};

export default Logout;
