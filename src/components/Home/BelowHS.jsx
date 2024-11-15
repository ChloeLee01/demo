import React from "react";
import { testimonials } from "../../constants/data";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

const BelowHS = () => {
  return (
    <div>
      <div className="container">
        <div className="row flex items-center gap-5">
          <div className="img-box flex items-center">
            {testimonials.map((item, idx) => (
              <img
                src={item.image}
                alt="pictures"
                key={idx}
                className="object-cover w-[4rem] h-[4rem] rounded-full border-[0.2rem]"
              />
            ))}
          </div>
          <div className="rating flex items-center gap-2">
            <p className="text-[2.5rem] font-semibold tracking-wider">
              4.5
            </p>
            <p className="flex text-xl translate-y-2">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStarHalf />
            </p>
            <p className="font-light text-md translate-y-2">2,564 Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowHS;
