import { useState, useContext } from "react";
import axios from "axios";
import ErrorInfo from "../components/ErrorInfo/ErrorInfo";
import UserContext from "../context/userContext";

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const { setUserData } = useContext(UserContext);

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email: values.username,
            password: values.password,
        };
        axios
            .post(
                process.env.REACT_APP_API_URL + "/api/admins/login",
                JSON.stringify(userData),
                {
                    headers: {
                        "Content-type": "application/json",
                    },
                }
            )
            .then((res) => {
                const token = res.data.token;
                localStorage.setItem("token", token);
                setUserData({
                    isLoggedIn: true,
                    isSuperAdmin: res.data.isSuperAdmin,
                    college: res.data.college,
                });
                callback();
            })
            .catch((err) => {
                console.log(err);
                alert("Invalid Credentials");
                <ErrorInfo text='Invalid Credentials' />;
            });
    };

    return {
        onChange,
        onSubmit,
        values,
    };
};
