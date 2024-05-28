import React from "react";
import coinpulseX from "../assets/coinpulseX.png";
import { PROJECTS } from "../utils/projectList";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="text-white w-full  flex flex-col my-44 p-4">
      <p className="text-[40px] text-center mb-16">Projects</p>
      <div className="flex flex-wrap  justify-between gap-3">
        {PROJECTS.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              desc={project.desc}
              imageSrc={project.img}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
