import { useState } from "react";
import house from "../assets/nav-house.png";
import x from "../assets/close.png"; //close (X) icon
import menu from "../assets/burger-bar.png"; //hamburger menu icon
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white py-2 px-4 md:px-8" id="nav">
      <div className="flex items-center justify-between max-w-[1125px] mx-auto relative">
        {/* Logo Section */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
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
          style={{ zIndex: 40 }}
        >
          <li>
            <button
              className="text-xl hover:text-gray-600 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                navigate("/");
              }}
            >
              Etusivu
            </button>
          </li>
          <li>
            <button
              className="text-xl hover:text-gray-600 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                navigate("/services");
              }}
            >
              Palvelut
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/projects");
                setIsOpen(false);
              }}
              className="text-xl hover:text-gray-600 cursor-pointer"
            >
              Projektit
            </button>
          </li>
          <li>
            <button
              className="text-xl hover:text-gray-600 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                navigate("/contact");
              }}
            >
              Ota yhteyttä
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
