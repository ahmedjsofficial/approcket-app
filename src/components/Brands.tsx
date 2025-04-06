import { BrandDataProps } from "@/types/types";
import Image from "next/image";

interface BrandsProps {
  data: BrandDataProps;
}
export default function Brands({ data }: BrandsProps) {
  return (
    <div className="app-container 2xl:w-7/12 grid items-center gap-16 md:gap-20">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-start justify-items-start">
        {data?.brands?.map((v, i) => (
          <div className="grid items-center" key={i}>
            <Image
              src={v?.brand_image?.url}
              alt="bran/img"
              className="w-full h-[25px] md:h-[35px] object-contain"
              width={1000}
              height={500}
            />
          </div>
        ))}
      </div>
      <div className="grid items-center justify-items-center text-center">
        <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold max-w-none lg:max-w-4xl">
          {data?.title}
        </h1>
      </div>
    </div>
  );
}
