import Introduction from "components/homepage/Introduction";
import Transparency from "components/homepage/Transparency";
import Integrity from "components/homepage/Integrity";
import CollabInnovExpert from "components/homepage/CollabInnovExpert";
import AppLayoutWithNavbar from "layouts/AppLayoutWithNavbar";
import ProjectCarousel from "components/homepage/ProjectsCarousel";

const Homepage = () => {
  return (
    <AppLayoutWithNavbar>
      <Introduction />
      <Integrity />
      <Transparency />
      <CollabInnovExpert />
      <ProjectCarousel />
    </AppLayoutWithNavbar>
  );
};

export default Homepage;
