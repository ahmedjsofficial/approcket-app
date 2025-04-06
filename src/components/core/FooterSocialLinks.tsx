import Link from "next/link";
import { LinkedinIcon, TwitterIcon, FacebookIcon } from "lucide-react";
import { FooterDataProps } from "@/types/types";

export default function FooterSocialLinks({ data }: { data: FooterDataProps }) {
  return (
    <div className="mt-12 flex space-x-6">
      {data.social_links.map((social, index) => {
        const iconMap: Record<string, React.FC> = {
          facbook: FacebookIcon,
          twitter: TwitterIcon,
          linkedin: LinkedinIcon,
        };

        const Icon = iconMap[social.text.toLowerCase() as keyof typeof iconMap] || null;
        if (!Icon) return null;

        return (
          <Link
            key={index}
            href={social.url}
            className="text-black hover:text-black"
            aria-label={`${social.text} link`}
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
} 