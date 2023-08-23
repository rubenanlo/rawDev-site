import { useEffect } from "react";
import { Provider } from "react-redux";
import { Router } from "next/router";
import Head from "next/head";
import { TITLE, META_DESCRIPTION, META_IMAGE, URL } from "root/config";
import { DefaultSeo } from "next-seo";
import { SessionProvider } from "next-auth/react";
import { ResponsiveComponent } from "helpers/responsiveComponent";
import * as gtag from "helpers/gtag";
import store from "library/store";
import "tailwindcss/tailwind.css";
import "styles/globals.css";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  // Track pages with google analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  // End of track pages with google analytics

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo
        title={TITLE}
        description={META_DESCRIPTION}
        openGraph={{ url: URL, images: [{ url: META_IMAGE }] }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <SessionProvider session={session}>
        <Provider store={store}>
          <ResponsiveComponent>
            <Component {...pageProps} />
          </ResponsiveComponent>
        </Provider>
      </SessionProvider>
    </>
  );
};

export default App;
