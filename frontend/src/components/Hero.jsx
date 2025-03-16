import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-gradient-to-b from-blue-300 to-white">
      <div className="relative z-10 text-center text-black max-w-3xl px-6 mt-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Connecting Brands with Motovloggers</h1>
        <p className="mt-4 text-lg md:text-xl text-black">
          Find the perfect sponsorship opportunities to fuel your content and grow your audience.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a 
            href="https://motoconnect.onrender.com/api/get-sponsorships" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition duration-300 shadow-lg"
          >
            Browse Sponsorships
          </a>
          <a 
            href="/add-sponsorship" 
            className="bg-white text-blue-600 border border-gray-600 hover:bg-blue-100 font-semibold py-3 px-6 rounded-xl text-lg transition duration-300 shadow-lg"
          >
            Post a Sponsorship
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
