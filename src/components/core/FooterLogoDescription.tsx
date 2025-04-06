import Link from "next/link";
import Image from "next/image";
import { FooterDataProps } from "@/types/types";

export default function FooterLogoDescription({ data }: { data: FooterDataProps }) {
  return (
    <div className="lg:col-span-4">
      <Link href="/" className="inline-block">
        <Image
          src={data.logo.url}
          alt="AppRocket Logo"
          width={180}
          height={50}
          className="h-auto w-auto"
        />
      </Link>
      <p className="mt-4 max-w-xs text-base text-black font-semibold">
        {data.company_description}
      </p>
    </div>
  );
} 