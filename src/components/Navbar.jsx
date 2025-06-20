import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar({
  darkMode,
  setDarkMode,
  activeSection,
  handleNavClick,
  scrolled,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleMobileNavClick = (item) => {
    handleNavClick(item);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [scrolled]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? darkMode
              ? "py-2 backdrop-blur-lg bg-gray-900/95 shadow-lg"
              : "py-2 backdrop-blur-lg bg-white/95 shadow-lg"
            : darkMode
            ? "py-4 backdrop-blur-md bg-gray-900/90"
            : "py-4 backdrop-blur-md bg-white/90"
        } ${animate ? "animate-fadeInDown" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#34D399] via-[#A855F7] to-[#F43F5E] bg-clip-text text-transparent animate-gradient">
                Aditya Thodsare
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {["home", "about", "experience", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`capitalize px-3 py-2 text-sm font-medium transition-all relative group ${
                      activeSection === item
                        ? "text-emerald-500 dark:text-emerald-400 font-semibold"
                        : darkMode
                        ? "text-gray-300 hover:text-emerald-400"
                        : "text-gray-700 hover:text-emerald-600"
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 transition-all duration-300 ${
                        activeSection === item
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </button>
                )
              )}

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all hover:scale-110 active:scale-95 ${
                  darkMode
                    ? "bg-emerald-900/20 text-emerald-400 hover:bg-emerald-900/30"
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

              {/* CTA Button */}
              <a
                href="#contact"
                className={`px-4 py-2 rounded-md font-medium transition-all transform hover:scale-105 active:scale-95 ${
                  darkMode
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/20"
                    : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/20"
                }`}
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all ${
                  darkMode
                    ? "bg-emerald-900/20 text-emerald-400 hover:bg-emerald-900/30"
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
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md transition-all ${
                  darkMode
                    ? "text-gray-300 hover:text-emerald-400"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 right-0 shadow-xl rounded-b-lg transition-all duration-300 ${
              darkMode
                ? "bg-gray-900 shadow-emerald-500/10"
                : "bg-white shadow-gray-400/10"
            }`}
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {["home", "about", "experience", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => handleMobileNavClick(item)}
                    className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all ${
                      activeSection === item
                        ? darkMode
                          ? "bg-emerald-900/30 text-emerald-400"
                          : "bg-emerald-50 text-emerald-600"
                        : darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
              <a
                href="#contact"
                className={`block w-full text-center px-4 py-3 rounded-md text-base font-medium mt-2 transition-all ${
                  darkMode
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                    : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
                }`}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>

      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}
