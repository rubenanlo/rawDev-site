import AppLayoutWithNavbar from "layouts/AppLayoutWithNavbar";
import AboutNavbar from "components/about/AboutNavbar";
import BriefBio from "components/about/BriefBio";
import ProjectCarousel from "components/about/ProjectsCarousel";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = {
    bio: useRef(null),
    experience: useRef(null),
    portfolio: useRef(null),
  };

  const isInView = {
    bio: useInView(ref.bio),
    experience: useInView(ref.experience),
    portfolio: useInView(ref.portfolio),
  };
  return (
    <AppLayoutWithNavbar>
      <AboutNavbar isInView={isInView} />
      <BriefBio ref={ref.bio} />
      <ProjectCarousel ref={ref.portfolio} />
    </AppLayoutWithNavbar>
  );
};

export default About;
