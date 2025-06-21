"use client";
import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
} from "react-icons/fi";

export default function ContactSection({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleEmail = async (formData) => {
    try {
      const response = await fetch("http://localhost:8080/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error sending email:", error);
      return { success: false, message: "Failed to send email" };
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Enhanced validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }
      if (formData.message.trim().length < 10) {
        throw new Error("Message should be at least 10 characters");
      }

      // Send email via Spring Boot backend
      const emailResponse = await handleEmail(formData);

      if (!emailResponse.success) {
        throw new Error(emailResponse.message || "Email submission failed");
      }

      // Also submit to Google Scripts (keeping your existing functionality)
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      const googleResponse = await fetch(
        "https://script.google.com/macros/s/AKfycbw9rRdEcA1Y5DYmsxaD_UT6SIq3M1_M7CA71Ct7qGpNFHB8vNXjQQynv-QNSRZBKgqe/exec",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify(formData),
          signal: controller.signal,
        }
      );

      clearTimeout(timeout);

      if (!googleResponse.ok) {
        throw new Error(`HTTP error! status: ${googleResponse.status}`);
      }

      const result = await googleResponse.json();

      if (!result.success) {
        throw new Error(result.error || "Submission failed");
      }

      setSubmitStatus({
        success: true,
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          error.name === "AbortError"
            ? "Request timed out. Please try again."
            : error.message ||
              "Failed to send message. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onSubmit={handleSubmit}
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
                value: formData.name,
                onChange: handleChange,
              },
              {
                id: "email",
                label: "Email Address",
                placeholder: "john@example.com",
                type: "email",
                value: formData.email,
                onChange: handleChange,
              },
              {
                id: "subject",
                label: "Subject",
                placeholder: "Project Inquiry",
                type: "text",
                value: formData.subject,
                onChange: handleChange,
              },
              {
                id: "message",
                label: "Your Message",
                placeholder: "Hello Aditya, I'd like to discuss...",
                type: "textarea",
                value: formData.message,
                onChange: handleChange,
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
                    value={field.value}
                    onChange={field.onChange}
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
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              </div>
            ))}

            {/* Status message */}
            {submitStatus && (
              <div
                className={`mb-4 p-3 rounded-lg ${
                  submitStatus.success
                    ? darkMode
                      ? "bg-emerald-900/30 text-emerald-400"
                      : "bg-emerald-100 text-emerald-700"
                    : darkMode
                    ? "bg-red-900/30 text-red-400"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-all transform hover:-translate-y-0.5 flex items-center justify-center ${
                darkMode
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="mr-2" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
