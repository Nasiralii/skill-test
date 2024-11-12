import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-purple-800 text-white shadow-md overflow-hidden">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-8">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold">Skill Test</h1>
            </Link>
          </div>
          <div className="flex sm:hidden">
            <button type="button" onClick={toggleMenu}>
              <img
                src={`./assets/images/${
                  isOpen ? "close-menu" : "open-menu"
                }.svg`}
                width={20}
                height={20}
                alt={isOpen ? "close menu" : "open menu"}
                className="transition-opacity duration-300 ease-in-out"
              />
            </button>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden sm:flex sm:space-x-4 text-lg">
            <li>
              <Link
                to="/"
                className="hover-underline-animation px-3 py-2 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover-underline-animation px-3 py-2 rounded-md"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover-underline-animation px-3 py-2 rounded-md"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="hover-underline-animation px-3 py-2 rounded-md"
              >
                Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu with Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 md:bg-none bg-black md:bg-opacity-0 bg-opacity-75 z-40"
          onClick={closeMenu}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-1/2  bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={closeMenu}
        >
          <img
            src="./assets/images/close-menu.svg"
            alt="close menu"
            width={24}
            height={24}
          />
        </button>
        <ul className="flex flex-col items-center mt-20 space-y-6 text-lg">
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className="hover-underline-animation"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className="hover-underline-animation"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="hover-underline-animation"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              onClick={closeMenu}
              className="hover-underline-animation"
            >
              Service
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
