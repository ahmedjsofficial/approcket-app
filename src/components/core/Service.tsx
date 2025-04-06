import { cn } from "@/lib/utils";

export default function Service({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      className={cn(
        "flex-1 flex flex-col justify-center p-6 md:p-8 lg:p-12 transition-all duration-500 cursor-pointer hover:bg-[#f04e30] bg-black hover:flex-[1.5]"
      )}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        {title}
      </h2>
      <p className="text-sm text-white/90 max-w-3xl">{text}</p>
    </div>
  );
}
