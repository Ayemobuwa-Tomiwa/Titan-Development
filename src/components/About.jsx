import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".about-animate",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 px-6 bg-black relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}

        <h2 className="about-animate text-3xl md:text-5xl mb-12">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Vulcore Technology
          </span>
        </h2>

        {/* Founders Section */}

        <div className="about-animate mb-12">

          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
            The Co-Founders: Ayemobuwa Adetomiwa & Daniel Psalm
          </h3>

          <p className="text-gray-300 leading-relaxed text-lg">
            Vulcore Technology was founded by two dedicated
            software developers and graduates of{" "}
            <span className="text-yellow-400 font-semibold">
              Bowen University
            </span>
            , both holding degrees in{" "}
            <span className="text-yellow-400 font-semibold">
              Software Engineering
            </span>.
            What began as a shared passion for building digital
            solutions has grown into a mission-driven technology
            venture built on persistence, resilience, and innovation.
          </p>

        </div>

        {/* Story Section */}

        <div className="about-animate mb-12">

          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Our Journey
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Like many startups, our journey has not been without its
            challenges. We have faced trials that tested our patience,
            determination, and creativity. Yet, through every obstacle,
            we remained committed to one goal — relentlessly pushing
            forward and refining our craft until we could deliver
            solutions that truly make an impact.
          </p>

          <p className="text-gray-400 mt-6 leading-relaxed">
            The birth of Vulcore Technology represents more than just
            the launch of a business — it represents years of
            persistence, late nights, learning, iteration, and
            unwavering belief in our vision.
          </p>

        </div>

        {/* Mission Section */}

        <div className="about-animate mb-12">

          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Our Mission
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Our mission is simple — to build reliable,
            high-performance, and modern software solutions that help
            businesses grow, scale, and thrive in today's digital
            world.
          </p>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Whether working with startups, entrepreneurs, or growing
            companies, we approach every project with precision,
            creativity, and a deep commitment to quality.
          </p>

        </div>

        {/* Appreciation Section */}

        <div className="about-animate">

          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Our Commitment
          </h3>

          <p className="text-gray-300 leading-relaxed">
            We deeply appreciate the trust and support of every client
            who chooses to work with us. Your confidence in our
            abilities fuels our growth and inspires us to keep
            improving.
          </p>

          <p className="text-gray-400 mt-6 leading-relaxed">
            At Vulcore Technology, we remain committed to delivering
            the satisfaction our customers deserve —{" "}
            <span className="text-yellow-400 font-semibold">
              one line of code at a time.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}