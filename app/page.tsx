import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Plans from "@/components/sections/Plans";
import Philosophy from "@/components/sections/Philosophy";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Plans />
        <Philosophy />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
