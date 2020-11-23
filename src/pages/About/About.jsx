import React from "react";
import "./About.scss";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <div className='navbar-container'>
        <Navbar active='about' />
      </div>

      <img className='temp-image' src='/assets/ss/about.png' alt='' />
    </>
  );
};

export default About;
