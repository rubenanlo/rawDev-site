import Introduction from "components/homepage/Introduction";
import Transparency from "components/homepage/Transparency";
import Integrity from "components/homepage/Integrity";
import Collaboration from "components/homepage/Collaboration";

const Homepage = () => {
  return (
    <div className="h-screen">
      <Introduction />
      <Integrity />
      <Transparency />
      <Collaboration />
    </div>
  );
};

export default Homepage;
