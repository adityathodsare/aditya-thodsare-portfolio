// app/page.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import {
  FiSun,
  FiMoon,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiChevronDown,
} from "react-icons/fi";
import { FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import {
  SiSpringboot,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiIota,
  SiFigma,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { IoHardwareChipOutline } from "react-icons/io5";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Dark mode detection
  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Apply dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      updateActiveSection();
    };

    const updateActiveSection = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse move effect for hero section
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNextSection = () => {
    const sections = ["home", "about", "experience", "projects", "contact"];
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      handleNavClick(sections[currentIndex + 1]);
    }
  };

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
    "UI/UX Design": <SiFigma className="text-purple-600" />,
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Head>
        <title>Aditya Thodsare | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Aditya Thodsare - Full Stack Developer specializing in Spring Boot and React"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-emerald-400 dark:bg-emerald-600"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-2 backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 shadow-lg"
            : "py-4 backdrop-blur-md bg-white/80 dark:bg-gray-900/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span
                className={`text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent`}
              >
                Aditya Thodsare
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {["home", "about", "experience", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`capitalize px-3 py-2 text-sm font-medium transition-all relative group ${
                      activeSection === item
                        ? "text-emerald-500 dark:text-emerald-400 font-semibold"
                        : "text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400"
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-emerald-500 dark:bg-emerald-400 transition-all duration-300 ${
                        activeSection === item
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </button>
                )
              )}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all hover:scale-110 ${
                  darkMode
                    ? "bg-emerald-900/20 text-emerald-400 hover:bg-emerald-900/40"
                    : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <FiSun className="w-5 h-5" />
                ) : (
                  <FiMoon className="w-5 h-5" />
                )}
              </button>

              <a
                href="#contact"
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  darkMode
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
                }`}
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="min-h-screen pt-32 pb-20 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto flex flex-col justify-center relative overflow-hidden"
      >
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 -z-10 opacity-70"
          style={{
            background: darkMode
              ? `radial-gradient(circle at ${mousePosition.x * 100 + 50}% ${
                  mousePosition.y * 100 + 50
                }%, #04785740 0%, #111827 70%)`
              : `radial-gradient(circle at ${mousePosition.x * 100 + 50}% ${
                  mousePosition.y * 100 + 50
                }%, #06b6d440 0%, #f8fafc 70%)`,
          }}
        />

        <div className="text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400 mb-4">
              Full Stack Developer
            </span>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r ${
              darkMode
                ? "from-emerald-400 to-teal-300"
                : "from-emerald-600 to-teal-500"
            } bg-clip-text text-transparent`}
          >
            Aditya{" "}
            <span className={darkMode ? "text-white" : "text-gray-800"}>
              Thodsare
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto dark:text-gray-300 text-gray-600">
            Building scalable web applications with Spring Boot & React | IoT
            Enthusiast | Problem Solver
          </h2>

          <p className="text-lg md:text-xl max-w-3xl mx-auto dark:text-gray-400 text-gray-500 mb-12">
            I craft efficient, user-centric solutions that bridge the gap
            between technology and business needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1 ${
                darkMode
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/30"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
              }`}
            >
              Let's Collaborate
            </a>
            <a
              href="#projects"
              className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600"
                  : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 hover:border-gray-300"
              }`}
            >
              View My Work
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNextSection}
            className="p-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all"
            aria-label="Scroll down"
          >
            <FiChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 bg-gradient-to-r ${
              darkMode
                ? "from-emerald-400 to-teal-300"
                : "from-emerald-600 to-teal-500"
            } bg-clip-text text-transparent inline-block`}
          >
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 mb-8 rounded-full"></div>
          <p className="text-xl max-w-3xl mx-auto dark:text-gray-300 text-gray-600 leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in building
            modern web applications. With a strong foundation in both frontend
            and backend technologies, I create seamless, performant digital
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div
              className={`absolute -inset-1 rounded-2xl blur opacity-75 ${
                darkMode
                  ? "bg-gradient-to-r from-emerald-400 to-teal-500"
                  : "bg-gradient-to-r from-emerald-300 to-teal-400"
              } group-hover:opacity-100 transition duration-500`}
            ></div>
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

          <div>
            <h3 className="text-2xl font-semibold mb-6 dark:text-white text-gray-800">
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
                  <p className="font-medium dark:text-white text-gray-800">
                    Location
                  </p>
                  <p className="dark:text-gray-400 text-gray-600">
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
                  <p className="font-medium dark:text-white text-gray-800">
                    Email
                  </p>
                  <p className="dark:text-gray-400 text-gray-600">
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
                  <p className="font-medium dark:text-white text-gray-800">
                    Phone
                  </p>
                  <p className="dark:text-gray-400 text-gray-600">8263878470</p>
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
                  <p className="font-medium dark:text-white text-gray-800">
                    Education
                  </p>
                  <p className="dark:text-gray-400 text-gray-600">
                    Bachelor of Engineering - BE, Electronics and
                    telecommunication engineering (2022-2026)
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-12 mb-6 dark:text-white text-gray-800">
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
                "UI/UX Design",
              ].map((skill) => (
                <div
                  key={skill}
                  className={`flex items-center p-3 rounded-lg transition-all hover:transform hover:-translate-y-1 ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-emerald-500/50"
                      : "bg-white hover:bg-gray-50 border border-gray-200 hover:border-emerald-400/50"
                  }`}
                >
                  <div className="mr-2 text-lg">
                    {skillIcons[skill] || (
                      <FaNodeJs className="text-green-500" />
                    )}
                  </div>
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-24 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 bg-gradient-to-r ${
              darkMode
                ? "from-emerald-400 to-teal-300"
                : "from-emerald-600 to-teal-500"
            } bg-clip-text text-transparent inline-block`}
          >
            Professional Journey
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 mb-8 rounded-full"></div>
          <p className="text-xl max-w-3xl mx-auto dark:text-gray-300 text-gray-600 leading-relaxed">
            My career path and the valuable experiences I've gained along the
            way
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-6 md:left-1/2 h-full w-0.5 transform -translate-x-1/2 ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          ></div>

          {/* Experience items */}
          <div className="space-y-12">
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="hidden md:block md:w-1/2 pr-12"></div>
              <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div
                  className={`p-8 rounded-2xl shadow-xl transition-all hover:shadow-2xl ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-750"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold dark:text-white text-gray-800">
                        Java Full Stack Developer Intern
                      </h3>
                      <p className="text-lg dark:text-emerald-400 text-emerald-600">
                        Shorat Innovations Pvt Ltd
                      </p>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode
                          ? "bg-emerald-900/40 text-emerald-400"
                          : "bg-emerald-100 text-emerald-600"
                      }`}
                    >
                      Jan 2025 - Apr 2025
                    </div>
                  </div>
                  <ul className="mt-4 space-y-3 dark:text-gray-300 text-gray-600">
                    <li className="flex items-start">
                      <span
                        className={`inline-block mr-2 mt-1 w-2 h-2 rounded-full ${
                          darkMode ? "bg-emerald-400" : "bg-emerald-500"
                        }`}
                      ></span>
                      <span>
                        Developed a content distribution platform using Spring
                        Boot and React with real-time features via WebSockets
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className={`inline-block mr-2 mt-1 w-2 h-2 rounded-full ${
                          darkMode ? "bg-emerald-400" : "bg-emerald-500"
                        }`}
                      ></span>
                      <span>
                        Implemented Spring Security for robust authentication
                        and authorization of REST APIs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className={`inline-block mr-2 mt-1 w-2 h-2 rounded-full ${
                          darkMode ? "bg-emerald-400" : "bg-emerald-500"
                        }`}
                      ></span>
                      <span>
                        Built React-based course distribution interfaces with
                        optimized data fetching and state management
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className={`inline-block mr-2 mt-1 w-2 h-2 rounded-full ${
                          darkMode ? "bg-emerald-400" : "bg-emerald-500"
                        }`}
                      ></span>
                      <span>
                        Designed and optimized backend architectures for
                        seamless frontend integration
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 pr-12">
                <div
                  className={`p-8 rounded-2xl shadow-xl transition-all hover:shadow-2xl ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-750"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold dark:text-white text-gray-800">
                        Bachelor of Engineering
                      </h3>
                      <p className="text-lg dark:text-emerald-400 text-emerald-600">
                        Electronics and Telecommunication
                      </p>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode
                          ? "bg-emerald-900/40 text-emerald-400"
                          : "bg-emerald-100 text-emerald-600"
                      }`}
                    >
                      2022 - 2026
                    </div>
                  </div>
                  <ul className="mt-4 space-y-3 dark:text-gray-300 text-gray-600">
                    <li className="flex items-start">
                      <span
                        className={`inline-block mr-2 mt-1 w-2 h-2 rounded-full ${
                          darkMode ? "bg-emerald-400" : "bg-emerald-500"
                        }`}
                      ></span>
                      <span>
                        Specialized in both hardware (VLSI, FPGA) and software
                        development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className={`inline-block mr-2 mt-1 w-2 h-2 rounded-full ${
                          darkMode ? "bg-emerald-400" : "bg-emerald-500"
                        }`}
                      ></span>
                      <span>
                        Coursework in IoT, embedded systems, and web
                        technologies
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className={`inline-block mr-2 mt-1 w-2 h-2 rounded-full ${
                          darkMode ? "bg-emerald-400" : "bg-emerald-500"
                        }`}
                      ></span>
                      <span>
                        Participated in multiple hackathons and technical
                        competitions
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </div>
              <div className="hidden md:block md:w-1/2 pl-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 bg-gradient-to-r ${
              darkMode
                ? "from-emerald-400 to-teal-300"
                : "from-emerald-600 to-teal-500"
            } bg-clip-text text-transparent inline-block`}
          >
            Featured Projects
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 mb-8 rounded-full"></div>
          <p className="text-xl max-w-3xl mx-auto dark:text-gray-300 text-gray-600 leading-relaxed">
            A selection of my recent work showcasing my skills and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* SAFE-V Project */}
          <div
            className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all hover:shadow-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
            data-aos="fade-up"
          >
            <div className="relative overflow-hidden h-60">
              <img
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="SAFE-V Project"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">SAFE-V</h3>
                <p className="text-sm text-gray-300">
                  IoT Vehicle Safety System
                </p>
              </div>
            </div>
            <div className="p-6">
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                An innovative IoT-based solution for real-time vehicle
                monitoring and emergency alerts, enhancing driver safety.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["IoT", "Next.js", "Spring Boot", "MySQL", "WebSocket"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full font-medium ${
                        darkMode
                          ? "bg-gray-700 text-emerald-400 group-hover:bg-emerald-900/40 group-hover:text-emerald-300"
                          : "bg-gray-100 text-emerald-600 group-hover:bg-emerald-100 group-hover:text-emerald-700"
                      }`}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/adityathodsare/safe-V-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-sm font-medium ${
                    darkMode
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-emerald-600 hover:text-emerald-500"
                  }`}
                >
                  <FiGithub className="mr-1" /> Code
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-sm font-medium ${
                    darkMode
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-emerald-600 hover:text-emerald-500"
                  }`}
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* User Management Module */}
          <div
            className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all hover:shadow-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative overflow-hidden h-60">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="User Management Module"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  User Management
                </h3>
                <p className="text-sm text-gray-300">
                  Secure Authentication System
                </p>
              </div>
            </div>
            <div className="p-6">
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                A comprehensive user management system with JWT authentication,
                role-based access control, and secure password handling.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Spring Security",
                  "Spring Boot",
                  "JWT",
                  "REST APIs",
                  "MySQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                      darkMode
                        ? "bg-gray-700 text-emerald-400 group-hover:bg-emerald-900/40 group-hover:text-emerald-300"
                        : "bg-gray-100 text-emerald-600 group-hover:bg-emerald-100 group-hover:text-emerald-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/adityathodsare/spring-security-user-management-with-JWT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-sm font-medium ${
                    darkMode
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-emerald-600 hover:text-emerald-500"
                  }`}
                >
                  <FiGithub className="mr-1" /> Code
                </a>
              </div>
            </div>
          </div>

          {/* DevElevate */}
          <div
            className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all hover:shadow-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative overflow-hidden h-60">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="DevElevate"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">DevElevate</h3>
                <p className="text-sm text-gray-300">Learning Platform</p>
              </div>
            </div>
            <div className="p-6">
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                A modern course platform built with Next.js and TypeScript,
                featuring responsive design and interactive learning tools.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js", "TypeScript", "Tailwind CSS", "Vercel"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full font-medium ${
                        darkMode
                          ? "bg-gray-700 text-emerald-400 group-hover:bg-emerald-900/40 group-hover:text-emerald-300"
                          : "bg-gray-100 text-emerald-600 group-hover:bg-emerald-100 group-hover:text-emerald-700"
                      }`}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/adityathodsare/devElevate-nexjs-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-sm font-medium ${
                    darkMode
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-emerald-600 hover:text-emerald-500"
                  }`}
                >
                  <FiGithub className="mr-1" /> Code
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-sm font-medium ${
                    darkMode
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-emerald-600 hover:text-emerald-500"
                  }`}
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 bg-gradient-to-r ${
              darkMode
                ? "from-emerald-400 to-teal-300"
                : "from-emerald-600 to-teal-500"
            } bg-clip-text text-transparent inline-block`}
          >
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 mb-8 rounded-full"></div>
          <p className="text-xl max-w-3xl mx-auto dark:text-gray-300 text-gray-600 leading-relaxed">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div
              className={`p-8 rounded-2xl shadow-xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 dark:text-white text-gray-800">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-xl mr-4 ${
                      darkMode
                        ? "bg-emerald-900/30 text-emerald-400"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white text-gray-800">
                      Phone
                    </h4>
                    <p className="dark:text-gray-400 text-gray-600">
                      8263878470
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-xl mr-4 ${
                      darkMode
                        ? "bg-emerald-900/30 text-emerald-400"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white text-gray-800">
                      Email
                    </h4>
                    <p className="dark:text-gray-400 text-gray-600">
                      thodsareaditya@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-xl mr-4 ${
                      darkMode
                        ? "bg-emerald-900/30 text-emerald-400"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white text-gray-800">
                      Location
                    </h4>
                    <p className="dark:text-gray-400 text-gray-600">
                      Pune/Pimpri-Chinchwad Area, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-medium dark:text-white text-gray-800 mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/adityathodsare-475366289"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all hover:transform hover:-translate-y-1 ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white hover:shadow-lg hover:shadow-emerald-500/10"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-700 hover:shadow-lg hover:shadow-emerald-500/10"
                    }`}
                  >
                    <FiLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/adityathodsare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all hover:transform hover:-translate-y-1 ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white hover:shadow-lg hover:shadow-emerald-500/10"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-700 hover:shadow-lg hover:shadow-emerald-500/10"
                    }`}
                  >
                    <FiGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              className={`p-8 rounded-2xl shadow-xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 dark:text-gray-300 text-gray-600"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                  }`}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 dark:text-gray-300 text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                  }`}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 dark:text-gray-300 text-gray-600"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                  }`}
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 dark:text-gray-300 text-gray-600"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                  }`}
                  placeholder="Hello Aditya, I'd like to discuss..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all transform hover:-translate-y-0.5 flex items-center justify-center ${
                  darkMode
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                    : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                }`}
              >
                <FiSend className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <a
              href="#home"
              className={`text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 bg-clip-text text-transparent hover:underline`}
            >
              Aditya Thodsare
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {["home", "about", "experience", "projects", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`capitalize text-sm font-medium transition-all ${
                    activeSection === item
                      ? "text-emerald-500 dark:text-emerald-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com/in/adityathodsare-475366289"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all hover:transform hover:-translate-y-1 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/adityathodsare"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all hover:transform hover:-translate-y-1 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              <FiGithub className="w-5 h-5" />
            </a>
          </div>

          <p className="dark:text-gray-400 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Aditya Thodsare. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
