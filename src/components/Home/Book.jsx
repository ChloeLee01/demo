import React from "react";
import tablet from "./../../images/tabletScreen.jpg";
import BookNav from "./BookNav";
import InsideBook from "./InsideBook";
const Book = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="first-section flex items-center justify-between">
          <div className="img-box w-5/8 flex translate-y-14">
            <img src={tablet} alt="tablet" />
          </div>
          <div className="des-box w-3/8 flex items-baseline pl-5">
            <div>
              <p className="font-semibold text-xl text-amber-300">Modern & Creative</p>
              <p className="font-semibold text-[3rem]">About The Book</p>
              <p className="book-text leading-7">
                Credit goes to <span className="text-red-600">FreePik</span> for
                images used in this ebook landing page template. You may browse
                FreePik to download more free images for your website.
              </p>
              <p className="book-text mt-3">
                TemplateMo is one of the best website to download free CSS
                templates for any purpose. This is an ebook landing page template
                using Bootstrap 5 CSS layout
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="book-wrapper flex">
          <BookNav/>
          <InsideBook/>
        </div>
      </div>
    </div>
  );
};

export default Book;
