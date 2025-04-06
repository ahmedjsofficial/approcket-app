import Image from "next/image";

interface ProjectProps {
  colSpan: string;
  rowSpan: string;
  height: string;
  cover_image: {
    url: string;
  };
  title: string;
}

export default function Project({
  colSpan,
  rowSpan,
  height,
  cover_image,
  title,
}: ProjectProps) {
  return (
    <div
      className={`relative overflow-hidden ${colSpan} ${rowSpan} transition-transform hover:scale-[1.02]`}
    >
      <div className="relative w-full h-full" style={{ height }}>
        <Image
          src={cover_image.url || "/placeholder.svg"}
          alt={title || "Portfolio project"}
          className="object-cover w-full h-full"
          width={1100}
          height={550}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="absolute top-0 p-6 flex flex-col justify-end">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
