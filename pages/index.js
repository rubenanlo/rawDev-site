import Introduction from "components/homepage/Introduction";
import Transparency from "components/homepage/Transparency";
import Integrity from "components/homepage/Integrity";
import Collaboration from "components/homepage/Collaboration";
import AppLayoutWithNavbar from "layouts/AppLayoutWithNavbar";

const Homepage = () => (
  <AppLayoutWithNavbar>
    <Introduction />
    <Integrity />
    <Transparency />
    <Collaboration />
  </AppLayoutWithNavbar>
);

export default Homepage;
