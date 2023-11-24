import React from 'react';

const AboutPage = () => {
  return (
    <div className="mx-auto flex px-10 py-12 bg-rose-200">
      {/* Left Column */}
      <div className="flex-1 pr-16">
        <h1 className="text-8xl font-bold mb-6 text-rose-700">About Us</h1>

        <p className="w-2/3 text-xl mb-6 text-rose-700 text-justify leading-7">
          Through our platform, you can easily discover upcoming events, participate in charitable activities, and contribute to the well-being of others. Together, we can create a better and more compassionate world.
        </p>

        <p className="w-2/3 text-xl text-rose-700 text-justify leading-7">
          Thank you for being a part of our community and for your commitment to making the world a better place.
        </p>

        {/* Read More Button - Add your functionality here */}
        <button className="bg-rose-500 text-white mt-8 px-6 py-3 rounded-full hover:bg-rose-600 transition-transform transform hover:scale-105 focus:outline-none">
          Read More
        </button>
      </div>

      {/* Right Column */}
      <div className="flex-1">
        <img src="./assets/AboutUs.png" alt="Vector Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default AboutPage;
