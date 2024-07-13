import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { FaAngleDown, FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import ServiceSidebar from "../ServiceSidebar/ServiceSidebar";
import Overlay from "../Overlay/Overlay";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <Overlay
        isOpen={isServicesOpen || isSidebarOpen}
        onClose={() => {
          setIsServicesOpen(false);
          setIsSidebarOpen(false);
        }}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <ServiceSidebar
        isServicesOpen={isServicesOpen}
        toggleServices={toggleServices}
      />

      {/* Initial Navbar */}
      <div className="flex justify-end text-white text-sm gap-2 pt-4 pb-11 px-7 sm:px-20 md:px-[85px] lg:px-40 bg-neutral">
        <Link
          to="/login"
          className="text-sm font-medium hover:text-btn-blue-dark transition-colors duration-300"
        >
          Login
        </Link>
        <div className="border-l mx-2 h-4 border-btn-blue-light"></div>
        <Link
          to="/signup"
          className="text-sm font-medium hover:text-btn-blue-dark transition-colors duration-300"
        >
          Signup
        </Link>
      </div>

      <div className="flex justify-between px-3 sm:px-20 md:px-[60px] lg:px-32 -translate-y-2/4 z-10">
        <div className="bg-Navbg w-full rounded-md px-4 h-[70px] flex items-center justify-between">
          <img
            src="/idax-logo.png"
            className="w-28 sm:w-40 h-auto"
            alt="idaxlogo"
          />

          <div className="flex items-center">
            {["home", "about", "hosting", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="hidden md:block font-bold px-3 hover:text-btn-blue-dark transition-colors duration-500 capitalize"
              >
                {section}
              </a>
            ))}
            <div
              className="hidden md:block relative group ml-2"
              onClick={toggleDropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="font-bold px-2 hover:text-btn-blue-dark transition-colors duration-500 flex items-center">
                More <FaAngleDown className="ml-1" />
              </button>
              <div
                className={`absolute right-0 mt-2 w-36 bg-white shadow-lg transition-opacity duration-500 ${
                  isDropdownOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                {["services", "blog", "team"].map((option) => (
                  <a
                    key={option}
                    href={`#${option}`}
                    className="block px-4 py-2 font-bold text-gray-800 border-b border-opacity-50 hover:bg-gray-100 capitalize"
                  >
                    {option}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex">
              <button
                className="w-5 h-5 text-xl cursor-pointer ml-2 hover:text-orange-600 transition-colors duration-500"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <IoSunnyOutline /> : <FaMoon />}
              </button>
              <button className="w-5 h-5 text-xl cursor-pointer ml-2 hover:text-orange-600 transition-colors duration-500">
                <AiOutlineSearch />
              </button>
              <div className="border-l h-4 border-white opacity-60 mr-2"></div>
              <button
                onClick={toggleSidebar}
                className="block md:hidden w-5 h-5 text-xl cursor-pointer hover:text-orange-600 transition-colors duration-500"
              >
                <AiOutlineMenu />
              </button>
              <button
                onClick={toggleServices}
                className="hidden md:block w-5 h-5 text-xl cursor-pointer hover:text-orange-600 transition-colors duration-500"
              >
                <AiOutlineMenu />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Navbar */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-2xl z-20 transition-transform duration-1000 px-3 sm:px-20 md:px-[60px] lg:px-32 ${
          isScrolled ? "translate-y-0" : "-translate-y-[300%]"
        }`}
      >
        <div className="bg-white w-full rounded-md px-4 h-[70px] flex items-center justify-between">
          <img
            src="/idax-logo.png"
            className="w-28 sm:w-40 h-auto"
            alt="idaxlogo"
          />
          <div className="flex items-center">
            {["home", "about", "hosting", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="hidden md:block font-bold px-3 hover:text-btn-blue-dark transition-colors duration-500 capitalize"
              >
                {section}
              </a>
            ))}
            <div
              className="hidden md:block relative group ml-2"
              onClick={toggleDropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="font-bold px-2 hover:text-btn-blue-dark transition-colors duration-500 flex items-center">
                More <FaAngleDown className="ml-1" />
              </button>
              <div
                className={`absolute right-0 mt-2 w-36 bg-white shadow-lg transition-opacity duration-500 ${
                  isDropdownOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                {["services", "blog", "team"].map((option) => (
                  <a
                    key={option}
                    href={`#${option}`}
                    className="block px-4 py-2 font-bold text-gray-800 border-b border-opacity-50 hover:bg-gray-100 capitalize"
                  >
                    {option}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex">
              <button
                className="w-5 h-5 text-lg cursor-pointer ml-2 hover:text-orange-600 transition-colors duration-500"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <IoSunnyOutline /> : <FaMoon />}
              </button>
              <button className="w-5 h-5 text-lg cursor-pointer ml-2 hover:text-orange-600 transition-colors duration-500">
                <AiOutlineSearch />
              </button>
              <div className="border-l h-4 border-white opacity-60 mr-2"></div>
              <button
                onClick={toggleSidebar}
                className="block md:hidden w-5 h-5 text-lg cursor-pointer hover:text-orange-600 transition-colors duration-500"
              >
                <AiOutlineMenu />
              </button>
              <button
                onClick={toggleServices}
                className="hidden md:block w-5 h-5 text-xl cursor-pointer hover:text-orange-600 transition-colors duration-500"
              >
                <AiOutlineMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
