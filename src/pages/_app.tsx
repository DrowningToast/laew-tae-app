import "@/styles/globals.css";
import { Sarabun } from "next/font/google";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";

const sarabun = Sarabun({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["thai", "latin"],
  variable: "--font-sarabun",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sarabun.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
