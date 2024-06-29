import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div className="bg-[#050801]">
      <Header />
      <HeroSection />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
}
