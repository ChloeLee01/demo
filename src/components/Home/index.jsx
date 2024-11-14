import React from "react";
import ebook from "./../../images/onlineBooks.png"
import background from "./../../images/background.jpg"

const index = () => {
  return (
    <div className="wrapper bg-center bg-cover"
    >
      <div className="container">
        {/* 배경 이미지 삽입..... 어떻게? */}
        
        <div div className="first-section flex justify-between">
         
          <div className="text-box mt-14">
            <h2 className="text-2xl tracking-wider font-semibold text-yellow-400">
              introducing ebook
            </h2>
            <p className="mt-7 text-[3.5rem] text-slate-300 font-bold leading-5">ebook landing page for</p>
            <p className="text-[3.5rem] text-slate-300 font-bold">professionals</p>
            <button className="px-6 py-2 m-2 border rounded-3xl border-orange-300 bg-orange-300 text-white font-medium tracking-wider transition ease-in-out delay-150 hover:bg-red-400 hover:border-red-400">
              Discover more
            </button>
            <button className="px-6 py-2 m-2 text-slate-400 font-medium tracking-wider ransition ease-in-out delay-150 hover:text-red-400 ">
              Meet the Author
            </button>
          </div>

          <div className="img-box w-[50%] m-0">
            <img src={ebook} alt="" className="w-full -translate-y-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
