import About from "@/components/layouts/About";
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
      <About />
    </main>
  );
};
export default Home;
