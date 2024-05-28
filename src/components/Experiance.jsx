import React from "react";
import app from "../assets/app.jpg";
import app2 from "../assets/app2.jpg";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

import { IoUnlink } from "react-icons/io5";

function Experiance() {
  return (
    <div className="text-white w-full items-center justify-center flex flex-col my-44 ">
      <p className="text-[40px]">Experience</p>
      <div className="mt-12 sm:flex gap-4 px-20  ">
        <img src={app} alt="" className="w-52  rounded-lg shadow-white sm:m-0 mb-10" />

        <img src={app2} alt="" className="sm:flex hidden w-52  rounded-lg shadow-white" />
        <div className="flex flex-col justify-between ">
          <div>
            <strong >EDUKEMY ( Jun 2023 - Present )</strong>
            <p className="text-lg mt-2">
              As an Associate Software Developer at <strong>Edukemy</strong>, I
              excel in leveraging Flutter to drive mobile application
              development. With a year of hands-on experience, I've
              independently managed the development and deployment of our
              in-house Android application, showcasing both my rapid learning
              capabilities and my ability to thrive in a self-directed role.
            </p>

            <div className="mt-12 flex gap-8">
              <RiFlutterFill color="white" size={44} />
              <IoLogoGooglePlaystore color="white" size={44} />
              <FaGithub color="white" size={44} />
            </div>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.edukemy.app&pcampaignid=web_share"
            className="sm:mt-0 mt-4 w-min text-right justify-end bg-white text-black px-4 py-2 rounded-full text-xl flex items-center gap-2"
          >
            Link
            <IoUnlink />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Experiance;
