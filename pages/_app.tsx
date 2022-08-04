import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
// import { SidebarProvider } from "../store/sideBarContext";
import Head from "next/head";
import { store } from "../store/store";
import { Provider } from "react-redux";
// import { saveState } from "../store/browser-storage/browser-storage";
// import { debounce } from "debounce";
import "react-toastify/dist/ReactToastify.min.css";
import { useRouter } from "next/router";

// store.subscribe(
//   // we use debounce to save the state once each 800ms
//   // for better performances in case multiple changes occur in a short time
//   () => {
//     saveState({ basket: store.getState().basket });
//   }
// );

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const router = useRouter();
  const getContent = () => {
    const ignoreLayout = ["/login", "/signup"];
    if (ignoreLayout.includes(appProps.router.pathname)) {
      return <Component {...pageProps} key={router.asPath} />;
    } else {
      return (
        <Layout search>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      );
    }
  };

  return (
    <Provider store={store}>
      {" "}
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      {getContent()}
    </Provider>
  );
}

export default MyApp;
