import React from "react";
import { MdMenuBook } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="wrapper w-full">
      <div className="container flex items-center justify-between">
        <div className="nav-logo flex items-center gap-2 text-4xl font-semibold">
          <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center">
            <MdMenuBook color="white" fontSize={24}/>
          </div>
          <span>ebook</span>
        </div>
        <div className="nav-bar flex items-center gap-10">
          <ul className="nav-bar-items flex items-center justify-center gap-8 text-md font-semibold">
            <li>Home</li>
            <li>The Book</li>
            <li>Author</li>
            <li>Reviews</li>
            <li>Contact</li>
          </ul>
          <button className="download-btn px-6 py-1 border-2 rounded-2xl  border-orange-300 text-orange-300 font-semibold">Download</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
