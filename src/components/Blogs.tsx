import { BlogsDataProps } from "@/types/types";
import Image from "next/image";
import Blog from "./core/Blog";
import Title from "./core/Title";

interface BlogsProps {
  data: BlogsDataProps;
}

export default function Blogs({ data }: BlogsProps) {
  return (
    <div className="app-container">
      <Title title={data.title} />

      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12">
        {data.blogs.map((b, i) => (
          <Blog key={i} {...b} />
        ))}
      </div>
    </div>
  );
}
