import React from "react";
import "./Product.scss";
import Navbar from "../../components/Navbar/Navbar";

const Product = () => {
  return (
    <>
      <div className='navbar-container'>
        <Navbar active='product' />
      </div>
      <img className='temp-image' src='/assets/ss/product.png' alt='' />
    </>
  );
};

export default Product;
