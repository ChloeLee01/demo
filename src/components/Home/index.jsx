import React from "react";
import Header from "../common/Header";
import HeroSection from "./HeroSection";
import BelowHS from "./BelowHS";

const index = () => {
  return (
    <div>
      <div className="img-wrapper">
        <Header />
        <HeroSection />
      </div>
      <div className="bg-orange-300">
        <BelowHS />
      </div>
    </div>
  );
};

export default index;
