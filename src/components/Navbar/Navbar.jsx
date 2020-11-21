import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.scss";
const Navbar = () => {
    const history = useHistory();
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src='/assets/images/StreamerIcon.png' alt='logo' />
                <h1>Streamer</h1>
            </div>
            <div className='nav-tabs'>
                <div className='navbar-tab'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='navbar-tab'>
                    <Link to='/about-us'>About Us</Link>
                </div>
                <div className='navbar-tab'>
                    <Link to='/product'>Product</Link>
                </div>
                <div className='navbar-tab'>
                    <Link to='contact'>Contact</Link>
                </div>
                <div className='navbar-tab'>
                    <Button
                        text='LOGIN'
                        type='submit'
                        primary={true}
                        style={{ backgroundColor: "#01DEF1" }}
                        onClick={() => history.push("/login")}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
