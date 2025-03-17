import React from 'react';
import arrow from '../../assets/arrow.png';
import { useNavigate } from 'react-router-dom';

const TypesCard = ({ image, title, description, targetId, alt }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/services#${targetId}`);
  };

  return (
    <div className="relative w-full max-w-[420px] min-w-[320px] h-[420px] overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})`}}
        alt={alt}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/30" />

      {/* Text Content */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[348px] text-center">
        {/* Title */}
        <h2 className="text-[28px] md:text-[35px] font-semibold text-[#303841] leading-[42px] md:leading-[52px]">
          {title}
        </h2>
        {/* Description */}
        <p className="mt-1 text-[24px] leading-[28px] md:leading-[33px] text-[#303841]">
          {description}
        </p>
      </div>

      {/* Button with Instant Hover Effect */}
      <button
        onClick={handleNavigation}
        id="type-button"
        className="absolute bottom-0 right-0 w-[55px] h-[55px] bg-[#303841] flex items-center justify-center transition-colors duration-0 hover:bg-white group cursor-pointer"
      >
        <img
          src={arrow}
          alt="Arrow"
          className="w-6 h-6 group-hover:invert cursor-pointer"
        />
      </button>
    </div>
  );
};

export default TypesCard;
