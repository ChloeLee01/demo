import React from "react";
import { MdMenuBook } from "react-icons/md";
import { Link } from "react-router-dom";
import { navItems } from "./../../constants/data";

const Header = () => {
  return (
    <nav className="sticky top-0 z-20 backdrop-grayscale">
      <div className="container relative">
        <div className="nav-inside-wrapper flex items-center justify-between">
          <Link>
            <div className="logo flex items-center gap-2 text-4xl font-semibold">
              <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center">
                <MdMenuBook color="white" fontSize={24} />
              </div>
              <span className="text-white">ebook</span>
            </div>
          </Link>

          <div className="nav-bar flex items-center gap-10">
            <ul className="nav-bar-items flex items-center justify-center gap-10 text-md font-semibold text-white">
              {navItems.map((item, idx) => (
                <li className="transform ease-in-out duration-150 hover:text-red-400">
                  <Link key={idx} to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="download-btn px-6 py-1 border-2 rounded-2xl  border-orange-300 text-orange-300 font-semibold transform ease-in-out duration-150 hover:bg-red-400">
              Download
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
