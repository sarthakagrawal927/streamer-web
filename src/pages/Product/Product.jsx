import React from "react";
import "./Product.scss";
import Navbar from "../../components/Navbar/Navbar";

const Product = () => {
    return (
        <>
            <div className='navbar-container'>
                <Navbar active='product' />
            </div>
            <div>Product</div>
        </>
    );
};

export default Product;
