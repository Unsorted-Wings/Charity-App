import React from "react";

const ParallaxCompnent = () => {
  return (
    <div className="h-[36rem] main bg-cover bg-center relative flex items-center justify-center text-white">
      {/* Translucent black filter */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="absolute flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4 text-center leading-tight">
          Who are We?
        </h1>
        <p className="text-xl max-w-2 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          totam, repellat saepe Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
};

export default ParallaxCompnent;
