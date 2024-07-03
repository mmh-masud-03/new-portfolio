import {
  Montserrat,
  Open_Sans,
  Fira_Code,
  Raleway,
  Roboto,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-firacode",
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Masud Portfolio",
  description: "Portfolio of Masud Hossen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${firaCode.variable} ${raleway.variable} ${roboto.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
