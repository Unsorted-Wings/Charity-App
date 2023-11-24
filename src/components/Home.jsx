import React from 'react';

const HomePage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(./assets/image1.jpg)` }}
    >
      {/* Translucent black filter */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content in the center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold mb-4 text-center leading-tight">
          Welcome to Your Impactful Community
        </h1>
        <p className="text-lg mb-8 text-justify max-w-5xl">
          Join us in creating a positive impact! Sign up now and be a part of a community dedicated to making a difference. Whether you want to contribute by donating items or host an event, your actions matter. Together, we can create meaningful change and build a better future.
        </p>
        <button className="bg-rose-500 text-white text-xl px-9 py-3 rounded-full transition-transform transform hover:scale-105 hover:bg-rose-600 hover:shadow-md duration-300 ease-in-out">
          Donate
        </button>
      </div>
    </div>
  );
};

export default HomePage;
