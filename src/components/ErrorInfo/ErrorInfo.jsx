import React from "react";
import "./ErrorInfo.scss";
const ErrorInfo = ({ text }) => {
    return <div className='rounded error-container'>{text}</div>;
};

export default ErrorInfo;
