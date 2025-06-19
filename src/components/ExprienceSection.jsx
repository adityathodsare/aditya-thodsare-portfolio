export default function ExperienceSection({ darkMode }) {
  return (
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
        <p className="text-xl max-w-3xl mx-auto dark:text-gray-300 text-gray-700 leading-relaxed">
          My career path and the valuable experiences I've gained along the way
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
                      Implemented Spring Security for robust authentication and
                      authorization of REST APIs
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
                      Coursework in IoT, embedded systems, and web technologies
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
  );
}
