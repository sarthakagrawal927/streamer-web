import React from "react";
import "./Login.scss";
import Form from "../../components/Form/Form";

const Login = () => {
  return (
    <div className='container'>
      <div className='container-1'>
        <img className='logo' src='/StreamerIcon.png' alt='' />
        <h1 className='text-4xl text-white logo-text text-center '>
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
