import React from 'react';
import logo from '../assets/asarak-logo.png';

const Footer = () => {
  return (
    <footer className="w-full h-[220px] bg-[#303841] text-white flex items-center">
      {/* Left Side - Contact Information */}
      <div className="flex justify-between mx-auto w-full max-w-[900px] px-4 lg:px-0">
        <div>
          <p className="text-sm md:text-base">
            OTA YHTEYTTÄ <br />
            <br />
            <a href="tel:+1112223333" className="hover:text-gray-400">
              111 222 3333
            </a>{' '}
            <br />
            <a href="mailto:info@asarak.com" className="hover:text-gray-400">
              info@asarak.com
            </a>{' '}
            <br />
            Asarak Oy <br />
            Y-Tunnus: 1234567-8 <br />
          </p>
        </div>

        {/* Right Side - Logo */}
        <div className="flex justify-end">
          <img
            src={logo}
            alt="Logo"
            className="w-32 h-32 md:w-42 md:h-42"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
