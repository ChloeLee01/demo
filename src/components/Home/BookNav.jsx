import React from "react";
import { Link } from "react-router-dom";

const BookNav = () => {
  return <div className="book-nav mt-10 p-4 w-1/3 border-2  rounded-xl">
    <ul >
      <li className="book-nav-items"><Link to={"#"}>Introduction</Link></li>
      <li className="border border-blue-50 rounded-3xl bg-blue-50 py-2 px-5 text-xl font-medium text-white tracking-wider"><Link to={"#"}>Chapter 1: <span>Win back your time</span></Link></li>
      <li><Link to={"#"}>Chapter 2: <span>Work less, do more</span></Link></li>
      <li><Link to={"#"}>Chapter 3: <span>Delegate</span></Link></li>
      <li><Link to={"#"}>Chapter 4: <span>Habits</span></Link></li>
    </ul>
  </div>;
};

export default BookNav;
