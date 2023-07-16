import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AnimatePages from "./components/AnimatePages";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ weight: ["400", "700", "900"], subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Portfolio | Nathan Ojieabu",
  description: "Portfolio for Nathan Ojieabu",
};

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={`${lato.className} flex  min-h-screen w-full flex-col  bg-light px-8 pt-8 text-textDark  dark:bg-dark dark:text-light md:px-24`}
      >
        <Navbar />

        <main className="relative  my-16 flex w-full flex-grow items-center justify-center">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
