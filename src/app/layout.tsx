import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/component/Footer/Footer";
import Navbar from "../component/navbar/Navbar"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "farook college history department",
  description: "farook college autonomous department of history",
};

export default  function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar ></Navbar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
