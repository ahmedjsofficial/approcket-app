import FooterNavigation from "./core/FooterNavigation";
import FooterLogoDescription from "./core/FooterLogoDescription";
import FooterSocialLinks from "./core/FooterSocialLinks";
import FooterBottomSection from "./core/FooterBottomSection";
import { getData } from "@/api/api";

export default async function Footer() {
  const footerData = await getData("footer");
  const data = footerData?.data?.blocks[0];

  return (
    <footer className="w-full bg-[#f3eae7] py-12 md:py-16">
      <div className="app-container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <FooterLogoDescription data={data} />
          <FooterNavigation data={data} />
        </div>
        <FooterSocialLinks data={data} />
        <FooterBottomSection data={data} />
      </div>
    </footer>
  );
}
