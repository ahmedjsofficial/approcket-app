import { AwardsDataProps } from "@/types/types";
import Image from "next/image";
import Title from "./core/Title";

interface AwardsProps {
  data: AwardsDataProps;
}

export default function Awards({ data }: AwardsProps) {
  return (
    <div className="app-container 2xl:w-7/12">
      <div className="flex items-center justify-center">
      <Title title={data.title} />
      </div>
      <div className="flex items-center flex-wrap gap-8 md:gap-12 lg:gap-16 justify-center">
        {data.awards.map((a, i) => (
          <div className="grid items-center" key={i}>
            <Image
              src={a.brand_image.url}
              alt="award/img"
              width={1000}
              height={1000}
              className="w-full h-[15vh]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
