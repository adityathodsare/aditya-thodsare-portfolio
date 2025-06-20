"use client";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
} from "react-icons/fi";

export default function ContactSection({ darkMode }) {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12 md:mb-16">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${
            darkMode
              ? "from-emerald-400 to-teal-300"
              : "from-emerald-600 to-teal-500"
          } bg-clip-text text-transparent inline-block`}
        >
          Get In Touch
        </h2>
        <div className="w-20 md:w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 mb-6 md:mb-8 rounded-full"></div>
        <p className="text-lg md:text-xl max-w-3xl mx-auto dark:text-gray-300 text-gray-700 leading-relaxed">
          Have a project in mind or want to discuss potential opportunities? I'd
          love to hear from you!
        </p>
      </div>

      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Information - Now appears first on mobile */}
        <div className="mt-8 md:mt-0">
          <div
            className={`p-6 md:p-8 rounded-2xl shadow-xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 dark:text-white text-gray-800">
              Contact Information
            </h3>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start">
                <div
                  className={`p-2 md:p-3 rounded-xl mr-3 md:mr-4 ${
                    darkMode
                      ? "bg-emerald-900/30 text-emerald-400"
                      : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  <FiPhone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-medium dark:text-white text-gray-800 text-sm md:text-base">
                    Phone
                  </h4>
                  <p className="dark:text-gray-400 text-gray-600 text-sm md:text-base">
                    +91 8263878470
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div
                  className={`p-2 md:p-3 rounded-xl mr-3 md:mr-4 ${
                    darkMode
                      ? "bg-emerald-900/30 text-emerald-400"
                      : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  <FiMail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-medium dark:text-white text-gray-800 text-sm md:text-base">
                    Email
                  </h4>
                  <p className="dark:text-gray-400 text-gray-600 text-sm md:text-base">
                    thodsareaditya@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div
                  className={`p-2 md:p-3 rounded-xl mr-3 md:mr-4 ${
                    darkMode
                      ? "bg-emerald-900/30 text-emerald-400"
                      : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  <FiMapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-medium dark:text-white text-gray-800 text-sm md:text-base">
                    Location
                  </h4>
                  <p className="dark:text-gray-400 text-gray-600 text-sm md:text-base">
                    Pune/Pimpri-Chinchwad Area, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12">
              <h4 className="font-medium dark:text-white text-gray-800 mb-3 md:mb-4 text-sm md:text-base">
                Connect with me
              </h4>
              <div className="flex space-x-3 md:space-x-4">
                <a
                  href="https://linkedin.com/in/adityathodsare-475366289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 md:p-3 rounded-xl transition-all hover:transform hover:-translate-y-1 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/20"
                      : "bg-gray-200 hover:bg-emerald-600 text-gray-700 hover:text-white hover:shadow-lg hover:shadow-emerald-500/20"
                  }`}
                >
                  <FiLinkedin className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a
                  href="https://github.com/adityathodsare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 md:p-3 rounded-xl transition-all hover:transform hover:-translate-y-1 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/20"
                      : "bg-gray-200 hover:bg-emerald-600 text-gray-700 hover:text-white hover:shadow-lg hover:shadow-emerald-500/20"
                  }`}
                >
                  <FiGithub className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form - Now appears below contact info on mobile */}
        <div>
          <form
            className={`p-6 md:p-8 rounded-2xl shadow-xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="mb-4 md:mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 dark:text-gray-300 text-gray-600"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                }`}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-4 md:mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 dark:text-gray-300 text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                }`}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="mb-4 md:mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2 dark:text-gray-300 text-gray-600"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                }`}
                placeholder="Project Inquiry"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 dark:text-gray-300 text-gray-600"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                }`}
                placeholder="Hello Aditya, I'd like to discuss..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full py-2 md:py-3 px-4 md:px-6 rounded-lg font-medium transition-all transform hover:-translate-y-0.5 flex items-center justify-center ${
                darkMode
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              }`}
            >
              <FiSend className="mr-2 w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
