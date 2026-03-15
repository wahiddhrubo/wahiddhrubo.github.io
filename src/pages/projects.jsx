import React, { use, useState } from "react";
import { projects, name } from "../data/profile.json";
import {
  BsArrowLeft,
  BsArrowRight,
  BsBoxArrowUpLeft,
  BsBoxArrowUpRight,
} from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import ReactMarkDown from "react-markdown";

export default function ProjectsPage() {
  const { projectId } = useParams();

  // Find the index of the current project
  const index = projects.findIndex((p) => p.id === projectId);

  // Get next and previous projects safely
  const nextProject =
    index !== -1 && index < projects.length - 1 ? projects[index + 1] : null;

  const prevProject = index > 0 ? projects[index - 1] : null;

  const project = projects.filter((p) => p.id === projectId)[0];

  const sections = [
    {
      id: "summary",
      name: "Summary",
    },
    {
      id: "motivations",
      name: "Motivations",
    },
    {
      id: "links",
      name: "Links",
    },
    {
      id: "preview",
      name: "Previews",
    },
  ];

  return (
    <>
      <div className="fixed md:flex hidden flex-col space-y-4 top-1/2 left-5 w-fit shadow-2xl -translate-y-1/2 p-6  border border-primary ">
        {sections.map((section) => (
          <a
            className=" hover:text-primary font-semibold text-lg "
            href={`#${section.id}`}
          >
            {section.name}
          </a>
        ))}
      </div>
      <div className="lg:p-20 p-10 pt-44 lg:w-3/4 space-y-8 mx-auto">
        <div>
          <Link
            to={"/"}
            className="rounded-full border-1 lg:w-24 w-12  flex items-center justify-center mb-16 lg:h-24 h-12  shadow-lg hover:shadow-xl hover:border-primary hover:text-primary "
          >
            <BsArrowLeft className="lg:text-5xl text-2xl" />
          </Link>
          <img className="w-full h-fit " src={`/images/${project.thumbnail}`} />
          <div className="md:text-3xl text-lg font-bold italic my-8 ">
            {project?.name}
          </div>
          <div className=" text-primary flex gap-5 font-bold my-4 lg:text-base">
            {" "}
            Publised in {project?.venue}
          </div>
        </div>
        <div>
          <div className="italic lg:text-lg flex flex-wrap gap-2">
            Skills : {project?.skills}
          </div>
          <div></div>
        </div>
        <div>
          <div id="summary" className="lg:text-lg text-base font-semibold">
            Summary
          </div>
          <div className="text-justify leading-loose">
            <ReactMarkDown>{project?.description}</ReactMarkDown>
          </div>

          <div id="motivations" className="text-lg my-8 font-semibold">
            Motivations
          </div>
          <ul className="text-justify leading-loose ">
            {project.motivations.map((motivation) => (
              <li> {motivation} </li>
            ))}
          </ul>
          <div id="links" className="flex flex-wrap justify-between">
            <a
              href={project?.paperLink}
              className="flex gap-5 w-fit hover:text-primary mr-auto my-10"
              target="_blank"
            >
              View Paper <BsBoxArrowUpRight size={24} />
            </a>
            <a
              href={project?.link}
              className="flex gap-5 w-fit hover:text-primary ml-auto my-10"
              target="_blank"
            >
              View Project <BsBoxArrowUpRight size={24} />
            </a>
          </div>
        </div>
        <div className=" flex justify-between ">
          {prevProject && (
            <Link
              to={`/projects/${prevProject?.id}`}
              className=" hover:text-primary mr-auto hover:-translate-x-5 hover:ease-in-out hover:duration-150 flex items-center gap-2 w-1/3"
            >
              <BsArrowLeft size={48} />
              <div>
                {prevProject?.name} <br />
                <p className="text-gray-500">{prevProject?.venue}</p>
              </div>
            </Link>
          )}
          {nextProject && (
            <Link
              to={`/projects/${nextProject?.id}`}
              className=" hover:text-primary hover:translate-x-5 ml-auto hover:ease-in-out hover:duration-150 flex items-center gap-2 w-1/3"
            >
              <div className="">
                {nextProject?.name} <br />
                <p className="text-gray-500">{nextProject?.venue}</p>
              </div>
              <BsArrowRight size={48} className="" />
            </Link>
          )}
        </div>
        <div id="preview">
          {project.images.length > 0 &&
            project.images.map((p) => (
              <>
                <img
                  src={`/images/${p}`}
                  className=" w-3/4 mx-auto h-fit rounded-lg "
                />{" "}
              </>
            ))}
        </div>
      </div>
    </>
  );
}
