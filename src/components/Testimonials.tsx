import { TestimonialDataProps } from "@/types/types";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  data: TestimonialDataProps;
}

export default function Testimonials({ data }: TestimonialProps) {
  return (
    <div className="app-container">
      <div className="grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {data?.testimonial?.map((v, i) => (
          <div
            className="grid items-center gap-5 h-full justify-items-start"
            key={i}
          >
            <div className={"flex items-center"}>
              <Image
                src={v.image?.url}
                alt="brand/image"
                width={1000}
                height={500}
                className={cn(
                  "w-full object-contain",
                  i === 0 ? "h-[15px] md:h-[20px]" : "h-[20px] md:h-[30px]"
                )}
              />
            </div>
            <div className="flex items-center">
              <p className="text-sm text-black font-normal">{v?.text}</p>
            </div>
            <div className="flex items-center gap-5 mt-4">
              <div
                className={cn(
                  "flex items-center rounded-tl-full rounded-tr-full overflow-hidden",
                  i === 1 ? "w-22 h-14" : "w-14 h-14"
                )}
              >
                <Image
                  src={v.Team.avatar.url}
                  alt="avatar/img"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
              <div className="grid items-center gap-1">
                <h1 className="text-base font-bold text-black">{v.Team.name}</h1>
                <p className="text-sm font-normal text-black">{v.Team.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
