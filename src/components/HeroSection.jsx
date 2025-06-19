import { FiChevronDown } from "react-icons/fi";
import { useEffect, useRef } from "react";

export default function HeroSection({
  darkMode,
  mousePosition,
  handleNavClick,
  activeSection,
}) {
  const canvasRef = useRef(null);
  const waveRef = useRef(null);

  const scrollToNextSection = () => {
    const sections = ["home", "about", "experience", "projects", "contact"];
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      handleNavClick(sections[currentIndex + 1]);
    }
  };

  useEffect(() => {
    // Particle animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    const baseColor = darkMode ? [16, 185, 129] : [5, 150, 105];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${
          Math.random() * 0.2 + 0.05
        })`,
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    };

    const particleAnimationId = requestAnimationFrame(animateParticles);

    // Wave animation
    const waveCanvas = waveRef.current;
    if (!waveCanvas) return;

    const waveCtx = waveCanvas.getContext("2d");
    waveCanvas.width = waveCanvas.offsetWidth;
    waveCanvas.height = waveCanvas.offsetHeight;

    let time = 0;
    const waveColors = darkMode
      ? ["#10b981", "#0d9488", "#14b8a6", "#0e9c6b"]
      : ["#06b6d4", "#3b82f6", "#8b5cf6", "#0ea5e9"];

    const animateWaves = () => {
      waveCtx.clearRect(0, 0, waveCanvas.width, waveCanvas.height);

      // Draw multiple wave layers
      for (let i = 0; i < 4; i++) {
        const amplitude = 50 + i * 20;
        const frequency = 0.01 + i * 0.005;
        const speed = 0.05 + i * 0.02;

        waveCtx.beginPath();
        waveCtx.moveTo(0, waveCanvas.height / 2);

        for (let x = 0; x < waveCanvas.width; x++) {
          const y =
            waveCanvas.height / 2 +
            amplitude *
              Math.sin(frequency * x + time * speed) *
              Math.sin(frequency * x * 0.5 + time * speed * 0.7);
          waveCtx.lineTo(x, y);
        }

        waveCtx.strokeStyle = waveColors[i];
        waveCtx.lineWidth = 2;
        waveCtx.globalAlpha = 0.15 + i * 0.05;
        waveCtx.stroke();
      }

      time += 0.05;
      requestAnimationFrame(animateWaves);
    };

    const waveAnimationId = requestAnimationFrame(animateWaves);

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      waveCanvas.width = waveCanvas.offsetWidth;
      waveCanvas.height = waveCanvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(particleAnimationId);
      cancelAnimationFrame(waveAnimationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [darkMode]);

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto flex flex-col justify-center relative overflow-hidden"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full -z-10 ${
          darkMode ? "opacity-10" : "opacity-30"
        }`}
      />

      {/* Wave canvas */}
      <canvas
        ref={waveRef}
        className="absolute inset-0 w-full h-full -z-10 opacity-70"
      />

      {/* Animated gradient background */}
      <div
        className="absolute inset-0 -z-20 transition-all duration-1000"
        style={{
          background: darkMode
            ? `radial-gradient(circle at ${mousePosition.x * 100 + 50}% ${
                mousePosition.y * 100 + 50
              }%, #04785720 0%, #111827 80%)`
            : `radial-gradient(circle at ${mousePosition.x * 100 + 50}% ${
                mousePosition.y * 100 + 50
              }%, #06b6d420 0%, #f8fafc 95%)`,
          opacity: darkMode ? 0.8 : 0.9,
        }}
      />

      {/* Neon glow elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-[100px] animate-float"
            style={{
              width: `${150 + i * 60}px`,
              height: `${150 + i * 60}px`,
              left: `${5 + i * 10}%`,
              top: `${5 + i * 7}%`,
              animationDuration: `${20 + i * 5}s`,
              animationDelay: `${i * 2}s`,
              opacity: 0.3,
              backgroundColor: darkMode
                ? i % 4 === 0
                  ? "#10b981"
                  : i % 4 === 1
                  ? "#0d9488"
                  : i % 4 === 2
                  ? "#14b8a6"
                  : "#0e9c6b"
                : i % 4 === 0
                ? "#06b6d4"
                : i % 4 === 1
                ? "#3b82f6"
                : i % 4 === 2
                ? "#8b5cf6"
                : "#0ea5e9",
              boxShadow: `0 0 60px 30px ${
                darkMode
                  ? i % 4 === 0
                    ? "#10b98140"
                    : i % 4 === 1
                    ? "#0d948840"
                    : i % 4 === 2
                    ? "#14b8a640"
                    : "#0e9c6b40"
                  : i % 4 === 0
                  ? "#06b6d440"
                  : i % 4 === 1
                  ? "#3b82f640"
                  : i % 4 === 2
                  ? "#8b5cf640"
                  : "#0ea5e940"
              }`,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        <div className="mb-8">
          <span
            className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full mb-4 border backdrop-blur-sm
            ${
              darkMode
                ? "bg-emerald-900/40 text-emerald-300 border-emerald-800/50 shadow-lg shadow-emerald-900/20"
                : "bg-emerald-100/90 text-emerald-800 border-emerald-200 shadow-lg shadow-emerald-200/30"
            }`}
          >
            Full Stack Developer | IoT Enthusiast
          </span>
        </div>

        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r ${
            darkMode
              ? "from-emerald-400 to-teal-300"
              : "from-emerald-700 to-teal-600"
          } bg-clip-text text-transparent`}
        >
          Aditya{" "}
          <span className={darkMode ? "text-gray-100" : "text-gray-900"}>
            Thodsare
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
          <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
            Building scalable web applications with{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-teal-300" : "text-teal-600"
              }`}
            >
              {" "}
              Spring Boot & React{" "}
            </span>
            |{" "}
          </span>
          <span
            className={`font-semibold ${
              darkMode ? "text-teal-300" : "text-teal-600"
            }`}
          >
            IoT Enthusiast
          </span>
          <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
            {" "}
            | Problem Solver
          </span>
        </h2>

        <p
          className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I craft efficient, user-centric solutions that bridge the gap between
          technology and business needs.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className={`px-8 py-3.5 rounded-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-xl ${
              darkMode
                ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/30"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
            }`}
          >
            Let's Collaborate
          </a>
          <a
            href="#projects"
            className={`px-8 py-3.5 rounded-lg font-medium transition-all transform hover:-translate-y-1 hover:shadow-xl ${
              darkMode
                ? "bg-gray-800/80 hover:bg-gray-700/90 text-gray-100 border border-gray-700 hover:border-gray-600 shadow-lg shadow-gray-900/20"
                : "bg-white/90 hover:bg-white text-gray-800 border border-gray-200 hover:border-gray-300 shadow-lg shadow-gray-200/50"
            }`}
          >
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToNextSection}
          className="p-3 rounded-full backdrop-blur-md border hover:shadow-md transition-all"
          style={{
            backgroundColor: darkMode
              ? "rgba(17, 24, 39, 0.5)"
              : "rgba(255, 255, 255, 0.3)",
            borderColor: darkMode
              ? "rgba(55, 65, 81, 0.5)"
              : "rgba(209, 213, 219, 0.5)",
            color: darkMode ? "#d1d5db" : "#374151",
          }}
          aria-label="Scroll down"
        >
          <FiChevronDown className="w-6 h-6" />
        </button>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-40px) translateX(20px);
          }
          50% {
            transform: translateY(0) translateX(40px);
          }
          75% {
            transform: translateY(40px) translateX(20px);
          }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
