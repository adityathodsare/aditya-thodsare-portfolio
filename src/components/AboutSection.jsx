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
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutSection({ darkMode }) {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // Skill icons mapping
  const skillIcons = {
    "Spring Boot": <SiSpringboot className="text-emerald-500" />,
    "REST APIs": <TbApi className="text-blue-500" />,
    "React.js": <FaReact className="text-blue-400" />,
    "Next.js": <SiNextdotjs className="text-gray-800 dark:text-gray-200" />,
    Java: <FaJava className="text-red-500" />,
    MySQL: <SiMysql className="text-blue-600" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      ref={sectionRef}
    >
      {/* Background elements - more subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute rounded-full blur-xl ${
            darkMode ? "bg-emerald-900/10" : "bg-emerald-100/50"
          }`}
          style={{
            width: "300px",
            height: "300px",
            left: "-10%",
            top: "20%",
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative z-10"
      >
        <div className="text-center mb-12">
          <motion.h2
            variants={itemVariants}
            className={`text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r ${
              darkMode
                ? "from-emerald-300 to-teal-300"
                : "from-emerald-600 to-teal-600"
            } bg-clip-text text-transparent inline-block`}
          >
            About Me
          </motion.h2>
          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1 },
            }}
            className="w-20 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 mb-6 sm:mb-8 rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } leading-relaxed px-2`}
          >
            I'm a passionate{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-emerald-300" : "text-emerald-600"
              }`}
            >
              Full Stack Developer
            </span>{" "}
            with expertise in building modern web applications.
          </motion.p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Professional Image Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative w-full order-1 md:order-none"
          >
            <div className="relative rounded-xl overflow-hidden aspect-square w-full h-full min-h-[300px] sm:min-h-[380px] border border-gray-200 dark:border-gray-700/50 shadow-sm">
              <Image
                src="/1.png"
                alt="Profile Picture"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                quality={90}
                style={{
                  objectPosition: "top center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="space-y-6 md:space-y-8 order-2 md:order-none"
          >
            <div>
              <motion.h3
                variants={itemVariants}
                className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Personal Details
              </motion.h3>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
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
                        />
                      </svg>
                    ),
                    title: "Education",
                    content:
                      "Bachelor of Engineering - BE, Electronics and telecommunication engineering (2022-2026)",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    className={`flex items-start p-3 sm:p-4 rounded-lg ${
                      darkMode
                        ? "bg-gray-800/40 border border-gray-700/50"
                        : "bg-white border border-gray-200"
                    } transition-colors duration-200`}
                  >
                    <div
                      className={`p-2 rounded-md mr-3 sm:mr-4 ${
                        darkMode
                          ? "bg-emerald-900/30 text-emerald-400"
                          : "bg-emerald-100 text-emerald-600"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className={`text-sm sm:text-base font-medium ${
                          darkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {item.title}
                      </p>
                      <p
                        className={`text-xs sm:text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                variants={itemVariants}
                className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Skills
              </motion.h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3"
              >
                {[
                  "Spring Boot",
                  "Java",
                  "React.js",
                  "Next.js",
                  "MySQL",
                  "REST APIs",
                  "MongoDB",
                  "Tailwind CSS",
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    custom={index}
                    className={`flex items-center p-2 sm:p-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-800/40 border border-gray-700/50"
                        : "bg-white border border-gray-200"
                    } transition-colors duration-200`}
                  >
                    <div className="mr-2 text-lg">
                      {skillIcons[skill] || (
                        <FaNodeJs className="text-green-500" />
                      )}
                    </div>
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        darkMode ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
