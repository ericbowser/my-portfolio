import { SECTION_IDS } from "../data/navigation";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { C } from "../theme/colors";
import Footer from "./layout/Footer";
import GlobalStyles from "./layout/GlobalStyles";
import Nav from "./layout/Nav";
import SparkleBackground from "./layout/SparkleBackground";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";

export default function Portfolio() {
  const { active, scrollTo } = useScrollSpy(SECTION_IDS);

  return (
    <div style={{
      background: C.void,
      color: C.text,
      margin: 0,
      padding: 0,
      overflowX: "hidden",
      position: "relative",
      minHeight: "100vh",
    }}>
      <GlobalStyles />
      <SparkleBackground />
      <Nav active={active} onNav={scrollTo} />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
