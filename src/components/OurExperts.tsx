"use client";

import Image from "next/image";
import { ExpertDataProps } from "@/types/types";
import Service from "./core/Service";

interface ExperProps {
  data: ExpertDataProps;
}

export default function OurExperts({ data }: ExperProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-auto">
      <div className="relative overflow-hidden pt-12 md:pt-0">
        <div className="absolute inset-0 bg-black md:bg-black/60 z-10" />
        <Image
          src={data.image.url}
          alt="Person holding smartphone"
          fill
          className="object-cover hidden md:flex"
          priority
        />
        <div className="relative z-20 flex flex-col items-end h-full p-6 md:pt-28 md:pr-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-none md:max-w-xl text-white">
            {data.title}
          </h1>
          <p className="text-sm md:text-base max-w-none md:max-w-xl opacity-90 text-white">
            {data.short_text}
          </p>
        </div>
      </div>
      <div className="flex flex-col pb-12 md:pb-0 bg-black">
        {data.services.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
