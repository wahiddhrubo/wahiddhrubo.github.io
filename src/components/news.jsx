import { NewspaperIcon } from "lucide-react";
import React from "react";
import { publications, news } from "../data/profile.json";

export default function News() {
  const paperNews = publications
    .filter((p) => p.featured & (p.type !== "In Review"))
    .map((p) => {
      return {
        news: `Our Paper titled ${p.title} got Accepted in ${p.venue} !!!`,
        date: p.publishDate,
      };
    });

  const newsList = [...news, ...paperNews];

  return (
    <div>
      <div className=" flex gap-5 items-center font-bold my-8 text-xl">
        <div className="hover:scale-125 hover:ease-linear hover:duration-200  w-12 flex items-center justify-center h-12 rounded-full bg-[#2b80ff4b] ">
          <NewspaperIcon className="text-primary  text-12" size={24} />
        </div>
        News and Updates
      </div>
      <div>
        {newsList.map((news) => (
          <>
            <div className="my-6  md:text-base text-justify  dark:text-white ">
              <strong className="text-primary  ">{news.date} </strong> :{" "}
              {news.news}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
