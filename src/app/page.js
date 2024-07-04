"use client";
import { ContactUs } from "@/components/ContactForm";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-[#050801]">
      {loading ? (
        <Loader
          text="Please wait while we process your request"
          duration={3000}
        />
      ) : (
        <>
          <Header />
          <HeroSection />
          <Skills />
          <Experiences />
          <Projects />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
}
