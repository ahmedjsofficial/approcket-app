"use client";

import type { PortfolioDataProps } from "@/types/types";
import { useState, useEffect } from "react";
import Project from "./core/Project";
import LinkComponent from "./core/LinkComponent";
import Title from "./core/Title";

interface WorkDataProps {
  data: PortfolioDataProps;
}

export default function OurWork({ data }: WorkDataProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container py-12 px-4 md:px-6 lg:px-8">
      <Title title={data.title} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
        {data.portfolio.map((project, index) => {
          let colSpan = "lg:col-span-12";
          let rowSpan = "lg:row-span-1";
          let height = isMobile ? "45vh" : "40vh";

          if (index === 0) {
            colSpan = "lg:col-span-7";
            rowSpan = "lg:row-span-2";
            height = isMobile ? "35vh" : "100%";
          } else if (index === 1) {
            colSpan = "lg:col-span-5";
            height = isMobile ? "35vh" : "40vh";
          } else if (index === 2) {
            colSpan = "lg:col-span-5";
            height = isMobile ? "35vh" : "40vh";
          } else if (index === 3) {
            colSpan = "lg:col-span-6";
            height = isMobile ? "35vh" : "40vh";
          } else if (index === 4) {
            colSpan = "lg:col-span-6";
            height = isMobile ? "35vh" : "40vh";
          }

          return (
            <Project
              key={index}
              colSpan={colSpan}
              rowSpan={rowSpan}
              height={height}
              cover_image={project.cover_image}
              title={project.title}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-center mt-10">
        <LinkComponent link={data.button} sx={"px-14 md:px-20 py-1.5 md:py-1.5"} />
      </div>
    </div>
  );
}
