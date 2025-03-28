import React from "react";
import logo from "../assets/asarak-logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="relative w-full h-[220px] bg-[#303841] text-white flex items-center">
      {/* Main content wrapper */}
      <div className="flex justify-between mx-auto w-full max-w-[900px] px-4 lg:px-0">
        {/* Left Side */}
        <div>
          <p className="text-sm md:text-base">
            <span className="font-semibold">OTA YHTEYTTÄ </span>
            <br />
            <br />
            <a href="tel:+358451120383" className="hover:text-gray-400">
              045 112 0383
            </a>{" "}
            <br />
            <a href="mailto:aatu@asarak.fi" className="hover:text-gray-400">
              aatu@asarak.fi
            </a>{" "}
            <br />
            Asarak Oy <br />
            Y-Tunnus: 3430841-7 <br />
          </p>
        </div>

        {/* Right Side - Logo */}
        <div className="flex justify-end">
          <img
            src={logo}
            alt="Logo"
            className="w-32 h-32 md:w-42 md:h-42 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
      </div>

      {/* Copyright text */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-300">
        © 2025 Asarak Oy
      </div>
    </footer>
  );
};

export default Footer;
