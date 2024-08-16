export const metadata = {
  title: "Gainify",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import Loader from "@/components/loader";
import Services from "@/components/Services";
import Elevation from "@/components/Elevation";
import Plans from "@/components/plans";
import Reviews from "@/components/reviews";
import Exceptional from "@/components/exceptional";
import Blogs from "@/components/blogs";

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Reviews />
      <Services />
      <Plans />
      <Exceptional />
      <Features />
      <Testimonials />
      <Elevation />
      <Blogs />
      
      <Loader />
    </>
  );
}
