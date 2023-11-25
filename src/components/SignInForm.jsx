import React from 'react';
import { signIn } from 'next-auth/react';
import { useRef } from 'react';

const SignInForm = () => {

  return (
    <form className="py-20 px-28 bg-rose-100 rounded-md shadow-md w-3/5 mx-auto">
      {/* Sign In form content */}
      <h2 className="text-4xl font-bold mb-8 text-rose-800">Sign In</h2>
      <div className="mb-8">
        <label className="block text-rose-700 text-lg font-bold mb-4" htmlFor="email">
          Email
        </label>
        <input
          className="appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline text-lg text-rose-800"
          id="email"
          type="text"
          placeholder="Email"
          
        />
      </div>
      <div className="mb-10">
        <label className="block text-rose-700 text-lg font-bold mb-4" htmlFor="password">
          Password
        </label>
        <input
          className="appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline text-lg text-rose-800"
          id="password"
          type="password"
          placeholder="Password"
          
        />
      </div>
<<<<<<< HEAD
      <button onClick={signIn()} className="bg-rose-500 text-white text-lg px-8 py-3 rounded-xl transition-transform transform hover:scale-105 hover:bg-rose-600 hover:shadow-md">
=======
      <button className="bg-rose-500 text-white text-xl px-10 py-4 rounded-full transition-transform transform hover:scale-105 hover:bg-rose-600 hover:shadow-md">
>>>>>>> 70f7e3ffd92a36cdc219bfba11235a6f7ef1e601
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
