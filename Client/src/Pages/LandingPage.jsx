import React from "react";
import logo from "../assets/logo.png";
import img1 from "../assets/header_img.png";
import img2 from "../assets/fair-comp.png";
import img3 from "../assets/best-deal.png";
import img4 from "../assets/real-c.png";

const LandingPage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-500 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-20">
          {/* Left Content */}
          <div className="max-w-lg text-center md:text-left">
            {/* Logo */}
            <img src={logo} alt="Phinder Logo" className="h-12 mb-8" />
            {/* Heading */}
            <h1 className="text-6xl leading-tight font-medium text-gray-500 mb-8">
              Find the <span className="font-medium text-gray-800 ">Right</span>{" "}
              <br />
              phone at the{" "}
              <span className="font-medium text-gray-800">Right</span> <br />
              place.
            </h1>
            {/* Description */}
            <p className="text-gray-600 mb-8">
              A place where you can find the smartphone of your choice at the
              best deal and most importantly you can compare it on different
              E-commerce websites and get suggestions on where to buy at the
              best price. This website is for both the Tech and non-tech, making
              it a platform for a diverse range of people.
            </p>
            {/* Button */}
            <button className="bg-customBlue border-none text-white px-20 py-3 rounded-full shadow-md">
              Get Started
            </button>
          </div>

          {/* Right Content (Image) */}
          <div className="mt-10 md:mt-0 md:ml-12">
            <img
              src={img1}
              alt="Phone"
              className="w-[360px] md:w-[480px] drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
