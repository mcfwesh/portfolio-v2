import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AnimatePages from "./components/AnimatePages";
import Home from "./page";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ weight: ["400", "700", "900"], subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const routes = [{ path: "/", component: <Home /> }];

export const metadata: Metadata = {
  title: "Portfolio | Nathan Ojieabu",
  description: "Portfolio for Nathan Ojieabu",
};

export default function RootLayout(props: Props) {
  const { children } = props;
  console.log(process.env.GA_TRACKING_ID);

  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      <body
        className={`${lato.className} flex  min-h-screen w-full flex-col  bg-light px-8 pt-8 text-textDark  dark:bg-dark dark:text-light md:px-24`}
      >
        <Navbar />
        <AnimatePages>
          <main className="relative  my-16 flex w-full flex-grow items-center justify-center">
            {children}
          </main>
        </AnimatePages>
        <Footer />
      </body>
    </html>
  );
}
