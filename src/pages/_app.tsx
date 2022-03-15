import Head from "next/head";
import { AppProps } from "next/app";
import "demandscience-ui/dist/tailwind.css";
import "styles/index.css";
import AppLayout from "components/core/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Leadiro Demo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;
