import { ContactUs } from "@/components/ContactForm";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <div className="bg-[#050801]">
      <Header />
      <HeroSection />
      <Experiences />
      <Projects />
      <Skills />
      <ContactUs />
      <Footer />
    </div>
  );
}
