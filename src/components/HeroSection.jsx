"use client";

import { useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi";
import { SITE } from "@/lib/site";

export default function HeroSection({ handleNavClick }) {
  const revealRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 relative overflow-hidden border-b-4 border-black"
      >
        <div className="absolute top-20 right-20 text-9xl opacity-5 font-black select-none pointer-events-none">
          CODE
        </div>

        <div className="relative z-10 text-center max-w-5xl mt-10">
          <div
            ref={addToRefs}
            className="inline-block bg-[var(--color-neo-white)] border-2 border-black px-4 py-1 mb-6 brutal-shadow rotate-[-2deg] reveal"
          >
            <span className="font-mono font-bold text-[var(--color-neo-green)] bg-black px-2 mr-2">
              ●
            </span>
            <span className="font-mono font-bold">SYSTEM STATUS: ONLINE</span>
          </div>

          <h1
            ref={addToRefs}
            className="text-[8vw] sm:text-[6vw] md:text-[5vw] leading-[1.0] font-black uppercase tracking-tighter mb-6 reveal font-display relative z-10 flex flex-col items-center gap-2"
          >
            <span className="inline-block bg-[var(--color-neo-yellow)] text-black px-5 py-2 border-4 border-black brutal-shadow-lg rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
              FULL STACK DEVELOPER
            </span>
            <span className="inline-block bg-black text-white px-6 py-2 border-4 border-black brutal-shadow-lg rotate-[1deg] hover:rotate-0 transition-transform duration-300">
              & AI ENGINEER
            </span>
          </h1>

          <p
            ref={addToRefs}
            className="font-mono text-lg md:text-xl max-w-3xl mx-auto mb-10 bg-white border-4 border-black p-6 brutal-shadow-lg reveal text-left"
          >
            I build robust full-stack applications and <span className="bg-[var(--color-neo-green)] px-1 border border-black font-bold">automate complex workflows with AI</span> using n8n and Make.
            <br />
            <br />
            From backend microservices in Spring Boot to responsive frontend experiences using React & Next.js.
            <br />
            <span className="inline-block mt-3 bg-black text-[var(--color-neo-yellow)] px-3 py-1 text-sm font-bold border border-black">
              Java • Spring Boot • React • Next.js • n8n & Make AI Automation
            </span>
          </p>

          <div
            ref={addToRefs}
            className="flex flex-wrap justify-center gap-3 mb-10 font-mono text-sm font-bold reveal"
          >
            <span className="bg-[var(--color-neo-green)] text-black px-4 py-2 border-2 border-black brutal-shadow-sm flex items-center gap-1">
              ✔ Open to Work
            </span>
            <span className="bg-[var(--color-neo-yellow)] text-black px-4 py-2 border-2 border-black brutal-shadow-sm flex items-center gap-1">
              ✔ AI Workflow Automation (n8n & Make)
            </span>
            <span className="bg-[var(--color-neo-pink)] text-black px-4 py-2 border-2 border-black brutal-shadow-sm flex items-center gap-1">
              ✔ Scalable Systems
            </span>
            <span className="bg-[var(--color-neo-white)] text-black px-4 py-2 border-2 border-black brutal-shadow-sm flex items-center gap-1">
              ✔ Cloud & IoT
            </span>
          </div>

          <div
            ref={addToRefs}
            className="flex flex-col md:flex-row justify-center gap-6 reveal"
          >
            <button
              onClick={() => handleNavClick("projects")}
              className="bg-black text-white border-2 border-black px-10 py-5 text-xl font-bold brutal-shadow hover:bg-[var(--color-neo-green)] hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover font-display"
            >
              PROJECT GALLERY
            </button>
            <a
              href="https://drive.google.com/file/d/1hnW7EzFJf2EMgHkgyKrjb6muXX-D7EeR/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-neo-white)] text-black border-2 border-black px-10 py-5 text-xl font-bold brutal-shadow hover:bg-[var(--color-neo-pink)] hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover flex items-center justify-center gap-2 font-display"
            >
              <FiDownload className="text-2xl" /> DOWNLOAD CV
            </a>
          </div>
        </div>
      </section>

      <div className="border-b-4 border-black bg-[var(--color-neo-blue)] py-3 relative z-20">
        <div className="marquee-container font-mono font-bold text-2xl text-white">
          <div className="marquee-content">
            /// OPEN FOR WORK /// FULL STACK DEVELOPMENT /// SPRING BOOT /// REACT /// AI WORKFLOW AUTOMATION (N8N & MAKE) /// MICROSERVICES /// IOT /// OPEN FOR WORK ///
          </div>
        </div>
      </div>
    </>
  );
}
