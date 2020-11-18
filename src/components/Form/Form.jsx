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
    initialState,
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
    // console.log("Submit Values: ", values);
    history.push("/home");
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
        {/* TODO: Fix error handling -> does not submit if previous submissions had errors and submits if first submission was empty . */}
        {errors.username && <ErrorInfo text={errors.username} />}
        <Input
          label='Password'
          placeholder='Password'
          name='password'
          type='password'
          value={values.password}
          onChange={onChange}
        />
        {errors.password && <ErrorInfo text={errors.password} />}
        <div className='text-center submit-button'>
          <Button type='submit' text='SUBMIT' primary={true} />
        </div>
        {/* uncomment below lines to show values while debugging */}
        {/* <pre>{JSON.stringify(values)}</pre> */}
        {/* <pre>{JSON.stringify(errors)}</pre> */}
      </form>
    </div>
  );
};

export default Form;
