import coinPulseX from "../assets/coinpulseX.png";
import wordleClone from "../assets/wordle-clone.png";
import wca from "../assets/wca.png"

import geminiGourmet from "../assets/geminiGourmet.png";
import bitbrew from "../assets/bitbrew1.png"



export const PROJECTS = [
  {
    title: "Coin PulseX",
    desc: "Platform for monitoring daily and historical cryptocurrency prices across various exchanges. Utilized the Coingecko API for real-time data integration and binding. Implemented Chakra UI to enhance the visual appeal and ensure compatibility across various screen sizes and also to switch between light and dark modes.",
    link: "https://crypto-pulse-x.vercel.app/coins",
    img: coinPulseX,
  },
  {
    title: "Gemini Gourmet",
    desc: "AI Web application that generates Recipe based on users preference. Also provides youtube videos for the recipe generated using the Youtube Data API v3",
    link: "https://github.com/NikkkhilRam/gemini-gourmet-fe",
    img: geminiGourmet,
  },
  {
    title: "Bit Brew",
    desc: "A simple full stack blogging application which lets user write articles, stories, experiance etc. The Full stack application is built with MERN stack along with Tailwind CSS. ",
    link: "https://github.com/NikkkhilRam/frontend-bitbrew",
    img: bitbrew,
  },
  {
    title: "Wordle Clone",
    desc: "Developed a responsive Wordle clone using React.js and Tailwind CSS, featuring customizable difficulty levels to enhance user engagement. Demonstrated expertise in modern front-end technologies and design principles.",
    link: "https://wordle-clone-jade.vercel.app/",
    img: wordleClone,
  },
  {
    title: "Whatsapp Chat Analyzer - Python Project",
    desc: "A simple web app that lets you upload a whatsapp chat .txt file and gives you various insights of the chat. Some of the insights are Total messages, Most used emoji, Most interacted user, Timeline of interaction etc. ",
    link: "https://nikkkhilram-wca-main-ysjl0c.streamlit.app/",
    img: wca,
  },
 
];
