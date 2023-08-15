//"use client";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import NavLinks from "@/components/nav-bar/nav-links";
import FullNav from "@/components/nav-bar/full-nav";
import { Providers } from "./GlobalRedux/provider";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Big K",
  description: "Fitness Coach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={noto.className}>
          <FullNav />
          {children}
        </body>
      </Providers>
    </html>
  );
}
