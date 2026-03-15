import { NewspaperIcon } from "lucide-react";
import React from "react";
import { projects } from "../data/profile.json";
import { CiDesktop, CiDesktopMouse1 } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <div className=" flex gap-5 items-center font-bold my-8 text-xl">
        <div className="hover:scale-125 hover:ease-linear hover:duration-200  w-12 flex items-center justify-center h-12 rounded-full bg-[#2b80ff4b] ">
          <CiDesktop className="text-primary  text-12" size={24} />
        </div>
        Projects
      </div>
      <div className="flex md:justify-between justify-center flex-wrap">
        {projects.map((project, index) => (
          <Link className="my-10" to={`/projects/${project.id}`}>
            <div
              className={` group lg:w-[285px] w-60  py-8 shadow-xl p-4 rounded-md  border-2 border-primary  ${project?.featured && "featured-project"}`}
            >
              <img
                className="w-60 h-48 mx-auto object-contain"
                src={`/images/${project.thumbnail}`}
              />
              <div className=" flex mb-8 gap-4 items-center font-semibold   group-hover::text-primary text-lg italic">
                {project.name}
              </div>
              <p className=" text-sm  my-4">{project.summary}</p>

              <div className="flex  flex-wrap gap-2">
                {project.skills
                  .split(",")
                  .slice(0, 3)
                  .map((skill) => (
                    <div className="text-sm rounded-full w-fit py-1 px-3 dark:bg-primary bg-primary-bg-dark text-white">
                      {skill}
                    </div>
                  ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
