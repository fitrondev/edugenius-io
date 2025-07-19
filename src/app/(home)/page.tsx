import Features from "@/components/layouts/Features";
import Hero from "@/components/layouts/Hero";
import Testimonials from "@/components/layouts/Testimonials";

import Courses from "../../components/layouts/Courses";

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
    </main>
  );
};
export default Home;
