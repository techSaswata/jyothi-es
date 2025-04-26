import HeroSection from "./childcomp/herosection";
import StatSection from "@/app/childcomp/statssection";
import ServiceSection from "@/app/childcomp/servicesection";
import SolutionSection from "@/app/childcomp/solutionsection";
import About from "@/app/childcomp/about";
import Contact from "@/app/childcomp/contact";
import Footer from "@/app/childcomp/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="bg-white">
        <About id="about-section" className="" />
      </div>
      <ServiceSection />
      <Contact />
    </>
  );
}
