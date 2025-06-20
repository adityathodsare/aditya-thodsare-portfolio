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
      {/* Force black text in light mode with !important */}
      <style jsx>{`
        .light-mode-text {
          color: #000 !important;
        }
        .light-mode-bg {
          background-color: #fff !important;
        }
      `}</style>

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
        <p
          className={`text-lg md:text-xl max-w-3xl mx-auto ${
            darkMode ? "text-gray-300" : "light-mode-text"
          } leading-relaxed`}
        >
          Have a project in mind or want to discuss potential opportunities? I'd
          love to hear from you!
        </p>
      </div>

      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Information */}
        <div className="mt-8 md:mt-0">
          <div
            className={`p-6 md:p-8 rounded-2xl shadow-xl ${
              darkMode ? "bg-gray-800" : "light-mode-bg"
            }`}
          >
            <h3
              className={`text-xl md:text-2xl font-bold mb-6 ${
                darkMode ? "text-white" : "light-mode-text"
              }`}
            >
              Contact Information
            </h3>

            <div className="space-y-4">
              {[
                {
                  icon: <FiPhone className="w-6 h-6" />,
                  label: "Phone",
                  text: "+91 8263878470",
                },
                {
                  icon: <FiMail className="w-6 h-6" />,
                  label: "Email",
                  text: "thodsareaditya@gmail.com",
                },
                {
                  icon: <FiMapPin className="w-6 h-6" />,
                  label: "Location",
                  text: "Pune/Pimpri-Chinchwad Area, India",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className={`p-3 rounded-xl mr-4 ${
                      darkMode
                        ? "bg-emerald-900/30 text-emerald-400"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className={`font-medium ${
                        darkMode ? "text-white" : "light-mode-text"
                      }`}
                    >
                      {item.label}
                    </p>
                    <p
                      className={darkMode ? "text-gray-400" : "light-mode-text"}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links Section */}
            <div className="mt-8">
              <h4
                className={`font-medium mb-4 ${
                  darkMode ? "text-white" : "light-mode-text"
                }`}
              >
                Connect with me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/adityathodsare-475366289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all hover:transform hover:-translate-y-1 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/20"
                      : "bg-gray-200 hover:bg-emerald-600 text-gray-900 hover:text-white hover:shadow-lg hover:shadow-emerald-500/20"
                  }`}
                >
                  <FiLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/adityathodsare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all hover:transform hover:-translate-y-1 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/20"
                      : "bg-gray-200 hover:bg-emerald-600 text-gray-900 hover:text-white hover:shadow-lg hover:shadow-emerald-500/20"
                  }`}
                >
                  <FiGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div>
          <form
            className={`p-6 md:p-8 rounded-2xl shadow-xl ${
              darkMode ? "bg-gray-800" : "light-mode-bg"
            }`}
          >
            {[
              {
                id: "name",
                label: "Your Name",
                placeholder: "John Doe",
                type: "text",
              },
              {
                id: "email",
                label: "Email Address",
                placeholder: "john@example.com",
                type: "email",
              },
              {
                id: "subject",
                label: "Subject",
                placeholder: "Project Inquiry",
                type: "text",
              },
              {
                id: "message",
                label: "Your Message",
                placeholder: "Hello Aditya, I'd like to discuss...",
                type: "textarea",
              },
            ].map((field) => (
              <div key={field.id} className="mb-6">
                <label
                  htmlFor={field.id}
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "light-mode-text"
                  }`}
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "light-mode-bg border-gray-300 light-mode-text placeholder-gray-400"
                    }`}
                    placeholder={field.placeholder}
                    required
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "light-mode-bg border-gray-300 light-mode-text placeholder-gray-400"
                    }`}
                    placeholder={field.placeholder}
                    required
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className={`w-full py-3 px-6 rounded-lg font-medium transition-all transform hover:-translate-y-0.5 flex items-center justify-center ${
                darkMode
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              }`}
            >
              <FiSend className="mr-2" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
