import React from "react";

function ProjectCard({ imageSrc, title, desc, link }) {
  return (
    <div className="flex sn:mb-0 mb-6 flex-col gap-6 items-start p-4 border sm:w-[450px] rounded-lg">
      <img src={imageSrc} alt="" />
      <a href={link} className="text-xl underline font-bold">
        {title}
      </a>
      <p>{desc}</p>
    </div>
  );
}

export default ProjectCard;
