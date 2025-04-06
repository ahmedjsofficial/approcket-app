import Link from "next/link";
import { FooterDataProps } from "@/types/types";

export default function FooterBottomSection({ data }: { data: FooterDataProps }) {
  const date = new Date().getFullYear().toString();
  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-sm text-black">&copy; {date} {data.copyright}</span>
          <span className="hidden md:inline text-black">|</span>
          {data.legal_links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              className="text-sm text-black hover:text-black"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-4 md:space-y-0">
          {data.contact_info.map((contact, index) => (
            <Link
              key={index}
              href={contact.url}
              target="_blank"
              className="text-sm text-black hover:text-black"
            >
              {contact.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 