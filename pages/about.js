import AppLayoutWithNavbar from "layouts/AppLayoutWithNavbar";
import AboutNavbar from "components/about/AboutNavbar";
import BriefBio from "components/about/BriefBio";
import ProjectCarousel from "components/about/ProjectsCarousel";

const About = () => (
  <AppLayoutWithNavbar>
    <AboutNavbar />
    <BriefBio />
    <ProjectCarousel />
  </AppLayoutWithNavbar>
);

export default About;
