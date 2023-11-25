import React from 'react';

const SignUpForm = ({ onSignInClick }) => {
  return (
    <form className="py-14 px-28 bg-rose-100 rounded-md shadow-md w-3/5 mx-auto">
      {/* Sign Up form content */}
      <h2 className="text-3xl font-bold mb-6 text-rose-800">Sign Up</h2>
      <div className="mb-6">
        <label className="block text-rose-700 text-lg font-bold mb-4" htmlFor="name">
          Name
        </label>
        <input
          className="appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline text-lg text-rose-800"
          id="name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="mb-6">
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
      <div className="mb-6">
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
      <div className="mb-8">
        <label className="block text-rose-700 text-lg font-bold mb-4" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          className="appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline text-lg text-rose-800"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <button
        type="submit"
        className="bg-rose-500 text-white text-xl px-10 py-4 rounded-full transition-transform transform hover:scale-105 hover:bg-rose-600 hover:shadow-md"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
