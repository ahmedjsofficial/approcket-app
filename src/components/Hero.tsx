import { HeroDataProps } from "@/types/types";
import LinkComponent from "./core/LinkComponent";

interface DataProps {
  data: HeroDataProps;
}

export default function Hero({ data }: DataProps) {
  return (
    <div className="flex flex-col w-auto h-auto">
      <div className="app-container grid items-center gap-12">
        <div className="grid items-center gap-7">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl">
            {data.title}
          </h1>
          <p className="text-base font-normal">{data.short_text}</p>
        </div>
        <div className="flex items-center">
          <LinkComponent link={data.link} />
        </div>
        <div className="flex items-center">
          <video
            className="w-full object-cover h-[45vh]"
            loop
            muted
            playsInline
            autoPlay
            preload="none"
          >
            <source src={data.cover_video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
