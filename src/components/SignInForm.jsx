// SignInForm.js
import React from 'react';

const SignInForm = () => {
  return (
    <form className="p-10 bg-rose-100 rounded-md shadow-md max-w-md mx-auto">
      {/* Sign In form content */}
      <h2 className="text-3xl font-bold mb-6 text-rose-800">Sign In</h2>
      <div className="mb-6">
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
      <div className="mb-8">
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
      <button className="bg-rose-500 text-white text-lg px-8 py-3 rounded-xl transition-transform transform hover:scale-105 hover:bg-rose-600 hover:shadow-md">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
