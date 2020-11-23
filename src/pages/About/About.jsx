import React from "react";
import "./About.scss";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
    return (
        <>
            <div className='navbar-container'>
                <Navbar active='about' />
            </div>

            <div className='about-us-container'>
                <div className='about-us-content-1'>
                    <div className='about-us-main-heading'>
                        <h1>ABOUT US</h1>
                    </div>
                    <div className='about-us-sub-heading'>
                        <h2>WE DELIVER INNOVATIVE SOLUTIONS</h2>
                    </div>
                </div>
                <div className='about-us-content-2'>
                    <p className='about-us-text-content'>
                        Curiouz TechLab Private Limited, India is a medical
                        device company with focus on medical innovations and
                        surgical devices.
                    </p>
                    <p className='about-us-text-content'>
                        Curiouz TechLab is Biotechnology Industry Research
                        Assisstance Council (BIRAC) funded under Biotechnology
                        Ignition Grant (BIG) incubated at Manipal Government of
                        Karnataka Bioincubator, Manipal.
                    </p>
                    <p className='about-us-text-content'>
                        Curiouz TechLab, India brings to you a unique market
                        ready solution ‘Streamer’ for a safer tomorrow at your
                        industries, work places, schools, colleges, airport etc.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
