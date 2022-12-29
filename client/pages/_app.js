import { Toaster } from "react-hot-toast";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { StateContext } from "../context/StateContext";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="main-container">
      <StateContext>
        <Head>
          <title>PopStore - Home</title>
        </Head>
        <Toaster />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </StateContext>
    </div>
  );
}
