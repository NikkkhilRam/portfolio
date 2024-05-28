import React, { useState } from "react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

import { IoMdClose } from "react-icons/io";

function Navbar({
  scrollToSkills,
  scrollToExperiance,
  scrollToProjects,
  scrollToContact,
}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div class="flex items-center justify-between  font-primary text-white p-4 border-b border-gray-800 sticky">
      <p className="text-3xl font-semibold ">NR</p>

      <div className="sm:visible hidden sm:flex">
        <ul className="flex items-center gap-6">
          <button>Home</button>
          <button onClick={scrollToExperiance}>Experience</button>
          <button onClick={scrollToSkills}>Skills</button>
          <button onClick={scrollToProjects}>Projects</button>
          <button onClick={scrollToContact}>Contact</button>
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <a className="cursor-pointer" href="https://github.com/NikkkhilRam">
          <FaGithub size={24} />
        </a>
        <a
          className="cursor-pointer"
          href="https://www.linkedin.com/in/nikhil-rameshh"
        >
          <FaLinkedin size={24} />
        </a>

        <a className="cursor-pointer" href="https://twitter.com/nikkkkkkil">
          <FaXTwitter size={24} />
        </a>
      </div>

      <button
        className="sm:hidden"
        onClick={() => {
          setShowMobileMenu(!showMobileMenu);
        }}
      >
        {!showMobileMenu ? (
          <GiHamburgerMenu size={30} />
        ) : (
          <IoMdClose size={30} />
        )}
      </button>

      {showMobileMenu && (
        <ul className="flex flex-col top-[70px] w-[150px] right-0 bg-white p-3 text-black items-end gap-6 absolute">
          <button>Home</button>
          <button onClick={scrollToExperiance}>Experience</button>
          <button onClick={scrollToSkills}>Skills</button>
          <button onClick={scrollToProjects}>Projects</button>
          <button onClick={scrollToContact}>Contact</button>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
