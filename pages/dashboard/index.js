import Head from "next/head";
import { getProviders } from "next-auth/react";
import Dashboard from "components/dashboard/Dashboard";

const Homepage = ({ providers }) => {
  return (
    <>
      <Dashboard providers={providers} />
      <Head>
        <title></title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    </>
  );
};

export default Homepage;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
