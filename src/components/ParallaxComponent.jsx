import React from 'react';

const ParallaxCompnent = () => {
  return (
    <div
      className="h-80 bg-cover bg-center relative flex items-center justify-center text-white"
    >
      {/* Translucent black filter */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="absolute flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4 text-center leading-tight">
          Welcome to Your Impactful Community
        </h1>
        <p className="text-xl mb-8">
          Make a difference by contributing to the people. Join us now.
        </p>
      </div>
    </div>
  );
};

export default ParallaxCompnent;
