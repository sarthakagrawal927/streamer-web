import React from "react";
import Form from "../../components/Form/Form";
import "./Login.scss";

const Login = () => {
    return (
        <div className='login-container'>
            <div className='login-container-1'>
                <img
                    className='logo'
                    src='/assets/images/StreamerIcon.png'
                    alt='Streamer Logo'
                />
                <h1 className='text-white text-center logo-text'>
                    Streamer Monitoring Portal
                </h1>
            </div>
            <div className='login-container-2'>
                <Form />
            </div>
        </div>
    );
};

export default Login;
