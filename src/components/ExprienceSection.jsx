export default function ExperienceSection({ darkMode }) {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12 md:mb-16">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r ${
            darkMode
              ? "from-emerald-400 to-teal-300"
              : "from-emerald-600 to-teal-500"
          } bg-clip-text text-transparent inline-block`}
        >
          Professional Journey
        </h2>
        <div className="w-20 sm:w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 mb-6 sm:mb-8 rounded-full"></div>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto dark:text-gray-300 text-gray-700 leading-relaxed">
          My career path and the valuable experiences I've gained along the way
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className={`hidden md:block absolute left-6 md:left-1/2 h-full w-0.5 transform -translate-x-1/2 ${
            darkMode ? "bg-gray-700" : "bg-gray-300"
          }`}
        ></div>

        {/* Experience items */}
        <div className="space-y-8 sm:space-y-12">
          {/* Experience Item 1 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="hidden md:block md:w-1/2 pr-8 lg:pr-12"></div>
            <div className="z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
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
            <div className="md:w-1/2 md:pl-8 lg:pl-12 mt-6 md:mt-0">
              <div
                className={`p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transition-all hover:shadow-2xl ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 sm:gap-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold dark:text-white text-gray-800">
                      Java Full Stack Developer Intern
                    </h3>
                    <p className="text-md sm:text-lg dark:text-emerald-400 text-emerald-600">
                      Shorat Innovations Pvt Ltd
                    </p>
                  </div>
                  <div
                    className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium ${
                      darkMode
                        ? "bg-emerald-900/40 text-emerald-400"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    Jan 2025 - Apr 2025
                  </div>
                </div>
                <ul className="mt-4 space-y-2 sm:space-y-3 dark:text-gray-300 text-gray-600 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span
                      className={`inline-block mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full ${
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
                      className={`inline-block mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full ${
                        darkMode ? "bg-emerald-400" : "bg-emerald-500"
                      }`}
                    ></span>
                    <span>
                      Implemented Spring Security for robust authentication and
                      authorization of REST APIs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className={`inline-block mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full ${
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
                      className={`inline-block mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full ${
                        darkMode ? "bg-emerald-400" : "bg-emerald-500"
                      }`}
                    ></span>
                    <span>
                      Designed and optimized backend architectures for seamless
                      frontend integration
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-8 lg:pr-12 order-2 md:order-1">
              <div
                className={`p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transition-all hover:shadow-2xl ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 sm:gap-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold dark:text-white text-gray-800">
                      Bachelor of Engineering (CGPA: 9.43/10)
                    </h3>
                    <p className="text-md sm:text-lg dark:text-emerald-400 text-emerald-600">
                      Electronics and Telecommunication
                    </p>
                  </div>
                  <div
                    className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium ${
                      darkMode
                        ? "bg-emerald-900/40 text-emerald-400"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    2022 - 2026
                  </div>
                </div>
                <ul className="mt-4 space-y-2 sm:space-y-3 dark:text-gray-300 text-gray-600 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span
                      className={`inline-block mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full ${
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
                      className={`inline-block mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full ${
                        darkMode ? "bg-emerald-400" : "bg-emerald-500"
                      }`}
                    ></span>
                    <span>
                      Coursework in IoT, embedded systems, and web technologies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className={`inline-block mr-2 mt-1 flex-shrink-0 w-2 h-2 rounded-full ${
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
            <div className="z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2 order-1 md:order-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
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
            <div className="hidden md:block md:w-1/2 pl-8 lg:pl-12 order-3"></div>
          </div>
        </div>
        {/* Contact Button with Green Blend */}
        <div className="mt-16 md:mt-20 text-center">
          <a
            href="#contact"
            className={`relative inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 overflow-hidden font-medium rounded-full group ${
              darkMode ? "text-amber-50" : "text-black"
            }`}
          >
            <span
              className={`absolute inset-0 w-full h-full transition-all duration-300 ease-out ${
                darkMode
                  ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
                  : "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
              } group-hover:opacity-90 rounded-full`}
            ></span>
            <span className="absolute inset-0 w-full h-full rounded-full opacity-5 bg-black"></span>
            <span className="relative flex items-center text-sm sm:text-base font-semibold">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
              Send Message
            </span>
            <span
              className={`absolute inset-0 border-2 border-transparent rounded-full group-hover:border-white/30 ${
                darkMode
                  ? "group-hover:border-white/30"
                  : "group-hover:border-black/10"
              }`}
            ></span>
            {/* Glow effect */}
            <span
              className={`absolute -inset-1 opacity-20 blur-md ${
                darkMode
                  ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
                  : "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
              } rounded-full animate-pulse`}
            ></span>
          </a>
        </div>
      </div>
    </section>
  );
}
