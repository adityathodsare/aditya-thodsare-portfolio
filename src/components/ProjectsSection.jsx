"use client";

import {
  FiGithub,
  FiExternalLink,
  FiCpu,
  FiMessageSquare,
  FiWifi,
} from "react-icons/fi";
import { useState } from "react";

export default function ProjectsSection({ darkMode }) {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: "safev",
      title: "SAFE-V",
      description:
        "An innovative IoT-based solution for real-time vehicle monitoring and emergency alerts, enhancing driver safety with live location tracking, accident detection, and automated emergency responses.",
      technologies: ["IoT", "Next.js", "Spring Boot", "MySQL", "WebSocket"],
      image: "/image.png",
      githubLink: "https://github.com/adityathodsare/safev-frontend-nextjs",
      demoLink:
        "https://safev-frontend-nextjs-jefddhzjj-adityathodsares-projects.vercel.app/",
      category: "iot",
    },
    {
      id: "healthorbit",
      title: "HealthOrbit AI",
      description:
        "AI-powered health and fitness platform delivering personalized fitness recommendations and doctor-like symptom analysis. Built on an event-driven microservices architecture with RabbitMQ for asynchronous communication between services (User, Activity, Health, and AI Services). Features include dynamic service discovery with Eureka Server, AI-powered recommendations via Gemini API, and data persistence with MongoDB and PostgreSQL.",
      technologies: [
        "Spring Boot",
        "RabbitMQ",
        "Next.js",
        "Gemini API",
        "Microservices",
        "MongoDB",
        "PostgreSQL",
        "Eureka Server",
      ],
      image: "/healthorbit.png",
      githubLinks: [
        {
          label: "Frontend",
          url: "https://github.com/adityathodsare/healthOrbit-Ai",
        },
        {
          label: "Backend",
          url: "https://github.com/adityathodsare/microservices-project-health-fitness-ai",
        },
      ],
      demoLink:
        "https://www.linkedin.com/posts/aditya-thodsare-475366289_springboot-microservices-rabbitmq-activity-7349101989458235393-2Av1",
      architectureLink:
        "https://app.eraser.io/workspace/bIMvUVxGVW2MvIYOgsOc?origin=share&elements=uKAcreQNH_YZDVULBAVyEA",
      category: "fullstack",
    },
    {
      id: "printify",
      title: "Printify",
      description:
        "A web app revolutionizing print shop management with room-based organization, secure document uploads, and anonymous communication. Features include unique rooms for print jobs, secure file sharing via links or direct uploads, and private chat functionality without sharing personal details.",
      technologies: ["React.js", "Vite", "Spring Boot", "WebSocket", "MongoDB"],
      image: "/printify.png",
      githubLink: "https://github.com/adityathodsare/project-Printify",
      demoLink:
        "https://www.linkedin.com/posts/aditya-thodsare-475366289_webapp-printify-springboot-activity-7284180807630368768-WPDF",
      category: "fullstack",
    },
    {
      id: "usermanagement",
      title: "User Management with JWT",
      description:
        "A comprehensive user management system implementing JWT authentication with role-based access control. Features secure password handling with encryption, refresh token rotation, and detailed audit logging. The system provides RESTful APIs for user registration, authentication, profile management, and admin functionalities.",
      technologies: [
        "Spring Security",
        "Spring Boot",
        "JWT",
        "REST APIs",
        "MySQL",
        "Hibernate",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      githubLink:
        "https://github.com/adityathodsare/spring-security-user-management-with-JWT",
      demoLink:
        "https://www.linkedin.com/posts/aditya-thodsare-475366289_springboot-springsecurity-jwt-activity-7308605498835054596-ANP8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEX_hRkBUWGwS0w62UxlXfQbiWqh9AcGe6I",
      category: "backend",
    },
    {
      id: "develevate",
      title: "DevElevate",
      description:
        "A modern course platform built with Next.js and TypeScript featuring responsive design, interactive learning tools, and a content management system. Includes features like course progress tracking, interactive coding exercises, and a community discussion forum.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "CMS"],
      image: "/develevate.png",
      githubLink: "https://github.com/adityathodsare/devElevate-nexjs-frontend",
      demoLink: "https://dev-elevate-nexjs-frontend.vercel.app/",
      category: "frontend",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12 md:mb-16">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r ${
            darkMode
              ? "from-emerald-400 to-teal-300"
              : "from-emerald-600 to-teal-500"
          } bg-clip-text text-transparent inline-block`}
        >
          Featured Projects
        </h2>
        <div className="w-20 sm:w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 mb-6 sm:mb-8 rounded-full"></div>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto dark:text-gray-300 text-gray-700 leading-relaxed px-2">
          Explore my portfolio of innovative solutions across different domains
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "all"
              ? darkMode
                ? "bg-emerald-600 text-white"
                : "bg-emerald-100 text-emerald-800"
              : darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setActiveTab("iot")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "iot"
              ? darkMode
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-800"
              : darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          <FiWifi className="inline mr-1" /> IoT
        </button>
        <button
          onClick={() => setActiveTab("fullstack")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "fullstack"
              ? darkMode
                ? "bg-purple-600 text-white"
                : "bg-purple-100 text-purple-800"
              : darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          Full Stack
        </button>
        <button
          onClick={() => setActiveTab("backend")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "backend"
              ? darkMode
                ? "bg-amber-600 text-white"
                : "bg-amber-100 text-amber-800"
              : darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          Backend
        </button>
        <button
          onClick={() => setActiveTab("frontend")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "frontend"
              ? darkMode
                ? "bg-cyan-600 text-white"
                : "bg-cyan-100 text-cyan-800"
              : darkMode
              ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          Frontend
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transition-all ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex flex-col md:flex-row">
              {/* Project Image */}
              <div className="md:w-1/3 relative overflow-hidden h-48 sm:h-56 md:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={800}
                  height={450}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent md:bg-gradient-to-r md:from-gray-900/60 md:to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="md:w-2/3 p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 sm:px-3 py-1 text-xs rounded-full font-medium ${
                        darkMode
                          ? "bg-gray-700 text-emerald-400"
                          : "bg-gray-100 text-emerald-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p
                  className={`dark:text-gray-300 text-gray-700 mb-4 text-sm sm:text-base ${
                    expandedProject === project.id ? "" : "line-clamp-3"
                  }`}
                >
                  {project.description}
                </p>

                <button
                  onClick={() => toggleExpand(project.id)}
                  className={`text-xs sm:text-sm font-medium mb-4 ${
                    darkMode
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-emerald-600 hover:text-emerald-500"
                  }`}
                >
                  {expandedProject === project.id ? "Show less" : "Read more"}
                </button>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {project.githubLinks ? (
                    project.githubLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center text-xs sm:text-sm font-medium px-3 py-2 rounded-lg ${
                          darkMode
                            ? "bg-gray-700 hover:bg-gray-600 text-emerald-400"
                            : "bg-gray-100 hover:bg-gray-200 text-emerald-600"
                        }`}
                      >
                        <FiGithub className="mr-2" /> {link.label}
                      </a>
                    ))
                  ) : (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-xs sm:text-sm font-medium px-3 py-2 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600 text-emerald-400"
                          : "bg-gray-100 hover:bg-gray-200 text-emerald-600"
                      }`}
                    >
                      <FiGithub className="mr-2" /> Code
                    </a>
                  )}

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-xs sm:text-sm font-medium px-3 py-2 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600 text-blue-400"
                          : "bg-gray-100 hover:bg-gray-200 text-blue-600"
                      }`}
                    >
                      <FiExternalLink className="mr-2" /> Demo
                    </a>
                  )}

                  {project.architectureLink && (
                    <a
                      href={project.architectureLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-xs sm:text-sm font-medium px-3 py-2 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600 text-purple-400"
                          : "bg-gray-100 hover:bg-gray-200 text-purple-600"
                      }`}
                    >
                      <FiCpu className="mr-2" /> Architecture
                    </a>
                  )}

                  {project.id === "printify" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-xs sm:text-sm font-medium px-3 py-2 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600 text-cyan-400"
                          : "bg-gray-100 hover:bg-gray-200 text-cyan-600"
                      }`}
                    >
                      <FiMessageSquare className="mr-2" /> Chat Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
