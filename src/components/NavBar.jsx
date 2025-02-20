import { useState } from "react";
import house from "../assets/nav-house.png";
import x from "../assets/close.png"; // Close (X) icon
import menu from "../assets/burger-bar.png"; // Hamburger menu icon

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="nav" className="bg-white py-2 px-4 md:px-8 lg:mx-42 flex items-center justify-between relative">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={house} alt="house" className="w-12 h-12" />
        <h1 className="text-2xl md:text-3xl font-bold ml-2">ASARAK</h1>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-darkGrey z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={isOpen ? x : menu} alt="menu-icon" className="w-7 h-7" />
      </button>

      {/* Navigation Links - Mobile & Desktop */}
      <ul
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 transition-transform duration-300 md:static md:w-auto md:h-auto md:flex-row md:space-y-0 md:space-x-8 md:bg-transparent ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        style={{ zIndex: 40 }} // Ensures it appears above content
      >
        <li>
          <a
            href="#services"
            className="text-xl hover:text-[#84522F]"
            onClick={() => setIsOpen(false)}
          >
            Palvelut
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-xl hover:text-[#84522F]"
            onClick={() => setIsOpen(false)}
          >
            Projektit
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-xl hover:text-[#84522F]"
            onClick={() => setIsOpen(false)}
          >
            Ota yhteyttä
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
