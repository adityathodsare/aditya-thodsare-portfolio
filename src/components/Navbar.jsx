import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar({
  darkMode,
  setDarkMode,
  activeSection,
  handleNavClick,
  scrolled,
}) {
  return (
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
                      : "text-gray-700 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400"
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
  );
}
