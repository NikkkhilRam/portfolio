import React from "react";
import { FaJava } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { SiCloudinary } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io5";

function Skills() {
  return (
    <div className="text-white w-full items-center justify-center flex flex-col my-56">
      <p className="text-[40px]">Skills</p>

      <p>
        Using a combination of cutting-edge technologies and reliable
        open-source software I build user-focused, performant apps and websites
        for smartphones, tablets, and desktops.
      </p>
      <div className="sm:mx-44 sm:mt-10 mt-4 ">
        <div className="w-full flex flex-wrap gap-4 text-lg justify-center">
          <div className="flex items-center gap-1 text-black bg-white p-1 ">
            <FaJava color="black" size={28} title="Java" />
            <p>Java</p>
          </div>
          <div className="flex items-center gap-1 text-black bg-white p-1 ">
            <IoLogoJavascript color="black" size={28} title="Java" />
            <p>Java Script</p>
          </div>
          <div className="flex items-center gap-1 text-black bg-white p-1 ">
            <SiTypescript color="black" size={28} title="Java" />
            <p>Type Script</p>
          </div>
          <div className="flex items-center gap-1 text-black bg-white p-1 ">
            <SiPython color="black" size={28} title="Java" />
            <p>Python</p>
          </div>
          <div className="flex items-center gap-1 text-black bg-white p-1 ">
            <BiLogoSpringBoot color="black" size={28} title="Java" />
            <p>Spring Boot</p>
          </div>
          <div className="flex items-center gap-1 text-black bg-white p-1 ">
            <FaReact color="black" size={28} title="Java" />
            <p>ReactJs</p>
          </div>
          <div className="flex items-center gap-1 text-black bg-white p-1 ">
            <SiFlutter color="black" size={28} title="Java" />
            <p>Flutter</p>
          </div>
          <div className="flex items-center gap-1 text-black bg-white p-1 ">
            <RiTailwindCssFill color="black" size={28} title="Java" />
            <p>TailwindCSS</p>
          </div>

          <div className="flex items-center gap-1 text-black bg-white p-1 ">
            <GrMysql color="black" size={28} title="Java" />
            <p>MySQL</p>
          </div>
          <div className="flex items-center gap-1 text-black bg-white p-1 ">
            <SiPostman color="black" size={28} title="Java" />
            <p>Postman</p>
          </div>
          <div className="flex items-center gap-1 text-black bg-white p-1 ">
            <FaDocker color="black" size={28} title="Java" />
            <p>Docker</p>
          </div>
          <div className="flex items-center gap-1 text-black bg-white p-1 ">
            <FaGithub color="black" size={28} title="Java" />
            <p>GitHub</p>
          </div>
          <div className="flex items-center gap-1 text-black bg-white p-1 ">
            <SiRedux color="black" size={28} title="Java" />
            <p>Redux</p>
          </div>
          <div className="flex items-center gap-1 text-black bg-white p-1 ">
            <TbBrandReactNative color="black" size={28} title="Java" />
            <p>React Native</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          <p className="bg-white text-black px-2 py-1">HTML</p>
          <p className="bg-white text-black px-2 py-1">CSS</p>
          <p className="bg-white text-black px-2 py-1">GitHub Actions</p>
          <p className="bg-white text-black px-2 py-1">Data Structures & Algorithms</p>
          <p className="bg-white text-black px-2 py-1">System Design</p>
          <p className="bg-white text-black px-2 py-1">Database Management System</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
