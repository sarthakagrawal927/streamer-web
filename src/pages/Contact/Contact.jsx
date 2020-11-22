import React from "react";
import "./Contact.scss";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <div className='navbar-container'>
        <Navbar active='contact' />
      </div>
      <img className='temp-image' src='/assets/ss/contact.png' alt='' />
    </>
  );
};

export default Contact;
