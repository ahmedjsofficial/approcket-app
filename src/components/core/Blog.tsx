import { BlogTypeProps } from "@/types/types";
import Image from "next/image";

export default function Blog({
  blog_image,
  category_name,
  title,
  text,
}: BlogTypeProps) {
  return (
    <div className="grid items-center gap-5">
      <div className="flex items-center">
        <Image
          src={blog_image.url}
          alt="blog/img"
          className="w-full h-[35vh] object-cover"
          width={1000}
          height={700}
        />
      </div>
      <div className="grid items-center gap-2">
        <h1 className="text-base text-[#f04e30] font-semibold">
          {category_name}
        </h1>
        <h1 className="text-xl text-black font-bold">{title}</h1>
        {text && (
          <p className="text-sm text-gray-600">
            {Math.ceil(text.split(" ").length / 200)} min read
          </p>
        )}
      </div>
    </div>
  );
}
