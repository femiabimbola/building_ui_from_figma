import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constant";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px]" />
      {/* Here is for the desktop */}
      <ul className="hidden list-none sm:flex justify-end items-center flex-1">
        {/* Every return inside a map must have a key. The element must have a key */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins cursor-pointer text-white text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } font-normal `}>
            {/* When using dollar, use backtick  */}
            <a href={"#{nav.id}"}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* Here is for the mobile */}
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        {/*   Don't use this, even though it works onClick={() => setToggle(!toggle)}*/}
        <img
          src={toggle ? close : menu}
          alt={"menu"}
          onClick={() => setToggle((prev) => !prev)}
          className="w-[28px] h-[28px] object-contain"
        />
        {/* The menu flyout now */}
        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0
         mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-start flex-1">
            {/* Every return inside a map must have a key. The element must have a key */}
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins cursor-pointer text-white text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                } font-normal `}>
                {/* When using dollar, use backtick  */}
                <a href={"#{nav.id}"}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
