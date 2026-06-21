import { usePageSEO } from "../hooks/usePageSEO";
import { useNavigateToContact } from "../hooks/useNavigateToContact";
import { ABOUT_SEO } from "../data/aboutData";
import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import WhatWeDo from "../components/about/WhatWeDo";
import WhyChooseUs from "../components/about/WhyChooseUs";
import AboutProcess from "../components/about/AboutProcess";
import TechnologiesGrid from "../components/about/TechnologiesGrid";
import AboutCTA from "../components/about/AboutCTA";

export default function AboutPage() {
  usePageSEO(ABOUT_SEO);
  const navigateToContact = useNavigateToContact();

  return (
    <main className="overflow-x-hidden">
      <AboutHero onStartProject={navigateToContact} />
      <OurStory theme="light" />
      <WhatWeDo theme="dark" />
      <WhyChooseUs theme="light" />
      <AboutProcess theme="dark" />
      <TechnologiesGrid theme="light" />
      <AboutCTA onStartProject={navigateToContact} theme="dark" />
    </main>
  );
}
