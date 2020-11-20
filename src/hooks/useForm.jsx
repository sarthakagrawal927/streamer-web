import { useState, useContext } from "react";
import axios from "axios";
import ErrorInfo from "../components/ErrorInfo/ErrorInfo";
import UserContext from "../context/userContext";

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const { userData, setUserData } = useContext(UserContext);
  console.log(process.env.REACT_APP_API_URL);

  const onChange = (event) => {
    // spread operator so that the remaining values are not overridden by only the current value
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: values.username,
      password: values.password,
    };
    // console.log(JSON.stringify(userData));
    axios
      .post(
        process.env.REACT_APP_API_URL + "/api/admins/login",
        JSON.stringify(userData),
        {
          headers: {
            "Content-type": "application/json",
          },
        },
      )
      .then((res) => {
        const token = res.data.token;
        console.log(token);
        localStorage.setItem("token", token);
        console.log(localStorage.getItem("token"));
        setUserData({
          isLoggedIn: true,
          isSuperAdmin: res.data.isSuperAdmin,
          college: res.data.college,
        });
        callback();
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Creds");
        <ErrorInfo text='Invalid Creds' />;
      });
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
