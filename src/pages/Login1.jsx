import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import { MdClose } from "react-icons/md";


const Login = () => {
  const router = useRouter();
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggleForm = () => {
    setIsSignIn((prev) => !prev);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="relative flex h-screen">
      {/* Close button */}
      <button
        onClick={handleGoBack}
        className="absolute top-6 right-6 text-white text-3xl cursor-pointer transform hover:scale-105"
      >
        <MdClose />
      </button>

      <div className={`w-1/2 flex items-center justify-center transition-all duration-300 ease-in-out ${isSignIn ? 'bg-rose-300' : 'bg-rose-600'}`}>
        {isSignIn ? (
          <SignInForm />
        ) : (
          <div className="text-white text-center">
            <h2 className="text-6xl font-bold mb-6">Welcome!</h2>
            <p className="mb-8 text-xl">Already have an account? Sign in now!</p>
            <button
              onClick={handleToggleForm}
              className="bg-white text-rose-500 text-lg mt-5 px-9 py-4 rounded-full hover:bg-rose-100 transform hover:scale-105 hover:shadow-md transition duration-300 ease-in-out"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
      <div className={`w-1/2 flex items-center justify-center transition-all duration-300 ease-in-out ${isSignIn ? 'bg-rose-600' : 'bg-rose-300'}`}>
        {isSignIn ? (
          <div className="text-white text-center">
            <h2 className="text-6xl font-bold mb-6">Welcome!</h2>
            <p className="mb-8 text-xl">Don't have an account? Sign up now!</p>
            <button
              onClick={handleToggleForm}
              className="bg-white text-rose-500 text-lg mt-5 px-9 py-4 rounded-full hover:bg-rose-100 transform hover:scale-105 hover:shadow-md transition duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </div>
        ) : (
          <SignUpForm onSignInClick={handleToggleForm} />
        )}
      </div>
    </div>
  );
};

export default Login;
