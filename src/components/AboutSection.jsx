import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import {
  SiSpringboot,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiIota,
  SiFigma,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { IoHardwareChipOutline } from "react-icons/io5";
import { useEffect, useRef } from "react";

export default function AboutSection({ darkMode }) {
  const containerRef = useRef(null);

  // Skill icons mapping
  const skillIcons = {
    "Spring Boot": <SiSpringboot className="text-emerald-500" />,
    "REST APIs": <TbApi className="text-blue-500" />,
    "React.js": <FaReact className="text-blue-400" />,
    "Next.js": <SiNextdotjs className="text-gray-800 dark:text-gray-200" />,
    Java: <FaJava className="text-red-500" />,
    "Spring Security": <SiSpringboot className="text-green-600" />,
    IoT: <SiIota className="text-purple-500" />,
    VLSI: <IoHardwareChipOutline className="text-yellow-500" />,
    FPGA: <IoHardwareChipOutline className="text-orange-500" />,
    WebSocket: <TbApi className="text-indigo-500" />,
    MySQL: <SiMysql className="text-blue-600" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    TypeScript: <SiTypescript className="text-blue-600" />,
    JavaScript: <SiJavascript className="text-yellow-500" />,
    "UI/UX Design": <SiFigma className="text-purple-600" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cards = container.querySelectorAll(".hover-effect-card");

    const handleMouseMove = (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto overflow-hidden"
      ref={containerRef}
    >
      {/* Subtle background glow effects */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10 dark:opacity-5 mix-blend-screen pointer-events-none">
        <div
          className={`absolute inset-0 rounded-full blur-3xl ${
            darkMode ? "bg-emerald-500" : "bg-teal-400"
          }`}
        ></div>
      </div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-10 dark:opacity-5 mix-blend-screen pointer-events-none">
        <div
          className={`absolute inset-0 rounded-full blur-3xl ${
            darkMode ? "bg-teal-500" : "bg-emerald-400"
          }`}
        ></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2
          className={`text-4xl font-bold mb-4 bg-gradient-to-r ${
            darkMode
              ? "from-emerald-400 to-teal-300"
              : "from-emerald-600 to-teal-600"
          } bg-clip-text text-transparent inline-block`}
        >
          About Me
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 mb-8 rounded-full"></div>
        <p
          className={`text-xl max-w-3xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } leading-relaxed`}
        >
          I'm a passionate Full Stack Developer with expertise in building
          modern web applications. With a strong foundation in both frontend and
          backend technologies, I create seamless, performant digital
          experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="relative group hover-effect-card">
          <div
            className={`absolute -inset-1 rounded-2xl blur opacity-75 ${
              darkMode
                ? "bg-gradient-to-r from-emerald-400 to-teal-500"
                : "bg-gradient-to-r from-emerald-300 to-teal-400"
            } group-hover:opacity-100 transition duration-500`}
          ></div>
          <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div
              className="absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-xl"
              style={{
                left: "var(--mouse-x, 0)",
                top: "var(--mouse-y, 0)",
              }}
            ></div>
          </div>
          <div
            className={`relative rounded-2xl overflow-hidden ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Aditya Thodsare"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="hover-effect-card">
          <h3
            className={`text-2xl font-semibold mb-6 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Personal Details
          </h3>
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div
                className={`p-2 rounded-lg mr-4 ${
                  darkMode
                    ? "bg-emerald-900/30 text-emerald-400"
                    : "bg-emerald-100 text-emerald-600"
                }`}
              >
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <p
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Location
                </p>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Pune/Pimpri-Chinchwad Area, India
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div
                className={`p-2 rounded-lg mr-4 ${
                  darkMode
                    ? "bg-emerald-900/30 text-emerald-400"
                    : "bg-emerald-100 text-emerald-600"
                }`}
              >
                <FiMail className="w-5 h-5" />
              </div>
              <div>
                <p
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Email
                </p>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  thodsareaditya@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div
                className={`p-2 rounded-lg mr-4 ${
                  darkMode
                    ? "bg-emerald-900/30 text-emerald-400"
                    : "bg-emerald-100 text-emerald-600"
                }`}
              >
                <FiPhone className="w-5 h-5" />
              </div>
              <div>
                <p
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Phone
                </p>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  8263878470
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div
                className={`p-2 rounded-lg mr-4 ${
                  darkMode
                    ? "bg-emerald-900/30 text-emerald-400"
                    : "bg-emerald-100 text-emerald-600"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <div>
                <p
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Education
                </p>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Bachelor of Engineering - BE, Electronics and
                  telecommunication engineering (2022-2026)
                </p>
              </div>
            </div>
          </div>

          <h3
            className={`text-2xl font-semibold mt-12 mb-6 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Technical Expertise
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Spring Boot",
              "REST APIs",
              "React.js",
              "Next.js",
              "Java",
              "Spring Security",
              "IoT",
              "VLSI",
              "FPGA",
              "WebSocket",
              "MySQL",
              "MongoDB",
              "TypeScript",
              "JavaScript",
              "UI/UX Design",
              "Tailwind CSS",
            ].map((skill) => (
              <div
                key={skill}
                className={`flex items-center p-3 rounded-lg transition-all hover:transform hover:-translate-y-1 hover-effect-card ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-emerald-500/50"
                    : "bg-white hover:bg-gray-50 border border-gray-200 hover:border-emerald-400/50"
                }`}
              >
                <div className="mr-2 text-lg">
                  {skillIcons[skill] || <FaNodeJs className="text-green-500" />}
                </div>
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-effect-card {
          position: relative;
          overflow: hidden;
        }

        .hover-effect-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            ${darkMode
              ? "rgba(110, 231, 183, 0.1)"
              : "rgba(45, 212, 191, 0.1)"},
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 0;
        }

        .hover-effect-card:hover::before {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
