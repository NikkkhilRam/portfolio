import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { ReactTyped } from "react-typed";

function AboutMe({ scrollToContact }) {
  return (
    <div className="flex flex-col w-full items-center mx-auto text-white justify-center sm:my-56 my-36">
      <p className="sm:text-[80px] text-[50px] mb-10">
        <ReactTyped strings={["NIKHIL RAMESH"]} typeSpeed={100} loopCount={2} />
      </p>

      <p className="w-1/2 text-center text-lg">
        Passionate full-stack developer with expertise in mobile and web
        development, driven by a relentless pursuit of learning and innovation
      </p>

      <div className="flex mt-10 items-center gap-10">
        <a
          target="_blank"
          href="https://docs.google.com/document/d/1T6I7z5AzmRVfpqFNnIEoFt5dPlVVSEOS/edit?usp=sharing&ouid=117315211031372316348&rtpof=true&sd=true"
        >
          <button className=" bg-white text-black px-4 py-2 rounded-full text-xl flex items-center gap-2">
            Resume
            <MdArrowOutward />
          </button>
        </a>
        <button
          onClick={scrollToContact}
          className=" border text-white px-4 py-2 rounded-full text-xl flex items-center gap-2"
        >
          Contact
          <MdArrowOutward />
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
