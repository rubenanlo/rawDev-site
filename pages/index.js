import Introduction from "components/homepage/Introduction";
import Transparency from "components/homepage/Transparency";
import Integrity from "components/homepage/Integrity";
import Test from "components/homepage/Test";
import AppLayoutWithNavbar from "layouts/AppLayoutWithNavbar";

const Homepage = () => {
  return (
    <AppLayoutWithNavbar>
      <Introduction />
      <Integrity />
      <Transparency />
      <Test />
    </AppLayoutWithNavbar>
  );
};

export default Homepage;
