import { Manrope } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/nav/navbar";
import Footer from "@/components/footer/footer";
import ReduxProvider from "@/redux/Provider";
import { Fragment } from "react";

// If loading a variable font, you don't need to specify the font weight

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adjust weights as needed
  variable: "--font-manrope", // optional
});

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <Navbar></Navbar>
      <ReduxProvider>{children}</ReduxProvider>
      <Footer></Footer>
    </Fragment>
  );
}
