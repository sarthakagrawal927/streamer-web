import React from "react";
import Form from "../../components/Form/Form";
import "./Login.scss";

const Login = () => {
    return (
        <div className='container'>
            <div className='container-1'>
                <img className='logo' src='/StreamerIcon.png' alt='logo' />
                <h1 className='text-white text-center logo-text'>
                    Streamer Monitoring Portal
                </h1>
            </div>
            <div className='container-2'>
                <Form />
            </div>
        </div>
    );
};

export default Login;
