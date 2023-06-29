import Head from "next/head";
import Dashboard from "components/dashboard/Dashboard";

const Homepage = () => {
  return (
    <>
      <Dashboard />
      <Head>
        <title></title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    </>
  );
};

export default Homepage;
