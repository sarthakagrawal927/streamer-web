import React, { useState } from "react";
import Button from "../Button/Button";

const Form = () => {
  return (
    <div className='w-full '>
      <form className='bg-white shadow-md rounded px-12  pt-12  pb-12 mb-1'>
        <h1 className='text-5xl mb-2 font-semibold'>Login</h1>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            for='username'>
            Username
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Username'
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            for='password'>
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='Password'
          />
        </div>
        <div className='text-center'>
          <Button text='Submit' />
        </div>
      </form>
    </div>
  );
};

export default Form;
