import React from "react";
import "./Product.scss";
import Navbar from "../../components/Navbar/Navbar";

const Product = () => {
    return (
        <>
            <div className='navbar-container'>
                <Navbar active='product' />
            </div>
            <div className='product-container'>
                <img
                    id='tablet'
                    src='/assets/svg/phone-screens/tablet.svg'
                    alt='tablet'
                />
                <img
                    id='background-svg'
                    src='/assets/svg/background/svg-6.svg'
                    alt=''
                />
                <div className='header-section'>
                    <h2>Runs on camera equipped Smartphone & Tablet</h2>
                </div>
                <div className='content-section'>
                    <div className='content-card'>
                        <h3 className='content-heading'>AFFORDABLE</h3>
                        <p className='content-description'>
                            No need to purchase any extra wearable or health
                            monitoring device
                        </p>
                    </div>
                    <div className='content-card'>
                        <h3 className='content-heading'>ACCESSIBLE</h3>
                        <p className='content-description'>
                            Always accessible from any personal smartphone or
                            tablet
                        </p>
                    </div>
                    <div className='content-card'>
                        <h3 className='content-heading'>FOR ALL</h3>
                        <p className='content-description'>
                            The solution can be implemented on any edge device
                        </p>
                    </div>
                    <div className='content-card'>
                        <h3 className='content-heading'>EASY TO USE</h3>
                        <p className='content-description'>
                            Extremely easy to use, by anyone! Across all age
                            groups
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
