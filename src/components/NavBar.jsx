import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constant";
const NavBar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px]" />
      <ul className="hidden list-none sm:flex justify-end items-center flex-1">
        {/* Every return inside a map must have a key. The element must have a key */}
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins`}>
            {" "}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
