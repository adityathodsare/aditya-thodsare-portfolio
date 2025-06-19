"use client";

import { FiLinkedin, FiGithub } from "react-icons/fi";

export default function Footer({ darkMode, activeSection, handleNavClick }) {
  return (
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
  );
}
