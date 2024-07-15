import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import HerosectionPage from "./components/herosection";
import About from "./components/about";
import Experience from "./components/experience";
import {SocialLink ,Email} from "./components/socialLink";
import Technologies from "./components/technologies";
import Contact from "./components/contact";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZOHAIB ISMAIL-portfolio",
  description: "portfolio of Zohaib Ismail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-slate-800'}>{children}
        
        <Header/>
        <HerosectionPage/>
        <About/>
        <Experience/>
        <Technologies/>
        <Contact/>
        <SocialLink/>
        <Email/>
        
      
        </body>
    </html>
  );
}
