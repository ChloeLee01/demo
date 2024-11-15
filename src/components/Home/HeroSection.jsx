import React from "react";
import ebook from "./../../images/onlineBooks.png";

const HeroSection = () => {
  return (
    <div className="container relative z-10">
      <div div className="first-section flex justify-between mt-16">
        <div className="text-btn-box w-1/2">
          <div className="text-box pt-14">
            <h2 className="text-2xl tracking-wider font-semibold text-amber-400">
              introducing ebook
            </h2>
            <p className="mt-7 text-[3.5rem] text-white font-bold leading-[55px]">
              ebook landing page for professionals
            </p>
          </div>
          <div className="btn-box mt-8">
            <button className="px-6 py-2 m-2 border rounded-3xl border-orange-300 bg-orange-300 text-white font-medium tracking-wider transition ease-in-out delay-150 hover:bg-red-400 hover:border-red-400">
              Discover more
            </button>
            <button className="px-6 py-2 m-2 text-white font-medium tracking-wider ransition ease-in-out delay-150 hover:text-red-400 ">
              Meet the Author
            </button>
          </div>
          
        </div>

        <div className="img-box w-1/2 -translate-y-8 relative z-[2]">
          <img src={ebook} alt="onlinebook" className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
