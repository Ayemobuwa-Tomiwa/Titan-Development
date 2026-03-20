import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef();

  const projects = [
  {
    title: "Netflixo",
    image: "/images/project1.jpeg",
    link: "https://netflixo.vercel.app",
  },
  {
    title: "School Community",
    image: "/images/project2.jpg",
    link: "https://example.com",
  },
  {
    title: "Animax",
    image: "/images/project3.jpg",
    link: "https://example.com",
  },
  {
    title: "Billing System",
    image: "/images/project4.jpg",
    link: "https://billingsystemdashboard.netlify.app",
  },
  {
    title: "Project Five",
    image: "/images/project5.jpg",
    comingSoon: true,
  },
  {
    title: "Project Six",
    image: "/images/project6.jpg",
    comingSoon: true,
  },
];

  useEffect(() => {
    gsap.to(".projects-bg", {
  y: 120,
  ease: "none",
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
        {/* Background */}
  <div className="absolute inset-0 -z-0">
    <img
      src="/images/project-bg.png"
      className="projects-bg w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/10"></div>
  </div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl mb-16 text-center">
          Showcasing {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold">
            Our {" "}
          </span>
            Latest {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold">
            Projects
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => {
  const CardWrapper = proj.comingSoon ? "div" : "a";

  return (
    <CardWrapper
      key={i}
      href={!proj.comingSoon ? proj.link : undefined}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card group block overflow-hidden rounded-xl ${
        proj.comingSoon ? "cursor-not-allowed" : ""
      }`}
    >
      <div className="relative">
        <img
          src={proj.image}
          alt={proj.title}
          className={`w-full h-56 object-cover transition duration-500 ${
            proj.comingSoon
              ? "grayscale opacity-60"
              : "group-hover:scale-110"
          }`}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

        {/* Title */}
        <h3 className="absolute bottom-4 left-4 text-white text-lg">
          {proj.title}
        </h3>

        {/* 🔥 Coming Soon Badge */}
        {proj.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded backdrop-blur-md bg-black/40 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
              Coming Soon
            </span>
          </div>
        )}
      </div>
    </CardWrapper>
  );
})}
        </div>
      </div>
    </section>
  );
}