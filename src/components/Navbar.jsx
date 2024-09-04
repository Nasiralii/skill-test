import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex-1 flex items-center justify-between py-8">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Skill Test</h1>
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
          <ul
            className={`transition-transform duration-900 ease-in-out transform bg-black overflow-hidden z-50 ${
              isOpen
                ? "flex flex-col absolute top-16 w-full left-0 right-0 pb-6 text-center ease-in"
                : "hidden"
            } sm:flex sm:space-x-4 text-lg`}
          >
            <li className="text-base cursor-pointer md:w-auto w-fit md:mx-auto mx-auto">
              <Link
                to="/"
                className="hover-underline-animation px-3 py-2 rounded-md"
              >
                Home
              </Link>
            </li>
            <li className="text-base cursor-pointer md:w-auto w-fit md:mx-auto mx-auto">
              <Link
                to="/about"
                className="hover-underline-animation px-3 py-2 rounded-md"
              >
                About
              </Link>
            </li>
            <li className="text-base cursor-pointer md:w-auto w-fit md:mx-auto mx-auto">
              <Link
                to="/contact"
                className="hover-underline-animation px-3 py-2 rounded-md"
              >
                Contact
              </Link>
            </li>
            <li className="text-base cursor-pointer md:w-auto w-fit md:mx-auto mx-auto">
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
    </nav>
  );
};

export default Navbar;
