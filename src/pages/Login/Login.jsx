import React from "react";

const Login = () => {
  return (
    <div className='grid grid-flow-col'>
      <div className='container'>
        <img src='/logo.jpg' alt='' />
      </div>
      <div class='w-full max-w-xs container'>
        <form class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <h1 className='text-5xl'>Login</h1>
          <div class='mb-4'>
            <label
              class='block text-gray-700 text-sm font-bold mb-2'
              for='username'>
              Username
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Username'
            />
          </div>
          <div class='mb-6'>
            <label
              class='block text-gray-700 text-sm font-bold mb-2'
              for='password'>
              Password
            </label>
            <input
              class='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='password'
            />
            <p class='text-red-500 text-xs italic'>Please choose a password.</p>
          </div>
          <div class='flex items-center justify-between'>
            <button
              class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline center'
              type='button'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
