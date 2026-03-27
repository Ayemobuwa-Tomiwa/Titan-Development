import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import vulcoreicon from "../assets/icons/vulcoreicon.png";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="grid grid-flow-col items-center gap-2"
        >

          <img
            src={vulcoreicon}
            alt="Vulcore Logo"
            className="w-8 h-7 object-cover"
          />

          <h1 className="text-white text-xl md:text-2xl font-semibold tracking-widest">

            VULCORE{" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">

              TECHNOLOGY

            </span>

          </h1>

        </Link>


        {/* Desktop Menu */}

        <div className="hidden md:flex gap-10 text-sm tracking-wide text-gray-300">

          <Link
            to="/"
            className="hover:text-white transition"
          >
            HOME
          </Link>

          <Link
            to="/#services"
            className="hover:text-white transition"
          >
            SERVICES
          </Link>

          <Link
            to="/#projects"
            className="hover:text-white transition"
          >
            PROJECTS
          </Link>

          {/* Hamburger */}

          <div
            className="cursor-pointer text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </div>

        </div>


        {/* Mobile Hamburger */}

        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >

          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>

        </div>

      </div>


      {/* Dropdown Menu */}

      {open && (

        <div className="absolute right-0 top-16 bg-black/70 backdrop-blur-lg border border-white/15 rounded-xl px-8 py-6 flex flex-col gap-6 text-gray-400">

          <Link
            to="/company"
            onClick={() => setOpen(false)}
            className="hover:text-white"
          >
            ABOUT
          </Link>

          <Link
            to="/company#contact"
            onClick={() => setOpen(false)}
            className="hover:text-white"
          >
            CONTACT
          </Link>

          <Link
            to="/company#faq"
            onClick={() => setOpen(false)}
            className="hover:text-white"
          >
            FAQs
          </Link>

          <Link
            to="/legal"
            onClick={() => setOpen(false)}
            className="hover:text-white"
          >
            PRIVACY & TERMS
          </Link>

        </div>

      )}

    </nav>

  );

}