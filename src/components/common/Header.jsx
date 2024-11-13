import React from "react";
import { MdMenuBook } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-grayscale">
      <div className="container relative">
        <div className="nav-inside-wrapper flex items-center justify-between">
          <Link>
            <div className="logo flex items-center gap-2 text-4xl font-semibold">
              <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center">
                <MdMenuBook color="white" fontSize={24} />
              </div>
              <span>ebook</span>
            </div>
          </Link>

          <div className="nav-bar flex items-center gap-10">
            <ul className="nav-bar-items flex items-center justify-center gap-8 text-md font-semibold">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>The Book</Link>
              </li>
              <li>
                <Link>Author</Link>
              </li>
              <li>
                <Link>Reviews</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
            <button className="download-btn px-6 py-1 border-2 rounded-2xl  border-orange-300 text-orange-300 font-semibold hover:bg-orange-400">
              Download
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
