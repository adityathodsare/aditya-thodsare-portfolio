"use client";

import { FiLinkedin, FiGithub } from "react-icons/fi";

export default function Footer({ darkMode, activeSection, handleNavClick }) {
  return (
    <footer className={`py-12 ${darkMode ? "bg-[#0a0a0a]" : "bg-emerald-50"}`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <a
            href="#home"
            className={`text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-300 dark:to-teal-200 bg-clip-text text-transparent hover:underline hover:underline-offset-4 transition-all`}
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
                    ? "text-emerald-700 dark:text-emerald-200 font-semibold"
                    : "text-emerald-800/80 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-200"
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
            className={`p-2 rounded-full transition-all hover:transform hover:-translate-y-1 group ${
              darkMode
                ? "bg-[#111111] hover:bg-[#1a1a1a] text-gray-300 hover:text-emerald-200"
                : "bg-white hover:bg-emerald-100 text-emerald-700 hover:text-emerald-600"
            } shadow-md hover:shadow-lg ${
              darkMode
                ? "hover:shadow-emerald-500/20"
                : "hover:shadow-emerald-300/50"
            }`}
          >
            <FiLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/adityathodsare"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-all hover:transform hover:-translate-y-1 group ${
              darkMode
                ? "bg-[#111111] hover:bg-[#1a1a1a] text-gray-300 hover:text-emerald-200"
                : "bg-white hover:bg-emerald-100 text-emerald-700 hover:text-emerald-600"
            } shadow-md hover:shadow-lg ${
              darkMode
                ? "hover:shadow-emerald-500/20"
                : "hover:shadow-emerald-300/50"
            }`}
          >
            <FiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <p
          className={`text-sm ${
            darkMode ? "text-gray-500" : "text-emerald-800/80"
          }`}
        >
          &copy; {new Date().getFullYear()} Aditya Thodsare. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
