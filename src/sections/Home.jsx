import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}