import React from "react";
import { Link } from "react-router-dom";

const BookNav = () => {
  return (
    <div className="book-nav mt-10 p-4 w-1/3 border-2  rounded-xl ">
      <ul className="flex flex-col gap-3 px-4 py-3">
        <li className="book-nav-items">
          <Link to={"#"}>Introduction</Link>
        </li>
        <li className="book-nav-items">
          <Link to={"#"}>
            <span>Chapter 1: </span>
            Win back your time
          </Link>
        </li>
        <li className="book-nav-items">
          <Link to={"#"}>
            <span> Chapter 2: </span>Work less, do more
          </Link>
        </li>
        <li className="book-nav-items">
          <Link to={"#"}>
            <span>Chapter 3: </span> Delegate
          </Link>
        </li>
        <li className="book-nav-items">
          <Link to={"#"}>
            <span>Chapter 4: </span> Habits
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BookNav;
