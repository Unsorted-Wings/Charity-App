// SignUpForm.js
import React from 'react';

const SignUpForm = ({ onSignInClick }) => {
  return (
    <form className="p-8 bg-rose-100 rounded-md shadow-md">
      {/* Sign Up form content */}
      <h2 className="text-2xl font-bold mb-4 text-rose-800">Sign Up</h2>
      <div className="mb-4">
        <label className="block text-rose-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-rose-800"
          id="name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-rose-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-rose-800"
          id="email"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-rose-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-rose-800"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="mb-6">
        <label className="block text-rose-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-rose-800"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <button type="submit" 
      className="bg-rose-500 text-white text-lg px-8 py-3 rounded-xl transition-transform transform hover:scale-105 hover:bg-rose-600 hover:shadow-md">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
