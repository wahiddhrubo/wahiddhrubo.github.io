import {
  Coffee,
  GitBranch,
  Github,
  GraduationCapIcon,
  IdCardIcon,
  Linkedin,
  Mail,
  Stars,
  Twitter,
} from "lucide-react";
import { FaGithub, FaGoogleScholar } from "react-icons/fa6";
import React from "react";
import { FaGit, FaLinkedin, FaOrcid } from "react-icons/fa";
import {
  name,
  emailAddress,
  googleScholarId,
  orcidId,
  gihubProfile,
  linkedinProfile,
  bio,
} from "../data/profile.json";
import { Link } from "react-router-dom";

import ReactMarkDown from "react-markdown";

export default function Hero() {
  const educations = [
    {
      degree: "BSc",
      subject: "Industrial & Production Engeneeering",
      university: "Shahjalal University of Science and Technology",
      start: "March 2020",
      end: "May 2026",
      result: "3.2/4",
    },
    {
      degree: "HSC",
      subject: "Science",
      university: "Notredame College, Dhaka",
      start: "2017 - 2019",
      result: "4.83",
    },
  ];
  const interests = [
    "Agentic AI",
    "Manufacturing Systems",
    "Intelligent Systems",
    "Computer Vision",
    "Graph Neural Network",
    "Robotics",
    "Machine Learning",
    "Large Language Model",
    "Human-Computer/AI Interaction",
    "Deep Learning",
  ];
  return (
    <section className="w-screen relative py-24 flex md:p-20  gap-20   ">
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 bg-gradient-to-br dark:from-primary/20 from-primary/10 via-transparent dark:to-secondary/20 to-secondary/10"></div>
        <div className="absolute top-0 left-1/4 lg:w-96 w-40 lg:h-96 h-40 dark:bg-primary/20 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute delay-[2s] bottom-0 right-1/4 lg:w-96 w-40 lg:h-96 h-40 dark:bg-secondary/20 bg-secondary/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      <div className="flex z-50 py-24    flex-wrap lg:flex-nowrap gap-10  px-10 mx-auto ">
        <div className="space-y-6 lg:w-1/3 w-full">
          <div className="flex items-center space-y-4 gap-4 w-64 h-64 overflow-hidden  rounded-full border-4 border-white ">
            <img
              src="/images/profile.png"
              className="w-80 mx-auto h-80 object-center  object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold  dark:text-white ">{name}</h1>
            <div className="  my-2 bg-gradient-to-t bg-clip-text text-transparent bg-linear-to-r/oklab  from-indigo-500 to-teal-400 text-2xl font-semibold ">
              Research Assistant{" "}
            </div>
            <a
              target="_blank"
              href="https://ciol-researchlab.github.io/"
              className="text-sm  text-gray-400"
            >
              Computational Intelligence and Operations Laboratory (CIOL){" "}
            </a>
            <div className="flex flex-wrap my-4 gap-4 text-gray-300">
              <a
                target="_blank"
                href={`mailto:${emailAddress}`}
                className="hover:scale-125 hover:ease-linear hover:duration-200 shadow-xl  w-12 flex items-center justify-center h-12 rounded-full bg-white dark:bg-primary-bg-dark  "
              >
                <Mail
                  className=" dark:text-white  text-gray-950 text-12 "
                  size={24}
                />
              </a>
              <Link
                target="_blank"
                to={`${googleScholarId}`}
                className="hover:scale-125 hover:ease-linear hover:duration-200 shadow-xl  w-12 flex items-center justify-center h-12 rounded-full bg-white dark:bg-primary-bg-dark  "
              >
                <FaGoogleScholar
                  className=" dark:text-white  text-gray-950 text-12 "
                  size={24}
                />
              </Link>
              <a
                target="_blank"
                href={`${orcidId}`}
                className="hover:scale-125 hover:ease-linear hover:duration-200 shadow-xl  w-12 flex items-center justify-center h-12 rounded-full bg-white dark:bg-primary-bg-dark  "
              >
                <FaOrcid
                  className=" dark:text-white  text-gray-950 text-12 "
                  size={24}
                />
              </a>
              <a
                target="_blank"
                href={`${gihubProfile}`}
                className="hover:scale-125 hover:ease-linear hover:duration-200 shadow-xl  w-12 flex items-center justify-center h-12 rounded-full bg-white dark:bg-primary-bg-dark  "
              >
                <FaGithub
                  className=" dark:text-white  text-gray-950 text-12 "
                  size={24}
                />
              </a>
              <a
                target="_blank"
                href={`${linkedinProfile}`}
                className="hover:scale-125 hover:ease-linear hover:duration-200 shadow-xl  w-12 flex items-center justify-center h-12 rounded-full bg-white dark:bg-primary-bg-dark  "
              >
                <FaLinkedin
                  className=" dark:text-white  text-gray-950 text-12 "
                  size={24}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex  flex-col gap-y-8">
          <div className=" flex gap-5 items-center font-bold text-xl">
            <div className="hover:scale-125 hover:ease-linear hover:duration-200   w-12 flex items-center justify-center h-12 rounded-full shadow-xl dark:bg-[#2b80ff4b] ">
              <IdCardIcon className="text-primary  text-12" size={24} />
            </div>
            Bio
          </div>
          <div className=" dark:text-white max-w-2xl text-justify  leading-loose">
            <ReactMarkDown>{bio.slice(0, 2).join("\n\n")}</ReactMarkDown>
          </div>
          <div className="bg-gradient-to-r hover:scale-125 hover:ease-out hover:duration-150 w-fit rounded-md from-primary to-secondary  py-4 px-16 font-bold  text-white ">
            Download CV
          </div>
          <div className=" flex gap-5 items-center mt-10 font-bold text-xl">
            <div className="hover:scale-125 hover:ease-linear hover:duration-200   w-12 flex items-center justify-center h-12 rounded-full shadow-xl dark:bg-[#2b80ff4b] ">
              <GraduationCapIcon className="text-primary  text-12" size={24} />
            </div>
            Education
          </div>

          <div className="flex items-stretch flex-wrap  gap-4">
            {educations.map((e) => (
              <div className=" flex bg-gradient-to-br  from-white/90 to-blue-50/30 dark:from-primary-bg-dark/90 dark:to-black/20  shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-200 dark:hover:border-primary-800 backdrop-blur-md gap-2  items-center rounded-xl md:w-72 w-full p-5 ">
                <div className="mb-auto w-12 h-12 justify-center items-center  flex rounded-full bg-white dark:bg-primary-bg-dark ">
                  <GraduationCapIcon
                    color="#2b7fff"
                    size={25}
                    className="text-primary"
                  />
                </div>
                <div className=" space-y-2 w-40 mb-auto">
                  <p className="text-lg  dark:text-white ">
                    <strong>
                      {e.degree} - {e.result}
                    </strong>
                  </p>
                  <p className="font-semibold text-sm"> {e.subject}</p>
                  <p className="text-xs leading-normal text-gray-500">
                    {e.university}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex gap-5 mt-10 items-center font-bold text-xl">
            <div className="hover:scale-125 hover:ease-linear hover:duration-200  w-12 flex items-center justify-center h-12 rounded-full shadow-xl dark:bg-[#2b80ff4b] ">
              <Stars className="text-primary  text-12" size={24} />
            </div>
            Interest
          </div>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <div className="p-2 px-4 text-xs md:text-base rounded-full bg-white hover:text-white dark:bg-primary-bg-dark hover:bg-primary">
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
