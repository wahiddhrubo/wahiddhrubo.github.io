import { GraduationCap, LinkIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { publications } from "../data/profile.json";

export default function ResearchPapers() {
  const papers = publications.sort(
    (a, b) => new Date(b?.publishDate) - new Date(a?.publishDate),
  );
  const types = [...new Set(papers.map((p) => p.type))];
  return (
    <div className="">
      <div className=" text-2xl font-bold items-center flex gap-5">
        <div className="hover:scale-125 hover:ease-linear hover:duration-200  w-12 flex items-center justify-center h-12 rounded-full bg-[#2b80ff4b] ">
          <GraduationCap className="text-primary  text-12" size={24} />
        </div>
        Publications
      </div>

      {types.map((t, index) => (
        <div className=" my-10 ">
          <div className="lg:text-xl text-base italic ">{t}</div>
          {papers
            .filter((p) => p.type === t)
            .map((paper, index) => (
              <div className={` my-4 ${paper?.featured && "featured-paper"}`}>
                <Link
                  to={`/papers/${paper.id}`}
                  className="underline flex gap-4 items-center font-semibold  dark:text-white  hover:text-primary lg:text-lg text-base italic"
                >
                  {paper.title}
                  <LinkIcon size={20} className="hidden lg:block" />
                </Link>
                <div className=" dark:text-white  my-2 font-bold text-base">
                  {paper.venue}
                </div>
                {paper.type !== "In Review" && (
                  <div className="text-sm text-gray-400">
                    Published On {paper.publishDate}
                  </div>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
