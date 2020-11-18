import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import ErrorInfo from "../ErrorInfo/ErrorInfo";
import { useForm } from "../../hooks/useForm";
import "./Form.scss";
const Form = () => {
    const history = useHistory();
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });
    const initialState = {
        username: "",
        password: "",
    };
    const { values, onChange, onSubmit } = useForm(
        loginUserCallback,
        initialState
    );
    function loginUserCallback() {
        setErrors({});
        console.log("Submit clicked.");
        if (values.username === "") {
            setErrors({ ...errors, username: "Invalid username" });
            console.log("Errors", errors);
        }
        if (values.password === "") {
            setErrors({ ...errors, password: "Invalid password" });
            console.log("Errors", errors);
        }
        if (errors.username || errors.password) {
            console.log("Error: ", errors);
            return;
        }
        // TODO: Store in the database
        console.log("Submit Values: ", values);
        history.push("/home");
    }
    return (
        <div className='form-container'>
            <form onSubmit={onSubmit}>
                <div className='form-content'>
                    <h1>Login</h1>
                    <div className='form-input'>
                        <Input
                            label='Username'
                            placeholder='Username'
                            name='username'
                            type='text'
                            value={values.username}
                            onChange={onChange}
                        />
                        {/* TODO: Fix error handling -> does not submit if previous submissions had errors and submits if first submission was empty . */}
                        {errors.username && (
                            <ErrorInfo text={errors.username} />
                        )}
                        <Input
                            label='Password'
                            placeholder='Password'
                            name='password'
                            type='password'
                            value={values.password}
                            onChange={onChange}
                        />
                        {errors.password && (
                            <ErrorInfo text={errors.password} />
                        )}
                        <div className='submit-button'>
                            <Button
                                type='submit'
                                text='SUBMIT'
                                primary={true}
                            />
                        </div>
                    </div>
                    {/* uncomment below lines to show values while debugging */}
                    {/* <pre>{JSON.stringify(values)}</pre> */}
                    {/* <pre>{JSON.stringify(errors)}</pre> */}
                </div>
            </form>
        </div>
    );
};

export default Form;
