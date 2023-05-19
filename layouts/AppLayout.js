import { observer } from "mobx-react-lite";
import NavBar from "components/NavBar";

const AppLayout = observer(({ fluid = false, children }) => (
  <>
    <NavBar fluid={fluid} />
    {children}
  </>
));

export default AppLayout;
