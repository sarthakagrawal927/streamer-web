import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Showcase.scss";
const Showcase = () => {
    return (
        <>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <div className='showcase-container'>
                <img
                    id='svg-1'
                    src='/assets/svg/background/svg-1.svg'
                    alt='svg'
                />
                <img
                    id='svg-2'
                    src='/assets/svg/background/svg-2.svg'
                    alt='svg'
                />
                <img
                    id='svg-3'
                    src='/assets/svg/background/svg-3.svg'
                    alt='svg'
                />
                <img
                    id='svg-4'
                    src='/assets/svg/background/svg-4.svg'
                    alt='svg'
                />
                <img
                    id='svg-5'
                    src='/assets/svg/background/svg-5.svg'
                    alt='svg'
                />
                <section className='showcase-section-1'>
                    <div className='showcase-section-1-content'>
                        <div className='showcase-section-1-content-1'>
                            <h2 className='showcase-section-1-header'>
                                WHY STREAMER?
                            </h2>
                            <div className='text-content'>
                                <p className='text-content-1'>
                                    REMOTE VITAL SIGNS EXTRACTION AS A “BACK TO”
                                    PLATFORM
                                </p>
                                <div className='bullet-content'>
                                    <ul>
                                        <li>Back to Work</li>
                                        <li>Back to School</li>
                                        <li>Back to Living</li>
                                    </ul>
                                </div>
                                <p className='text-content-2'>
                                    Individual Health and Wellness Monitoring is
                                    primary responsibility of organization. The
                                    App ensures safety of students and employees
                                    in classrooms and office premises
                                </p>
                            </div>
                        </div>
                        <div className='showcase-section-1-phone-screen'>
                            <img
                                src='/assets/svg/phone-screens/phone-screen-01.svg'
                                alt='phone screen'
                            />
                        </div>
                    </div>
                </section>
                <h2 className='showcase-section-2-header'>FEATURES</h2>
                <section className='showcase-section-2'>
                    <div className='showcase-section-2-content'>
                        <div className='showcase-section-2-phone-screen'>
                            <img
                                src='/assets/svg/phone-screens/phone-screen-04.svg'
                                alt='phone screen'
                            />
                        </div>
                        <div className='showcase-section-2-content-1'>
                            <h3>VITALS TRACKING IN YOUR PALM</h3>
                            <div className='graphics-grid'>
                                <div className='card'>
                                    <div className='icon'>
                                        <img
                                            src='/assets/svg/smiley.svg'
                                            alt='smiley'
                                        />
                                    </div>
                                    <div className='card-description'>
                                        <p>Mental Stress Level</p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='icon'>
                                        <img
                                            src='/assets/svg/o2.svg'
                                            alt='O2'
                                        />
                                    </div>
                                    <div className='card-description'>
                                        <p>Oxygen Saturation</p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='icon'>
                                        <img
                                            src='/assets/svg/lungs.svg'
                                            alt='lungs'
                                        />
                                    </div>
                                    <div className='card-description'>
                                        <p>Respiration Rate</p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='icon'>
                                        <img
                                            src='/assets/svg/heartbeat.svg'
                                            alt='heartbeat'
                                        />
                                    </div>
                                    <div className='card-description'>
                                        <p>Heart Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <h2 className='showcase-section-3-header'>HOW IT WORKS?</h2>
                <section className='showcase-section-3'>
                    <div className='showcase-section-3-content'>
                        <div className='showcase-section-3-content-1'>
                            <h3>
                                AI - Powered Video-based Health Screening and
                                Wellness Monitoring
                            </h3>
                            <p>
                                STREAMER is a Health and Wellness monitoring
                                smartphone application with vitals monitoring.
                                Your safety is our responsibilty.
                            </p>
                        </div>
                        <div className='showcase-section-3-phone-screen'>
                            <div className='cards cards-1'>
                                <div className='card card-1'>
                                    <div className='card-description'>
                                        <p>Motion Compensation</p>
                                    </div>
                                </div>
                                <div className='card card-2'>
                                    <div className='card-description'>
                                        <p>Skin Region Selection</p>
                                    </div>
                                </div>
                            </div>
                            <img
                                src='/assets/svg/phone-screens/phone-screen-02.svg'
                                alt='phone screen'
                            />
                            <div className='cards cards-2'>
                                <div className='card card-3'>
                                    <div className='card-description'>
                                        <p>Illumination Normalization</p>
                                    </div>
                                </div>
                                <div className='card card-4'>
                                    <div className='card-description'>
                                        <p>Face Detection & Tracking</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Showcase;
