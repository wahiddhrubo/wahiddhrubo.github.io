import React from "react";
import { name } from "../data/profile.json";
import DarkModeBtn from "./darkModeBtn";
import { HamburgerIcon } from "lucide-react";

function Navbar() {
  const links = [
    { name: "Bio", link: "#bio" },
    { name: "Publications", link: "#publications" },
    { name: "Voluntary Experience", link: "#voluntary" },
    { name: "News", link: "#news" },
    { name: "Technical Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
  ];

  return (
    <div className="fixed top-0 w-full bg-primary-bg-dark  text-white  lg:px-12 px-10 py-8 shadow-lg z-[100]">
      <div className="flex items-center max-w-6xl mx-auto">
        {/* Logo / Name */}
        <div className="mr-auto md:text-2xl text-lg font-semibold">{name}</div>

        {/* Links */}
        <div className="md:flex hidden gap-8 w-fit mx-auto text-sm">
          {links.map((link, index) => (
            <a
              key={index}
              href={`/${link.link}`}
              className="hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Dark Mode Btn */}
        <div className=" ml-auto">
          <DarkModeBtn />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
