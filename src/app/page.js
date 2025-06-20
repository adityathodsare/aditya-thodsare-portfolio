"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExprienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Set mounted and detect preferred color scheme
  useEffect(() => {
    setMounted(true);

    // Check for mobile device
    setIsMobile(window.innerWidth < 768);

    // Check for preferred color scheme
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);

    // Listen for color scheme changes
    const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleColorSchemeChange = (e) => setDarkMode(e.matches);
    colorSchemeQuery.addEventListener("change", handleColorSchemeChange);

    // Listen for resize events
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => {
      colorSchemeQuery.removeEventListener("change", handleColorSchemeChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Apply dark mode class only after mounting to avoid hydration mismatch
  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode, mounted]);

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
    updateActiveSection();
  }, []);

  // Update active section with intersection observer for better performance
  const updateActiveSection = useCallback(() => {
    const sections = ["home", "about", "experience", "projects", "contact"];
    const scrollPosition = window.scrollY + window.innerHeight / 3;

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
  }, []);

  // Scroll effect for navbar
  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [handleScroll]);

  // Mouse move effect for hero section (disabled on mobile)
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  const handleNavClick = useCallback(
    (section) => {
      setActiveSection(section);
      const element = document.getElementById(section);
      if (element) {
        // Better scroll behavior for mobile
        const offset = isMobile ? 80 : 0;
        const top =
          element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    [isMobile]
  );

  if (!mounted) {
    return <Loading darkMode={darkMode} />;
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Optimized Animated Background Elements */}
      {!isMobile && (
        <div className="fixed inset-0 overflow-hidden -z-10 opacity-20 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-emerald-400 dark:bg-emerald-600"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                animation: `float ${Math.random() * 15 + 8}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        scrolled={scrolled}
        isMobile={isMobile}
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection
          darkMode={darkMode}
          mousePosition={mousePosition}
          handleNavClick={handleNavClick}
          activeSection={activeSection}
          isMobile={isMobile}
        />

        <AboutSection darkMode={darkMode} />

        <ExperienceSection darkMode={darkMode} />

        <ProjectsSection darkMode={darkMode} />

        <ContactSection darkMode={darkMode} />
      </main>

      <Footer
        darkMode={darkMode}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />
    </div>
  );
}

// Helper function to throttle events
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
