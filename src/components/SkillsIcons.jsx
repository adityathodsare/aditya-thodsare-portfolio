"use client";

import { FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import {
  SiSpringboot,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiIot,
  SiFigma,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { IoHardwareChipOutline } from "react-icons/io5";

export default function SkillsIcons({ darkMode }) {
  const skillIcons = {
    "Spring Boot": <SiSpringboot className="text-emerald-500" />,
    "REST APIs": <TbApi className="text-blue-500" />,
    "React.js": <FaReact className="text-blue-400" />,
    "Next.js": <SiNextdotjs className="text-gray-800 dark:text-gray-200" />,
    Java: <FaJava className="text-red-500" />,
    "Spring Security": <SiSpringboot className="text-green-600" />,
    IoT: <SiIot className="text-purple-500" />,
    VLSI: <IoHardwareChipOutline className="text-yellow-500" />,
    FPGA: <IoHardwareChipOutline className="text-orange-500" />,
    WebSocket: <TbApi className="text-indigo-500" />,
    MySQL: <SiMysql className="text-blue-600" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    TypeScript: <SiTypescript className="text-blue-600" />,
    "UI/UX Design": <SiFigma className="text-purple-600" />,
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-6 dark:text-white text-gray-800">
        Technical Expertise
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {Object.keys(skillIcons).map((skill) => (
          <div
            key={skill}
            className={`flex items-center p-3 rounded-lg transition-all hover:transform hover:-translate-y-1 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-emerald-500/50"
                : "bg-white hover:bg-gray-50 border border-gray-200 hover:border-emerald-400/50 shadow-sm"
            }`}
          >
            <div className="mr-2 text-lg">
              {skillIcons[skill] || <FaNodeJs className="text-green-500" />}
            </div>
            <span className="text-sm font-medium dark:text-gray-300 text-gray-700">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
