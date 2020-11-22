import React from "react";
import "./Contact.scss";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <div className='navbar-container'>
        <Navbar active='contact' />
      </div>
      <div className='contact-page'>
        {" "}
        <br />
        <br />
        <br />
        <h1>QUESTIONS ? COMMENTS ?</h1>
        <h1> LET US KNOW !</h1>
        <hr />
        <div className='contact-details'>
          {" "}
          <h3> ADDRESS</h3>
          <h3>Curiouz TechLab Private Limited</h3>
          <p>Manipal Government of Karnataka Bioincubator </p>
          <p>
            {" "}
            3rd Floor, MAHE Advanced Research Centre Behind MMMC,
            <p> Manipal, Karnataka 576104</p>
          </p>
          <h3> PHONE</h3>
          <p>+91 8310874339</p>
          <h3> EMAIL</h3>
          <p>curiouz.tech@gmail.com</p>
        </div>
      </div>

      {/* <img className='temp-image' src='/assets/ss/contact.png' alt='' /> */}
    </>
  );
};

export default Contact;
