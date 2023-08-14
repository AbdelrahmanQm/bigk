import "./globals.css";
import { Noto_Sans } from "next/font/google";
import NavLinks from "@/components/nav-bar/nav-links";
import FullNave from "@/components/nav-bar/full-nav";

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
      <body className={noto.className}>
        <FullNave />
        {children}
      </body>
    </html>
  );
}
