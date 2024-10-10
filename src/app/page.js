"use client";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import CareerSection from "./sections/CareerSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";
import Loader from './Loader';
import { useState } from "react";

export default function Home()  {
  const [theme, setTheme] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimatedEnd = () => {
    setIsLoading(false);
  }

  return (
    <div className="w-full">
      {isLoading && (
        <Loader onAnimationEnd={handleAnimatedEnd} />
      )}
      <HeroSection theme={theme} setTheme={setTheme}/>
      <AboutSection />
      <ServicesSection />
      <CareerSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
