import "bootstrap/dist/css/bootstrap.min.css"; // Import css bootstrap
import "@/styles/globals.css";
import { useEffect } from "react"; // Import hook untuk javascript bootstrap
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;