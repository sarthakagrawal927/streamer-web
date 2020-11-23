import React, { useState, useContext, useEffect } from "react";
import Tab from "../../components/Tab/Tab";
import Dashboard from "../../components/Dashboard/Dashboard";
import Logout from "../../components/Logout/Logout";
import "./Home.scss";
import { useHistory } from "react-router-dom";

import UserContext from "../../context/userContext";
const dashboardIcon = "/assets/svg/dashboard.svg";
const leftArrow = "/assets/svg/left-arrow.svg";
const Home = () => {
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.isLoggedIn) history.push("/login");
    }, [userData.isLoggedIn, history]);

    const resetActiveTab = () => {
        setActiveItem("dashboard");
    };

    const [activeItem, setActiveItem] = useState("dashboard");
    const path = window.location.pathname;
    console.log(path);

    return (
        <div className='home-container'>
            <div className='sidebar'>
                <div className='sidebar-header'>
                    <img
                        className='sidebar-logo'
                        src='/assets/images/StreamerIcon.png'
                        alt='Streamer Logo'
                    />
                    <h2 className='sidebar-heading'>Streamer</h2>
                </div>
                <div className='sidebar-tabs'>
                    <Tab
                        imgSrc={dashboardIcon}
                        text='Dashboard'
                        link='/home'
                        onItemClicked={() => setActiveItem("dashboard")}
                        isActive={activeItem === "dashboard"}
                    />
                    <Tab
                        imgSrc={leftArrow}
                        text='Logout'
                        link='/home/logout'
                        onItemClicked={() => setActiveItem("logout")}
                        isActive={activeItem === "logout"}
                    />
                </div>
            </div>
            <div className='content'>
                {(activeItem === "dashboard" || "") && <Dashboard />}
                {activeItem === "logout" && (
                    <Logout resetActiveTab={resetActiveTab} />
                )}
            </div>
        </div>
    );
};

export default Home;
