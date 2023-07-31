import Head from "next/head";
import Dashboard from "components/dashboard/Dashboard";
import AppLayoutWithoutNavbar from "layouts/AppLayoutWithoutNavbar.js";

const UserPage = () => {
  return (
    <AppLayoutWithoutNavbar>
      <Head>
        <title></title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Dashboard />
    </AppLayoutWithoutNavbar>
  );
};

export default UserPage;
