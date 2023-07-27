import Introduction from "components/homepage/Introduction";
import Transparency from "components/homepage/Transparency";
import Integrity from "components/homepage/Integrity";
import Collaboration from "components/homepage/Collaboration";
import AppLayoutWithNavbar from "layouts/AppLayoutWithNavbar";
import { images } from "static/homepage/INTRODUCTION";
import { data } from "static/homepage/TRANSPARENCY";
import { sections } from "static/homepage/COLLABORATION";

const Homepage = () => {
  console.log("🚀 ~ file: index.js:8 ~ data:", data);

  return (
    <AppLayoutWithNavbar>
      <Introduction images={images} />
      <Integrity />
      <Transparency data={data} />
      <Collaboration sections={sections} />
    </AppLayoutWithNavbar>
  );
};

export default Homepage;
