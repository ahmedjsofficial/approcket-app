import { NewsletterDataProps } from "@/types/types";
import LinkComponent from "./core/LinkComponent";

interface NewsletterProps {
  data: NewsletterDataProps;
}

export default function Newsletter({ data }: NewsletterProps) {
  return (
    <section className="w-full bg-[#0a0e29] py-20">
      <div className="app-container flex flex-col lg:flex-row items-center lg:justify-between justify-center gap-12 md:gap-0">
        <div className="max-w-xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            {data.title}
          </h2>
          <p className="text-lg text-white/90">{data.text}</p>
        </div>
        <div className="mt-6 md:mt-0">
          <LinkComponent link={data.button} sx={"px-12 py-2.5 md:py-3"} />
        </div>
      </div>
    </section>
  );
}
