import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Form.scss";
const Form = () => {
    return (
        <div className='w-full form-container'>
            <form className='bg-white rounded px-12  pt-12  pb-12 mb-1'>
                <h1 className='text-5xl mb-2 font-normal'>Login</h1>
                <Input
                    label='Username'
                    placeholder='Username'
                    name='username'
                    type='text'
                />
                <Input
                    label='Password'
                    placeholder='Password'
                    name='password'
                    type='password'
                />
                <div className='text-center submit-button'>
                    <Button text='SUBMIT' />
                </div>
            </form>
        </div>
    );
};

export default Form;
