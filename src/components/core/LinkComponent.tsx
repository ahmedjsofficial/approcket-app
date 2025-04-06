import Link from "next/link";

export default function LinkComponent({
  link,
  sx
}: {
  link: { url: string; bg_color: string; color: string; text: string; }; sx?: string
}) {
  return (
    <Link
      href={link.url}
      className={`px-7 md:px-10 py-2.5 md:py-3 ${sx && sx} rounded-full text-sm md:text-base`}
      style={{
        backgroundColor: `${link.bg_color}`,
        color: `${link.color}`,
      }}
    >
      {link.text}
    </Link>
  );
}
