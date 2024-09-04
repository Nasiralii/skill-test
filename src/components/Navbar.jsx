import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
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
          <div
            className={`transition-transform transform bg-gray-800 text-gray-300 overflow-hidden z-50 ${
              isOpen
                ? "flex flex-col absolute top-16 w-full left-0 right-0 pb-6 text-center ease-in"
                : "hidden"
            } sm:flex sm:space-x-4 text-lg`}
          >
            <a
              href="/"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            >
              Home
            </a>
            <a
              href="/"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            >
              About
            </a>
            <a
              href="/"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            >
              Service
            </a>
            <a
              href="/"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
