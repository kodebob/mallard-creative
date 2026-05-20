import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyUs from "./components/WhyUs";
import FreeAudit from "./components/FreeAudit";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <WhyUs />
        <FreeAudit />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
