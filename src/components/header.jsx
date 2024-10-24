import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center px-12 py-6 bg-[#061A34] text-secondary">
        <h5 className="text-xl">Arpit</h5>

        {/* Hamburger Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        {/* Nav Links for larger screens */}
        <ul className="hidden md:flex gap-6">
          <li className="hover:underline hover:underline-offset-4 hover:text-tertiary">Home</li>
          <li className="hover:underline hover:underline-offset-4 hover:text-tertiary">About</li>
          <li className="hover:underline hover:underline-offset-4 hover:text-tertiary">Skills</li>
          <li className="hover:underline hover:underline-offset-4 hover:text-tertiary">Projects</li>
          <li className="hover:underline hover:underline-offset-4 hover:text-tertiary">Contact</li>
        </ul>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-16 left-0 w-full bg-[#061A34] text-center transition-transform duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col gap-4 py-4">
            <li className="hover:underline hover:underline-offset-4 hover:text-tertiary" onClick={toggleMenu}>Home</li>
            <li className="hover:underline hover:underline-offset-4 hover:text-tertiary" onClick={toggleMenu}>About</li>
            <li className="hover:underline hover:underline-offset-4 hover:text-tertiary" onClick={toggleMenu}>Skills</li>
            <li className="hover:underline hover:underline-offset-4 hover:text-tertiary" onClick={toggleMenu}>Projects</li>
            <li className="hover:underline hover:underline-offset-4 hover:text-tertiary" onClick={toggleMenu}>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
