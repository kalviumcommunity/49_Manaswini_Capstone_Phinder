import React from "react";
import logo from "../assets/logo.png";
import img1 from "../assets/header_img.png";
// import "./styles/Landingpage.css";

const LandingPage = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-6'>
        {/* Left Content */}
        <div className='max-w-lg text-center md:text-left'>
          {/* Logo */}
          <img src={logo} alt='Phinder Logo' className='h-12 w-12 mb-6' />
          {/* Heading */}
          <h1 className='text-5xl font-light text-gray-800 mb-6'>
            Find the <span className='font-semibold text-blue-600'>Right</span>{" "}
            phone at the <span className='font-semibold'>Right</span> place.
          </h1>
          {/* Description */}
          <p className='text-gray-600 text-lg mb-8'>
            A place where you can find the smartphone of your choice at the best
            deal and most importantly you can compare it on different E-commerce
            websites and get suggestions on where to buy at the best price. This
            website is for both the Tech and non-tech, making it a platform for
            a diverse range of people.
          </p>
          {/* Button */}
          <button className='bg-blue-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-900 transition-colors duration-300'>
            Get Started
          </button>
        </div>

        {/* Right Content (Image) */}
        <div className='mt-10 md:mt-0 md:ml-12'>
          <img
            src={img1}
            alt='Phone'
            className='w-[300px] md:w-[400px] drop-shadow-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
