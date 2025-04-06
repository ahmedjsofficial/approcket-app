import Link from "next/link";
import { FooterDataProps } from "@/types/types";

export default function FooterNavigation({ data }: { data: FooterDataProps }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-12 lg:col-span-8">
      {data.footer_column.map((column, index) => (
        <div key={index} className="space-y-3">
          <h3 className="text-lg font-semibold text-black">{column.title}</h3>
          <ul className="space-y-2">
            {column.footer_links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  href={link.url}
                  className="text-black hover:text-black transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
} 