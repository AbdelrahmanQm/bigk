import HeroSection from "@/components/heroSection/hero-section";
import IntroSection from "@/components/intro-section/intro-section";
import Image from "next/image";
import karim from "../../public/karim.png";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
    </main>
  );
}
