import { useState, useContext } from "react";
import axios from "axios";
import ErrorInfo from "../components/ErrorInfo/ErrorInfo";
import UserContext from "../context/userContext";

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const { userData, setUserData } = useContext(UserContext);

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
    console.log(JSON.stringify(userData));
    axios
      .post("/api/admins/login", JSON.stringify(userData), {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        const token = res.data.token;
        console.log(token);
        const isSuper = token.substring(0, 5) === "super";
        setUserData({
          isLoggedIn: true,
        });
        if (isSuper) {
          setUserData({
            isSuper: true,
          });
        }
        callback();
      })
      .catch((err) => {
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
