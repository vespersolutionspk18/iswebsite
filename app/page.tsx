
import Hero from "./Hero";

import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ProgramsToElevate from "./ProgramsToElevate";
import Faqsection from "./FaqSection";
import GetinTouchSection from "./GetInTouchSection";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />

    <AboutSection />
    <ServicesSection />
    <ProgramsToElevate  />
    <Faqsection />
    <GetinTouchSection />
    <Footer   />
    </>
  );
}
