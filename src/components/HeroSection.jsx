import {
  FiChevronDown,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
} from "react-icons/fi";
import { useEffect, useRef, useState, useCallback } from "react";

export default function HeroSection({
  darkMode,
  mousePosition,
  handleNavClick,
  activeSection,
}) {
  const canvasRef = useRef(null);
  const waveRef = useRef(null);
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [socialHover, setSocialHover] = useState(null);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const scrollToNextSection = useCallback(() => {
    const sections = ["home", "about", "experience", "projects", "contact"];
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      handleNavClick(sections[currentIndex + 1]);
    }
  }, [activeSection, handleNavClick]);

  const openGithub = useCallback(() => {
    window.open(
      "https://github.com/adityathodsare",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  const openLinkedIn = useCallback(() => {
    window.open(
      "https://www.linkedin.com/in/aditya-thodsare-475366289/",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  useEffect(() => {
    // Enhanced Particle animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();

    const particles = [];
    const particleCount = isMobile ? 30 : 80;
    const baseColor = darkMode ? [16, 185, 129] : [5, 150, 105];
    const mouseInfluence = 100;

    // Create particles with enhanced properties
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (isMobile ? 2 : 4) + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        originalSpeedX: (Math.random() - 0.5) * 0.8,
        originalSpeedY: (Math.random() - 0.5) * 0.8,
        color: `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${
          Math.random() * 0.3 + 0.1
        })`,
        life: Math.random() * 100,
        maxLife: 100,
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Mouse interaction
        const mouseX = mousePosition.x * canvas.width;
        const mouseY = mousePosition.y * canvas.height;
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseInfluence) {
          const force = (mouseInfluence - distance) / mouseInfluence;
          particle.speedX =
            particle.originalSpeedX + (dx / distance) * force * 2;
          particle.speedY =
            particle.originalSpeedY + (dy / distance) * force * 2;
        } else {
          particle.speedX += (particle.originalSpeedX - particle.speedX) * 0.02;
          particle.speedY += (particle.originalSpeedY - particle.speedY) * 0.02;
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Boundary collision with smooth bounce
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -0.8;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -0.8;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Pulsing effect
        particle.life += 0.5;
        if (particle.life >= particle.maxLife) particle.life = 0;
        const pulse = Math.sin(particle.life * 0.1) * 0.5 + 0.5;

        // Draw particle with glow effect
        const glowSize = particle.size + pulse * 2;
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          glowSize
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx2 = particle.x - otherParticle.x;
          const dy2 = particle.y - otherParticle.y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance2 < 150) {
            const opacity = ((150 - distance2) / 150) * 0.1;
            ctx.strokeStyle = `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animateParticles);
    };

    const particleAnimationId = requestAnimationFrame(animateParticles);

    // Enhanced Wave animation - only on desktop
    if (!isMobile) {
      const waveCanvas = waveRef.current;
      if (waveCanvas) {
        const waveCtx = waveCanvas.getContext("2d");
        const resizeWaveCanvas = () => {
          waveCanvas.width = waveCanvas.offsetWidth;
          waveCanvas.height = waveCanvas.offsetHeight;
        };
        resizeWaveCanvas();

        let time = 0;
        const waveColors = darkMode
          ? ["#10b981", "#0d9488", "#14b8a6", "#0e9c6b", "#047857"]
          : ["#06b6d4", "#3b82f6", "#8b5cf6", "#0ea5e9", "#0284c7"];

        const animateWaves = () => {
          waveCtx.clearRect(0, 0, waveCanvas.width, waveCanvas.height);

          for (let i = 0; i < 5; i++) {
            const amplitude = 40 + i * 25;
            const frequency = 0.008 + i * 0.003;
            const speed = 0.03 + i * 0.015;
            const yOffset = Math.sin(time * 0.02 + i) * 10;

            waveCtx.beginPath();
            waveCtx.moveTo(0, waveCanvas.height / 2 + yOffset);

            for (let x = 0; x < waveCanvas.width; x++) {
              const y =
                waveCanvas.height / 2 +
                yOffset +
                amplitude *
                  Math.sin(frequency * x + time * speed) *
                  Math.sin(frequency * x * 0.7 + time * speed * 1.2) *
                  Math.cos(frequency * x * 0.3 + time * speed * 0.8);
              waveCtx.lineTo(x, y);
            }

            const gradient = waveCtx.createLinearGradient(
              0,
              0,
              waveCanvas.width,
              0
            );
            gradient.addColorStop(0, waveColors[i] + "00");
            gradient.addColorStop(0.5, waveColors[i]);
            gradient.addColorStop(1, waveColors[i] + "00");

            waveCtx.strokeStyle = gradient;
            waveCtx.lineWidth = 3;
            waveCtx.globalAlpha = 0.12 + i * 0.03;
            waveCtx.stroke();
          }

          time += 0.8;
          requestAnimationFrame(animateWaves);
        };

        const waveAnimationId = requestAnimationFrame(animateWaves);

        const handleResize = () => {
          resizeCanvas();
          resizeWaveCanvas();
        };
        window.addEventListener("resize", handleResize);

        return () => {
          cancelAnimationFrame(particleAnimationId);
          cancelAnimationFrame(waveAnimationId);
          window.removeEventListener("resize", handleResize);
        };
      }
    }

    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(particleAnimationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [darkMode, isMobile, mousePosition]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen pt-20 pb-12 px-4 sm:pt-24 sm:pb-16 sm:px-6 md:pt-32 md:pb-20 md:px-8 lg:px-10 max-w-7xl mx-auto flex flex-col justify-center relative overflow-hidden"
    >
      {/* Enhanced background layers */}
      <div
        className="absolute inset-0 -z-30 transition-colors duration-500"
        style={{
          backgroundColor: darkMode ? "#0f172a" : "#f8fafc",
        }}
      />

      {/* Particle canvas with enhanced effects */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full -z-20 transition-opacity duration-500 ${
          darkMode ? "opacity-15" : "opacity-40"
        }`}
      />

      {/* Enhanced wave canvas */}
      <canvas
        ref={waveRef}
        className="absolute inset-0 w-full h-full -z-10 opacity-60 hidden md:block transition-opacity duration-500"
      />

      {/* Dynamic gradient background */}
      <div
        className="absolute inset-0 -z-15 transition-all duration-700"
        style={{
          background: darkMode
            ? `radial-gradient(ellipse at ${mousePosition.x * 100 + 50}% ${
                mousePosition.y * 100 + 50
              }%, #10b98120 0%, #0d948815 25%, #14b8a610 50%, transparent 80%)`
            : `radial-gradient(ellipse at ${mousePosition.x * 100 + 50}% ${
                mousePosition.y * 100 + 50
              }%, #06b6d430 0%, #3b82f620 25%, #8b5cf615 50%, transparent 85%)`,
          transform: `scale(${1 + mousePosition.x * 0.05})`,
        }}
      />

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(isMobile ? 6 : 12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-[80px] md:blur-[120px]"
            style={{
              width: `${isMobile ? 100 + i * 25 : 180 + i * 40}px`,
              height: `${isMobile ? 100 + i * 25 : 180 + i * 40}px`,
              left: `${2 + i * 8}%`,
              top: `${3 + i * 6}%`,
              opacity: 0.15 + (i % 3) * 0.05,
              backgroundColor: darkMode
                ? i % 5 === 0
                  ? "#10b981"
                  : i % 5 === 1
                  ? "#0d9488"
                  : i % 5 === 2
                  ? "#14b8a6"
                  : i % 5 === 3
                  ? "#0e9c6b"
                  : "#047857"
                : i % 5 === 0
                ? "#06b6d4"
                : i % 5 === 1
                ? "#3b82f6"
                : i % 5 === 2
                ? "#8b5cf6"
                : i % 5 === 3
                ? "#0ea5e9"
                : "#0284c7",
              animation: `float ${15 + i * 3}s infinite ease-in-out`,
              animationDelay: `${i * 1.5}s`,
              transform: `rotate(${i * 30}deg)`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Social Icons */}
      <div className="fixed left-3 sm:left-4 md:left-6 bottom-4 sm:bottom-6 md:bottom-8 flex flex-col gap-2 sm:gap-3 z-50">
        <button
          onClick={openGithub}
          onMouseEnter={() => setSocialHover("github")}
          onMouseLeave={() => setSocialHover(null)}
          aria-label="GitHub Profile"
          className={`group relative p-2.5 sm:p-3 rounded-xl backdrop-blur-lg border transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 ${
            darkMode
              ? "bg-gray-900/60 hover:bg-gray-800/80 border-gray-700/50 hover:border-emerald-500/50 shadow-lg shadow-gray-900/20 hover:shadow-emerald-500/25"
              : "bg-white/60 hover:bg-white/90 border-gray-200/50 hover:border-gray-400/50 shadow-lg shadow-gray-200/30 hover:shadow-gray-400/30"
          }`}
        >
          <FiGithub
            className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
              darkMode
                ? "text-gray-300 group-hover:text-emerald-400"
                : "text-gray-700 group-hover:text-gray-900"
            }`}
          />
          {socialHover === "github" && (
            <div
              className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                darkMode
                  ? "bg-gray-800 text-gray-200 border border-gray-700"
                  : "bg-white text-gray-800 border border-gray-200 shadow-lg"
              }`}
            >
              GitHub Profile
              <div
                className={`absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-r-4 ${
                  darkMode ? "border-r-gray-800" : "border-r-white"
                }`}
              />
            </div>
          )}
        </button>

        <button
          onClick={openLinkedIn}
          onMouseEnter={() => setSocialHover("linkedin")}
          onMouseLeave={() => setSocialHover(null)}
          aria-label="LinkedIn Profile"
          className={`group relative p-2.5 sm:p-3 rounded-xl backdrop-blur-lg border transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 ${
            darkMode
              ? "bg-gray-900/60 hover:bg-blue-900/60 border-gray-700/50 hover:border-blue-500/50 shadow-lg shadow-gray-900/20 hover:shadow-blue-500/25"
              : "bg-white/60 hover:bg-blue-50/90 border-gray-200/50 hover:border-blue-300/50 shadow-lg shadow-gray-200/30 hover:shadow-blue-200/40"
          }`}
        >
          <FiLinkedin
            className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
              darkMode
                ? "text-gray-300 group-hover:text-blue-400"
                : "text-gray-700 group-hover:text-blue-600"
            }`}
          />
          {socialHover === "linkedin" && (
            <div
              className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                darkMode
                  ? "bg-gray-800 text-gray-200 border border-gray-700"
                  : "bg-white text-gray-800 border border-gray-200 shadow-lg"
              }`}
            >
              LinkedIn Profile
              <div
                className={`absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-r-4 ${
                  darkMode ? "border-r-gray-800" : "border-r-white"
                }`}
              />
            </div>
          )}
        </button>
      </div>

      {/* Enhanced main content with entrance animations */}
      <div
        className={`text-center relative z-10 transition-all duration-1000 ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <div
          className={`mb-4 sm:mb-6 md:mb-8 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full mb-2 sm:mb-3 md:mb-4 border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "bg-emerald-900/50 text-emerald-300 border-emerald-700/60 shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/40"
                : "bg-emerald-50/90 text-emerald-800 border-emerald-300/60 shadow-lg shadow-emerald-200/40 hover:shadow-emerald-200/50"
            }`}
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Full Stack Developer | IoT Enthusiast
          </span>
        </div>

        <h1
          className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight bg-gradient-to-r ${
            darkMode
              ? "from-emerald-400 via-teal-300 to-cyan-300"
              : "from-emerald-700 via-teal-600 to-blue-600"
          } bg-clip-text text-transparent transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-6"
          }`}
          style={{
            backgroundSize: "200% 200%",
            animation: "gradientShift 6s ease infinite",
          }}
        >
          Aditya{" "}
          <span
            className={`transition-colors duration-300 ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Thodsare
          </span>
        </h1>

        <h2
          className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0 transition-all duration-1000 delay-400 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          <span
            className={`transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Building scalable web applications with{" "}
            <span
              className={`font-semibold bg-gradient-to-r ${
                darkMode
                  ? "from-teal-400 to-emerald-400"
                  : "from-teal-600 to-emerald-600"
              } bg-clip-text text-transparent`}
            >
              Spring Boot & React
            </span>{" "}
            |{" "}
          </span>
          <span
            className={`font-semibold bg-gradient-to-r ${
              darkMode
                ? "from-cyan-400 to-blue-400"
                : "from-blue-600 to-indigo-600"
            } bg-clip-text text-transparent`}
          >
            IoT Enthusiast
          </span>
          <span
            className={`transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {" "}
            | Problem Solver
          </span>
        </h2>

        <p
          className={`text-xs xs:text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-12 px-3 sm:px-4 transition-all duration-1000 delay-500 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          } ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          I craft efficient, user-centric solutions that bridge the gap between
          technology and business needs, with a passion for creating meaningful
          digital experiences.
        </p>

        {/* Enhanced CTA buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 transition-all duration-1000 delay-600 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          <a
            href="#contact"
            className={`group inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3 md:px-9 md:py-4 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-xs xs:text-sm sm:text-base ${
              darkMode
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50"
            }`}
          >
            Let's Collaborate
            <FiExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#projects"
            className={`group inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3 md:px-9 md:py-4 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-xs xs:text-sm sm:text-base backdrop-blur-sm ${
              darkMode
                ? "bg-gray-800/80 hover:bg-gray-700/90 text-gray-100 border border-gray-600/50 hover:border-gray-500/70 shadow-xl shadow-gray-900/30"
                : "bg-white/90 hover:bg-white text-gray-800 border border-gray-300/50 hover:border-gray-400/70 shadow-xl shadow-gray-200/50"
            }`}
          >
            View My Work
            <div className="w-2 h-2 bg-current rounded-full group-hover:animate-ping" />
          </a>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNextSection}
          className={`group p-2 xs:p-2.5 sm:p-3 rounded-full backdrop-blur-lg border transition-all duration-300 hover:scale-110 animate-bounce hover:animate-none ${
            darkMode
              ? "bg-gray-900/50 border-gray-700/50 hover:bg-gray-800/70 hover:border-gray-600 text-gray-300 hover:text-emerald-400"
              : "bg-white/50 border-gray-300/50 hover:bg-white/80 hover:border-gray-400 text-gray-600 hover:text-blue-600"
          }`}
          aria-label="Scroll to next section"
        >
          <FiChevronDown className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(${isMobile ? "-15px" : "-30px"})
              translateX(${isMobile ? "8px" : "15px"}) rotate(90deg);
          }
          50% {
            transform: translateY(0) translateX(${isMobile ? "15px" : "30px"})
              rotate(180deg);
          }
          75% {
            transform: translateY(${isMobile ? "15px" : "30px"})
              translateX(${isMobile ? "8px" : "15px"}) rotate(270deg);
          }
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
