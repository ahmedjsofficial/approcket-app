import { getData } from "@/api/api";
import Awards from "@/components/Awards";
import Blogs from "@/components/Blogs";
import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import OurExperts from "@/components/OurExperts";
import OurWork from "@/components/OurWork";
import Testimonials from "@/components/Testimonials";


export default async function Home() {
  const { data } = await getData("home");  
  return (
    <div className="grid items-center gap-16 md:gap-20 lg:gap-24 xl:gap-28 mt-7">
      <Hero data={data?.blocks[0]} />
      <Brands data={data?.blocks[1]} />
      <OurWork data={data?.blocks[2]} />
      <OurExperts data={data?.blocks[3]} />
      <Testimonials data={data?.blocks[4]} />
      <Blogs data={data?.blocks[5]} />
      <Awards data={data?.blocks[6]} />
      <Newsletter data={data?.blocks[7]} />
    </div>
  );
}
