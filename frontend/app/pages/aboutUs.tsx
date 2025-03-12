import React from "react";
import CoffeeSplash from "@/assets/coffee-splash.png" 

const AboutUs = () => {
  return (
    <section className="bg-cream min-h-screen flex flex-col items-center justify-center px-6 mt-10 lg:mt-0">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-brown">ABOUT US</h3>
        <h2 className="text-3xl font-bold text-darkbrown">Serving Since 1950</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center max-w-6xl">
        <div className="md:w-1/2 text-left px-6">
          <h3 className="text-2xl font-bold text-darkbrown">Our Story</h3>
          <p className="text-gray-700 mt-3">
            Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed
            vero dolor sea.
          </p>
          <p className="text-gray-600 mt-2">
            Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
            nonumy kasd sed dolor eos diam lorem eirmod.
          </p>
          <button className="rounded-lg border cursor-pointer border-white px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-white hover:text-black mt-5">
            Learn More
          </button>
        </div>
        <div className="md:w-1/3 flex justify-center my-6">
          <img
            src={CoffeeSplash.src}
            alt="Coffee Splash"
            className="max-w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 text-left px-6">
          <h3 className="text-2xl font-bold text-darkbrown">Our Vision</h3>
          <p className="text-gray-700 mt-3">
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
            dolor lorem ipsum ut sed eos.
          </p>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>✔ Lorem ipsum dolor sit amet</li>
            <li>✔ Lorem ipsum dolor sit amet</li>
            <li>✔ Lorem ipsum dolor sit amet</li>
          </ul>
          <button className="rounded-lg cursor-pointer bg-[#8B5A2B] px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-[#a57242] mt-5">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
