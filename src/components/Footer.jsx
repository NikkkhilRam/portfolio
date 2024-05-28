import React, { useEffect, useRef } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { animateScroll } from "react-scroll";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const amsUrl = import.meta.env.EMAIL_TEMPLATE_ID;

const options = {
  duration: 500,
  smooth: true,
};

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w7s28gi", "template_3s9esi7", form.current, {
        publicKey: "KgTcHJUAA06u5HHrz",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast("Message Sent !!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-white  flex flex-col mt-auto sm:h-[520px] text-black ">
      <div>
        <Toaster />
      </div>
      <p className="text-center text-3xl mt-4 mb-10">Get in touch</p>

      <div className="sm:flex w-full gap-10 px-44 items-start">
        <form
          ref={form}
          action=""
          className="flex flex-col gap-4 items-center justify-center "
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="border rounded-md px-2 py-2 w-96"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="border rounded-md px-2 py-2 w-96"
            />
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              className="border rounded-md px-2 py-2 w-96 h-36"
            />
          </div>
          <button
            onClick={sendEmail}
            className="bg-black text-white min-w px-4 py-2 rounded-full mb-6"
          >
            Submit
          </button>
        </form>

        <div className="flex flex-col gap-10">
          <p>
            For inquiries or opportunities, feel free to reach out via email or
            phone. Let's connect and explore how we can collaborate.
          </p>

          <div>
            <ul className="flex flex-col gap-1">
              <li className="flex items-center gap-2">
                <MdOutlinePhone />
                <a href="tel:+91636121882" className="flex items-center gap-2">
                  <p>+91 636121882</p>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineMail />
                <a
                  className="flex items-center gap-2"
                  href="mailto:thenameisnikil@gmail.com"
                >
                  <p>thenameisnikil@gmail.com</p>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <CiLocationOn />
                <p>Bengaluru, India</p>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-5">
            <a className="cursor-pointer" href="https://github.com/NikkkhilRam">
              <FaGithub size={34} />
            </a>
            <a
              className="cursor-pointer"
              href="https://www.linkedin.com/in/nikhil-rameshh"
            >
              <FaLinkedin size={34} />
            </a>

            <a className="cursor-pointer" href="https://twitter.com/nikkkkkkil">
              <FaXTwitter size={34} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end mr-4 mb-10">
        <button
          onClick={() => {
            animateScroll.scrollToTop(options);
          }}
          className="w-16 h-16 bg-black rounded-full   flex items-center justify-center"
        >
          <MdKeyboardArrowUp color="white" size={34} />
        </button>
      </div>
    </div>
  );
}

export default Footer;
