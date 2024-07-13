import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaAngleDown, FaAngleUp, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

function Sidebar({ toggleSidebar, isSidebarOpen }) {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const toggleMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-[999] w-full max-w-[320px] bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="p-5">
            {/* close icon */}
            <div
              className="flex justify-end cursor-pointer"
              onClick={toggleSidebar}
            >
              <IoClose className="text-2xl hover:text-orange-600 transition-colors duration-500" />
            </div>
            {/* logo */}
            <div className="flex">
              <img
                src="/idax-logo.png"
                className="w-full max-w-[275px]"
                alt="IDAX logo"
              />
            </div>
          </div>

          {/* links */}
          <nav className="flex-grow px-5">
            <div className="flex flex-col mt-8">
              <a href="#home" className="py-3 border-b-2 font-bold">
                Home
              </a>
              <a href="#about" className="py-3 border-b-2 font-bold">
                About
              </a>
              <a href="#hosting" className="py-3 border-b-2 font-bold">
                Hosting
              </a>
              <a href="#contact" className="py-3 border-b-2 font-bold">
                Contact
              </a>

              {/* More dropdown */}
              <div className={`${isMoreOpen ? "" : "border-b-2"} py-3`}>
                <div
                  className="flex justify-between items-center font-bold cursor-pointer"
                  onClick={toggleMore}
                >
                  <span>More</span>
                  {isMoreOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isMoreOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-2 ml-4">
                    <a
                      href="#services"
                      className="block py-2 text-sm hover:text-orange-600 transition-colors duration-300"
                    >
                      Services
                    </a>
                    <a
                      href="#blog"
                      className="block py-2 text-sm hover:text-orange-600 transition-colors duration-300"
                    >
                      Blog
                    </a>
                    <a
                      href="#team"
                      className="block py-2 text-sm hover:text-orange-600 transition-colors duration-300"
                    >
                      Team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Contact Info Section */}
          <div className="p-5">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-600 mb-2">+1 805 587 2221</p>
            <p className="text-gray-600 mb-4">support@idaxhost.com</p>
            <div className="flex gap-6 mb-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                <FaDribbble />
              </a>
            </div>
            <button className="font-bold bg-gradient-to-r from-btn-blue-light to-btn-blue-dark hover:from-btn-blue-dark hover:to-btn-blue-dark transition-all duration-500 text-white py-4 px-8 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
