import React, { use, useState } from "react";
import { publications, name } from "../data/profile.json";
import {
  BsArrowLeft,
  BsArrowRight,
  BsBoxArrowUpLeft,
  BsBoxArrowUpRight,
} from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

export default function PapersPage() {
  const { paperId } = useParams();

  // Sort publications by date (newest first)
  const sortedPublications = publications.sort(
    (a, b) => new Date(a?.publishDate) - new Date(b?.publishDate),
  );

  // Find the index of the current paper
  const index = sortedPublications.findIndex((p) => p.id === paperId);

  // Get next and previous papers safely
  const nextPaper =
    index !== -1 && index < sortedPublications.length - 1
      ? sortedPublications[index + 1]
      : null;

  const prevPaper = index > 0 ? sortedPublications[index - 1] : null;

  const paper = publications.filter(
    (publication) => publication.id === paperId,
  )[0];

  return (
    <div className="lg:p-20 p-10 pt-44 lg:w-3/4 md:space-y-16 space-y-8 mx-auto">
      <div>
        <Link
          to={"/"}
          className="rounded-full border-1 lg:w-24 w-12  flex items-center justify-center mb-16 lg:h-24 h-12  shadow-lg hover:shadow-xl hover:border-primary hover:text-primary "
        >
          <BsArrowLeft className="lg:text-5xl text-2xl" />
        </Link>
        <div className="md:text-3xl text-lg font-bold italic ">
          {paper.title}
        </div>
        <div className=" text-primary flex gap-5 font-semibold my-4 text-base">
          {" "}
          {paper.inReview
            ? "In Review"
            : `Publised on ${paper.publishDate}  (${paper.venue})`}{" "}
        </div>
      </div>
      <div>
        <div className="italic md:text-lg text-xs flex flex-wrap gap-1">
          {paper.authors.split(",").map((auth, index) => {
            const trimmed = auth.trim();
            const isBold = trimmed.toLowerCase() === name.toLowerCase();
            return (
              <span key={index}>
                {isBold ? <b>{trimmed}</b> : trimmed}
                {index < paper.authors.split(",").length - 1 ? ", " : ""}
              </span>
            );
          })}
        </div>

        <div></div>
      </div>
      <div>
        <div className="text-lg font-semibold">Abstract</div>
        <div className="text-justify">{paper.abstract}</div>

        <a
          href={paper.link}
          className="flex gap-5 w-fit hover:text-primary ml-auto my-10"
          target="_blank"
        >
          View Paper <BsBoxArrowUpRight size={24} />
        </a>
      </div>
      <div className=" flex flex-wrap space-y-8 justify-between ">
        {prevPaper && (
          <Link
            to={`/papers/${prevPaper.id}`}
            className=" hover:text-primary text-sm mr-auto hover:-translate-x-5 hover:ease-in-out hover:duration-150 flex items-center gap-2 w-full md:w-1/3"
          >
            <BsArrowLeft size={48} />
            <div>
              {prevPaper.title} <br />
              <p className="text-gray-500">
                {!prevPaper.inReview ? prevPaper.publishDate : "In Review"}{" "}
              </p>
            </div>
          </Link>
        )}
        {nextPaper && (
          <Link
            to={`/papers/${nextPaper.id}`}
            className=" hover:text-primary text-sm hover:translate-x-5 ml-auto hover:ease-in-out hover:duration-150 flex items-center gap-2 w-full md:w-1/3"
          >
            <div className="">
              {nextPaper.title} <br />
              <p className="text-gray-500">
                {!nextPaper.inReview ? nextPaper.publishDate : "In Review"}{" "}
              </p>
            </div>
            <BsArrowRight size={48} className="" />
          </Link>
        )}
      </div>
    </div>
  );
}
