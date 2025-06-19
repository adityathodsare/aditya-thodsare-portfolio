import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaReact, FaJava, FaNodeJs, FaGithub, FaDocker } from "react-icons/fa";
import {
  SiSpringboot,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiIota,
  SiFigma,
  SiTailwindcss,
  SiVivaldi,
  SiArduino,
  SiOpenai,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { IoHardwareChipOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function AboutSection({ darkMode }) {
  // Skill icons mapping
  const skillIcons = {
    "Spring Boot": <SiSpringboot className="text-emerald-500" />,
    "REST APIs": <TbApi className="text-blue-500" />,
    "React.js": <FaReact className="text-blue-400" />,
    "Next.js": <SiNextdotjs className="text-gray-800 dark:text-gray-200" />,
    Java: <FaJava className="text-red-500" />,
    "Spring Security": <SiSpringboot className="text-green-600" />,
    IoT: <SiIota className="text-purple-500" />,
    FPGA: <IoHardwareChipOutline className="text-orange-500" />,
    MySQL: <SiMysql className="text-blue-600" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    JavaScript: <SiJavascript className="text-yellow-500" />,
    "UI/UX Design": <SiFigma className="text-purple-600" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
    "VS Code": <SiVivaldi className="text-blue-500" />,
    "Intelij IDEA": <FaJava className="text-purple-600" />,
    GitHub: <FaGithub className="text-gray-800 dark:text-gray-200" />,
    Docker: <FaDocker className="text-blue-400" />,
    "Arduino IDE": <SiArduino className="text-teal-500" />,
    ChatGPT: <SiOpenai className="text-green-500" />,
    "AI Tools": <SiOpenai className="text-purple-500" />,
  };

  // Subtle colors for background waves
  const waveColors = darkMode
    ? ["rgba(110, 231, 183, 0.08)", "rgba(45, 212, 191, 0.08)"]
    : ["rgba(16, 185, 129, 0.1)", "rgba(5, 150, 105, 0.1)"];

  return (
    <section
      id="about"
      className="relative py-24 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle background waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-xl"
            style={{
              background: waveColors[i % waveColors.length],
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${i * 30}%`,
              top: `${i * 20}%`,
              opacity: 0.3,
            }}
            animate={{
              x: [0, i % 2 ? 10 : -10],
              y: [0, i % 2 ? -5 : 5],
            }}
            transition={{
              duration: 40 + i * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Soft glow effects */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-10 dark:opacity-10 mix-blend-screen pointer-events-none">
        <div
          className={`absolute inset-0 rounded-full blur-[80px] ${
            darkMode ? "bg-emerald-400" : "bg-teal-500"
          }`}
        ></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-bold mb-4 bg-gradient-to-r ${
            darkMode
              ? "from-emerald-300 to-teal-300"
              : "from-emerald-700 to-teal-700"
          } bg-clip-text text-transparent inline-block`}
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 mb-8 rounded-full"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-xl max-w-3xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } leading-relaxed font-medium`}
        >
          I'm a passionate{" "}
          <span
            className={`font-bold ${
              darkMode ? "text-emerald-300" : "text-emerald-600"
            }`}
          >
            Full Stack Developer
          </span>{" "}
          with expertise in building modern web applications. With a strong
          foundation in both frontend and backend technologies, I create
          seamless, performant digital experiences.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div
            className={`absolute -inset-1 rounded-2xl blur opacity-50 ${
              darkMode
                ? "bg-gradient-to-r from-emerald-400/30 to-teal-500/30"
                : "bg-gradient-to-r from-emerald-300/30 to-teal-400/30"
            } group-hover:opacity-70 transition duration-500`}
          ></div>
          <div className="relative rounded-2xl overflow-hidden">
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Aditya Thodsare"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <div>
            <h3
              className={`text-2xl font-semibold mb-6 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Personal Details
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: <FiMapPin className="w-5 h-5" />,
                  title: "Location",
                  content: "Pune/Pimpri-Chinchwad Area, India",
                },
                {
                  icon: <FiMail className="w-5 h-5" />,
                  title: "Email",
                  content: "thodsareaditya@gmail.com",
                },
                {
                  icon: <FiPhone className="w-5 h-5" />,
                  title: "Phone",
                  content: "8263878470",
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      ></path>
                    </svg>
                  ),
                  title: "Education",
                  content:
                    "Bachelor of Engineering - BE, Electronics and telecommunication engineering (2022-2026)",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div
                    className={`p-2 rounded-lg mr-4 ${
                      darkMode
                        ? "bg-emerald-900/20 text-emerald-400"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className={`font-medium ${
                        darkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3
              className={`text-2xl font-semibold mb-6 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Skills & Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                // Development Skills
                "Spring Boot",
                "Spring Security",
                "REST APIs",
                "React.js",
                "Next.js",
                "Java",
                "JavaScript",
                "MySQL",
                "MongoDB",
                "IoT",
                "FPGA",
                "UI/UX Design",
                "Tailwind CSS",

                // Development Tools
                "VS Code",
                "Intelij IDEA",
                "GitHub",
                "Docker",
                "Arduino IDE",
                "ChatGPT",
                "AI Tools",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.03 }}
                  className={`flex items-center p-3 rounded-lg transition-all ${
                    darkMode
                      ? "bg-gray-800/50 hover:bg-gray-750 border border-gray-700 hover:border-emerald-500/30"
                      : "bg-white hover:bg-gray-50 border border-gray-200 hover:border-emerald-400/30"
                  }`}
                  whileHover={{
                    y: -2,
                    boxShadow: darkMode
                      ? "0 4px 6px -1px rgba(16, 185, 129, 0.1), 0 2px 4px -1px rgba(16, 185, 129, 0.06)"
                      : "0 4px 6px -1px rgba(5, 150, 105, 0.1), 0 2px 4px -1px rgba(5, 150, 105, 0.06)",
                  }}
                >
                  <div className="mr-2 text-lg">
                    {skillIcons[skill] || (
                      <FaNodeJs className="text-green-500" />
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
