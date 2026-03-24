import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      ".about-content",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 px-6 relative bg-black"
    >
      <div className="max-w-5xl mx-auto text-center about-content">
        <h2 className="text-3xl md:text-5xl mb-8">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Us
          </span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          We are a team of passionate developers dedicated to building
          scalable, high-performance software solutions for businesses
          worldwide. Our focus is on reliability, performance, and
          modern design that elevates digital experiences.
        </p>

        <p className="text-gray-400 mt-6">
          From startups to enterprise solutions, we deliver
          robust applications that solve real-world problems.
        </p>
      </div>
    </section>
  );
}