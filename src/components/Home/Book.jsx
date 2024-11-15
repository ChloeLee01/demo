import React from "react";
import tablet from "./../../images/tabletScreen.jpg";
const Book = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="first-section flex items-center justify-between">
          <div className="img-box w-1/2">
            <img src={tablet} alt="" />
          </div>
          <div className="des-box w-1/2">
            <p>Modern & Creative</p>
            <p>About The Book</p>
            <p className="book-text">
              Credit goes to <span className="text-red-600">FreePik</span> for
              images used in this ebook landing page template. You may browse
              FreePik to download more free images for your website.
            </p>
            <p className="book-text">
              TemplateMo is one of the best website to download free CSS
              templates for any purpose. This is an ebook landing page template
              using Bootstrap 5 CSS layout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
