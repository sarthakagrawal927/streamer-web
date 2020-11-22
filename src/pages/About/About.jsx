import React from "react";
import "./About.scss";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <div className='navbar-container'>
        <Navbar active='about' />
      </div>
    </>
  );
};

export default About;
