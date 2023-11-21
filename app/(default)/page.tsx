export const metadata = {
  title: "Home",
  description: "Home Page",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/messageus";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  );
}
