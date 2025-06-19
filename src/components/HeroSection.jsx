import { FiChevronDown } from "react-icons/fi";

export default function HeroSection({
  darkMode,
  mousePosition,
  handleNavClick,
  activeSection,
}) {
  const scrollToNextSection = () => {
    const sections = ["home", "about", "experience", "projects", "contact"];
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      handleNavClick(sections[currentIndex + 1]);
    }
  };

  return (
    <section
      id="home"
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

        <h2 className="text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto dark:text-gray-300 text-gray-700">
          Building scalable web applications with Spring Boot & React | IoT
          Enthusiast | Problem Solver
        </h2>

        <p className="text-lg md:text-xl max-w-3xl mx-auto dark:text-gray-400 text-gray-600 mb-12">
          I craft efficient, user-centric solutions that bridge the gap between
          technology and business needs.
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
  );
}
