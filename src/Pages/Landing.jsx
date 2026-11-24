import SectionIndex from "../components/SectionIndex";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import WhoIAm from "../sections/WhoIAm";
import WhatIDo from "../sections/WhatIDo";
import Philosophy from "../sections/Philosophy";
import Ecosystem from "../sections/Ecosystem";
import SelectedWork from "../sections/SelectedWork";
import Experience from "../sections/Experience";
import CurrentFocus from "../sections/CurrentFocus";
import WhyMe from "../sections/WhyMe";
import LetsTalk from "../sections/LetsTalk";

export default function Landing() {
  return (
    <>
      <SectionIndex />
      <Hero />
      <Ticker
        items={[
          "Software Engineer",
          "Full Stack Developer",
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "MongoDB",
          "PostgreSQL",
        ]}
      />
      <WhoIAm />
      <WhatIDo />
      <Philosophy />
      <Ecosystem />
      <SelectedWork />
      <Experience />
      <CurrentFocus />
      <WhyMe />
      <LetsTalk />
      {/* <Footer /> */}
    </>
  );
}
