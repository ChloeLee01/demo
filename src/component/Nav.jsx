import React from 'react'
import { MdMenuBook } from "react-icons/md";

const Nav = () => {
  return (
    <nav className='wrapper'>
      <div className="container">
        <div className="nav-logo">
        <MdMenuBook />
        <span>ebook</span>
        </div>
        <div className="nav-bar">
          <ul>
            <li>Home</li>
            <li>The Book</li>
            <li>Author</li>
            <li>Reviews</li>
            <li>Contact</li>
          </ul>
          <button>Download</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav