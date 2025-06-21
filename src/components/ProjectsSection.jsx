"use client";

import { FiGithub } from "react-icons/fi";

export default function ProjectsSection({ darkMode }) {
  const projects = [
    {
      title: "SAFE-V",
      description:
        "An innovative IoT-based solution for real-time vehicle monitoring and emergency alerts, enhancing driver safety.",
      technologies: ["IoT", "Next.js", "Spring Boot", "MySQL", "WebSocket"],
      image: "/image.png",
      githubLink: "https://github.com/adityathodsare/safev-frontend-nextjs",
      demoLink:
        "https://safev-frontend-nextjs-jefddhzjj-adityathodsares-projects.vercel.app/",
    },
    {
      title: "User Management with JWT",
      description:
        "A comprehensive user management system with JWT authentication, role-based access control, and secure password handling.",
      technologies: [
        "Spring Security",
        "Spring Boot",
        "JWT",
        "REST APIs",
        "MySQL",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      githubLink:
        "https://github.com/adityathodsare/spring-security-user-management-with-JWT",
      demoLink:
        "https://www.linkedin.com/posts/aditya-thodsare-475366289_springboot-springsecurity-jwt-activity-7308605498835054596-ANP8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEX_hRkBUWGwS0w62UxlXfQbiWqh9AcGe6I",
    },
    {
      title: "DevElevate",
      description:
        "A modern course platform built with Next.js and TypeScript, featuring responsive design and interactive learning tools.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      image: "/develevate.png",
      githubLink: "https://github.com/adityathodsare/devElevate-nexjs-frontend",
      demoLink: "https://dev-elevate-nexjs-frontend.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
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
          Featured Projects
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 mb-8 rounded-full"></div>
        <p className="text-xl max-w-3xl mx-auto dark:text-gray-300 text-gray-700 leading-relaxed">
          A selection of my recent work showcasing my skills and expertise
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all hover:shadow-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="relative overflow-hidden h-60">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                width={800}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {project.description.split(" ").slice(0, 5).join(" ")}...
                </p>
              </div>
            </div>
            <div className="p-6">
              <p className="dark:text-gray-300 text-gray-700 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                      darkMode
                        ? "bg-gray-700 text-emerald-400 group-hover:bg-emerald-900/40 group-hover:text-emerald-300"
                        : "bg-gray-100 text-emerald-600 group-hover:bg-emerald-100 group-hover:text-emerald-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-sm font-medium ${
                    darkMode
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-emerald-600 hover:text-emerald-500"
                  }`}
                >
                  <FiGithub className="mr-1" /> Code
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-sm font-medium ${
                      darkMode
                        ? "text-emerald-400 hover:text-emerald-300"
                        : "text-emerald-600 hover:text-emerald-500"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
