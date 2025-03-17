import React, { useState, useEffect } from 'react';
import img from '../assets/element.png';

const SidebarNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    //clean up unwanted behaviour
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  //don't render until scrolled
  if (!hasScrolled) return null;

  return (
    <div
      className={`fixed top-[140px] right-0 bg-[#374151] opacity-100 text-white z-50
        transition-all duration-300 ease-in-out overflow-hidden shadow-lg
        ${isOpen ? 'w-36' : 'w-28'}
        flex flex-col items-center px-2 py-2 rounded-l-lg`}
    >
      <div className="flex flex-col items-center w-full">
        <h2 className="text-lg font-semibold text-center my-2">Palvelut</h2>

        <button
          onClick={toggleSidebar}
          className="mt-2 focus:outline-none transform transition-transform duration-300"
        >
          <img
            src={img}
            alt="Toggle arrow"
            className={`${
              isOpen ? 'rotate-0' : 'rotate-180'
            } cursor-pointer mb-2`}
          />
        </button>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] my-8' : 'max-h-0'
        } overflow-hidden w-full`}
      >
        <ul className="space-y-10 w-full text-center">
          <li>
            <a
              href="#huoneistoremontit"
              onClick={(e) => handleScroll(e, 'huoneistoremontit')}
              className="text-base hover:text-gray-300"
            >
              Huoneisto- <br /> remontit
            </a>
          </li>
          <li>
            <a
              href="#rakennus-ja-remontointi"
              onClick={(e) => handleScroll(e, 'rakennus-ja-remontointi')}
              className="text-base hover:text-gray-300"
            >
              Rakennus ja <br /> remontointi
            </a>
          </li>
          <li>
            <a
              href="#kylpyhuone"
              className="text-base hover:text-gray-300"
              onClick={(e) => handleScroll(e, 'kylpyhuone')}
            >
              Kylpyhuone ja laatoitus
            </a>
          </li>
          <li>
            <a
              href="#kaluste-asennukset"
              onClick={(e) => handleScroll(e, 'kaluste-asennukset')}
              className="text-base hover:text-gray-300"
            >
              Kaluste- <br /> asennukset
            </a>
          </li>
          <li>
            <a
              href="#maalaustyot"
              onClick={(e) => handleScroll(e, 'maalaustyot')}
              className="text-base hover:text-gray-300"
            >
              Maalaustyöt
            </a>
          </li>
          <li>
            <a
              href="#mikrosementoinnit"
              onClick={(e) => handleScroll(e, 'mikrosementoinnit')}
              className="text-base hover:text-gray-300"
            >
              Mikro- <br /> sementointi
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarNavigation;
