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
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutSection({ darkMode }) {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      className="relative py-12 xs:py-16 sm:py-20 px-4 xs:px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto"
      ref={sectionRef}
    >
      {/* Static background that changes instantly */}
      <div
        className="absolute inset-0 -z-30 transition-none"
        style={{
          backgroundColor: darkMode ? "#111827" : "#f8fafc",
        }}
      />

      {/* Background elements - more subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute rounded-full blur-xl ${
            darkMode ? "bg-emerald-900/10" : "bg-emerald-100/50"
          } transition-none`}
          style={{
            width: isMobile ? "300px" : "400px",
            height: isMobile ? "300px" : "400px",
            left: isMobile ? "5%" : "10%",
            top: isMobile ? "10%" : "20%",
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative z-10"
      >
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.h2
            variants={itemVariants}
            className={`text-3xl xs:text-4xl sm:text-5xl font-bold mb-3 xs:mb-4 bg-gradient-to-r ${
              darkMode
                ? "from-emerald-300 to-teal-300"
                : "from-emerald-600 to-teal-600"
            } bg-clip-text text-transparent inline-block transition-colors duration-100`}
          >
            About Me
          </motion.h2>
          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1 },
            }}
            className="w-16 xs:w-20 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 mb-6 sm:mb-8 rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className={`text-base xs:text-lg sm:text-xl max-w-3xl mx-auto px-2 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } leading-relaxed transition-colors duration-100`}
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

        <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Professional Image Section - Now more prominent */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="w-full md:w-1/2 lg:w-2/5 relative"
          >
            <div className="relative rounded-xl overflow-hidden aspect-square w-full h-full min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] border border-gray-200 dark:border-gray-700/50 shadow-lg transition-colors duration-100">
              <Image
                src="/1.png"
                alt="Aditya Thodsare"
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

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            className="w-full md:w-1/2 lg:w-3/5 space-y-6 sm:space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl ${
                darkMode
                  ? "bg-gray-800/40 border border-gray-700/50"
                  : "bg-white border border-gray-200"
              } transition-colors duration-100 shadow-sm`}
            >
              <h3
                className={`text-xl sm:text-2xl font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-gray-800"
                } transition-colors duration-100`}
              >
                Quick Introduction
              </h3>
              <p
                className={`text-sm sm:text-base ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } transition-colors duration-100 mb-4`}
              >
                I specialize in building robust web applications using Spring
                Boot and React, with additional expertise in IoT systems and
                FPGA development.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    icon: <FiMapPin className="w-5 h-5" />,
                    title: "Location",
                    content: "Pune, India",
                  },
                  {
                    icon: <FiMail className="w-5 h-5" />,
                    title: "Email",
                    content: "thodsareaditya@gmail.com",
                  },
                  {
                    icon: <FiPhone className="w-5 h-5" />,
                    title: "Phone",
                    content: "+91 8263878470",
                  },
                  {
                    icon: <IoHardwareChipOutline className="w-5 h-5" />,
                    title: "Education",
                    content: "BE in E&TC (2022-2026)",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-800/30 border border-gray-700/40"
                        : "bg-gray-50 border border-gray-100"
                    } transition-colors duration-100`}
                  >
                    <div
                      className={`p-2 rounded-md mr-3 ${
                        darkMode
                          ? "bg-emerald-900/30 text-emerald-400"
                          : "bg-emerald-100 text-emerald-600"
                      } transition-colors duration-100`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className={`text-xs font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        } transition-colors duration-100`}
                      >
                        {item.title}
                      </p>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        } transition-colors duration-100`}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl ${
                darkMode
                  ? "bg-gray-800/40 border border-gray-700/50"
                  : "bg-white border border-gray-200"
              } transition-colors duration-100 shadow-sm`}
            >
              <h3
                className={`text-xl sm:text-2xl font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-gray-800"
                } transition-colors duration-100`}
              >
                Skills & Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Spring Boot",
                  "React.js",
                  "Java",
                  "JavaScript",
                  "Next.js",
                  "REST APIs",
                  "MySQL",
                  "MongoDB",
                  "IoT",
                  "Spring Security",
                  "Tailwind CSS",
                  "GitHub",
                  "Docker",
                  "FPGA",
                  "VS Code",
                  "UI/UX Design",
                  "Arduino IDE",
                  "AI Tools",
                ].map((skill, index) => (
                  <div
                    key={skill}
                    className={`flex items-center p-2 sm:p-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-800/30 border border-gray-700/40"
                        : "bg-gray-50 border border-gray-100"
                    } transition-colors duration-100`}
                  >
                    <div className="mr-2 text-lg">
                      {skillIcons[skill] || (
                        <FaNodeJs className="text-green-500" />
                      )}
                    </div>
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        darkMode ? "text-gray-200" : "text-gray-700"
                      } transition-colors duration-100`}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
