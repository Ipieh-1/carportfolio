import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import PageTransition from "../components/page-transition/page";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Apex GT Motors",
  description: "An appreciation of the machines, moments, and design that move us.",
  icons: {
    icon: "/apex-monogram.svg",
    shortcut: "/apex-monogram.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#101214] text-white">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
