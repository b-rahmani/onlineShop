import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { SidebarProvider } from "../store/sideBarContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Layout search>
        <Component {...pageProps} />
      </Layout>
    </SidebarProvider>
  );
}

export default MyApp;
