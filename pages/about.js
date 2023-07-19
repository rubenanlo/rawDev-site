import { useRef } from "react";
import { useInView } from "framer-motion";
import AboutNavbar from "components/about/AboutNavbar";
import BriefBio from "components/about/BriefBio";
import ProjectCarousel from "components/about/ProjectsCarousel";
import Experience from "components/about/experience/Experience";
import AppLayoutWithNavbar from "layouts/AppLayoutWithNavbar";
import Contact from "components/about/Contact";
import { getProjects } from "helpers/getProjects";
import { getExperienceTimeline } from "helpers/getExperienceTimeline";

const About = ({ projects, experience }) => {
  const ref = {
    bio: useRef(null),
    experience: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  const isInView = {
    bio: useInView(ref.bio),
    experience: useInView(ref.experience),
    portfolio: useInView(ref.portfolio),
    contact: useInView(ref.contact),
  };

  return (
    <AppLayoutWithNavbar>
      <AboutNavbar isInView={isInView} />
      <BriefBio ref={ref.bio} />
      <Experience ref={ref.experience} experience={experience} />
      <ProjectCarousel ref={ref.portfolio} projects={projects} />
      <Contact ref={ref.contact} />
    </AppLayoutWithNavbar>
  );
};

export const getStaticProps = async () => ({
  props: {
    projects: getProjects(),
    experience: { timeline: getExperienceTimeline() },
  },
});

export default About;
