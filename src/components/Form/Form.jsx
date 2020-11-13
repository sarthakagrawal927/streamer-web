import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useForm } from "../../hooks/useForm";
import "./Form.scss";
const Form = () => {
    const initialState = {
        username: "",
        password: "",
    };
    const { values, onChange, onSubmit } = useForm(
        loginUserCallback,
        initialState
    );
    function loginUserCallback() {
        console.log(values);
    }
    return (
        <div className='w-full form-container'>
            <form
                className='bg-white rounded px-12  pt-12  pb-12 mb-1'
                onSubmit={onSubmit}>
                <h1 className='text-5xl mb-2 font-normal'>Login</h1>
                <Input
                    label='Username'
                    placeholder='Username'
                    name='username'
                    type='text'
                    value={values.username}
                    onChange={onChange}
                />
                <Input
                    label='Password'
                    placeholder='Password'
                    name='password'
                    type='password'
                    value={values.password}
                    onChange={onChange}
                />

                <div className='text-center submit-button'>
                    <Button type='submit' text='SUBMIT' />
                </div>
            </form>
        </div>
    );
};

export default Form;
