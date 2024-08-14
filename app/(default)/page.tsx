export const metadata = {
  title: "Gainify",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import Loader from "@/components/loader";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Services />
      <Features />
      <Testimonials />
      <Newsletter />
      <Loader />
    </>
  );
}
