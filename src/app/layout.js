import "./globals.css";
import { Inter } from "next/font/google";
import NavLinks from "../../components/nav-bar/nav-links";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavLinks />
        {children}
      </body>
    </html>
  );
}
