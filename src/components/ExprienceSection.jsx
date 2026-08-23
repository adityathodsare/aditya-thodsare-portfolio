"use client";

import { useEffect, useRef, useState } from "react";
import {
  getFullTimeMonths,
  getTestrigInternshipMonths,
  getShoratInternshipMonths,
  getTotalExperienceMonths,
  formatDuration,
} from "@/lib/experience";

export default function ExperienceSection() {
  const revealRef = useRef([]);
  const [expMetrics, setExpMetrics] = useState({
    fullTimeMonths: 2,
    totalMonths: 10,
    totalFormatted: "10 months",
    fullTimeFormatted: "2 months",
  });

  useEffect(() => {
    // Dynamic calculation based on system date
    const ftMonths = getFullTimeMonths();
    const totMonths = getTotalExperienceMonths();
    setExpMetrics({
      fullTimeMonths: ftMonths,
      totalMonths: totMonths,
      totalFormatted: formatDuration(totMonths),
      fullTimeFormatted: formatDuration(ftMonths),
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  const experiences = [
    {
      type: "work",
      title: "QA / Software Engineer (Full Time)",
      company: "Testrig Technologies Pvt Ltd",
      period: `Jul 2026 – Present (${expMetrics.fullTimeFormatted})`,
      color: "var(--color-neo-blue)",
      badge: "FULL TIME",
      highlights: [
        "Automated software testing workflows and improved release confidence across core product suites",
        "Automated complex AI workflows using n8n & Make to streamline test reporting, monitoring, and alert notifications",
        "Contributed to AI-powered analytics dashboards inspired by Allure — chat with test data via an integrated chatbot",
        "Built visualizations for build trend analysis, run summaries, and actionable quality insights",
        "Gained hands-on experience with Jenkins and end-to-end CI/CD pipeline design and maintenance",
      ],
    },
    {
      type: "work",
      title: "QA Engineer Trainee / Intern",
      company: "Testrig Technologies Pvt Ltd",
      period: "Jan 2026 – Jun 2026 (6 months)",
      color: "var(--color-neo-green)",
      badge: "INTERNSHIP",
      highlights: [
        "Completed a 6-month hands-on internship delivering automated test frameworks and performance validation",
        "Created regression suites and integrated automated checks into early build pipelines",
        "Collaborated on test plan development, bug tracking, and automated validation scripts",
      ],
    },
    {
      type: "work",
      title: "Java Full Stack Developer Intern",
      company: "Shorat Innovations Pvt Ltd",
      period: "Jan 2025 – Feb 2025 (2 months)",
      color: "var(--color-neo-pink)",
      badge: "INTERNSHIP",
      highlights: [
        "Developed a content distribution platform using Spring Boot and React with real-time features via WebSockets",
        "Implemented Spring Security for robust authentication and authorization of REST APIs",
        "Built React-based course distribution interfaces with optimized data fetching and state management",
        "Designed and optimized backend architectures for seamless frontend integration",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Engineering",
      company: "Electronics & Telecommunication · CGPA 9.25/10",
      period: "2022 – 2026",
      color: "var(--color-neo-yellow)",
      badge: "EDUCATION",
      highlights: [
        "Coursework in IoT, embedded systems, VLSI, and modern web technologies",
        "Participated in hackathons and technical competitions",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter text-center font-display">
        Experience<span className="text-[var(--color-neo-red)]">_Log</span>
      </h2>

      <div className="relative border-l-4 border-black ml-4 md:ml-10 space-y-12">
        {experiences.map((item, index) => (
          <div ref={addToRefs} key={index} className="reveal relative pl-8 md:pl-16">
            <div
              className="absolute -left-[14px] top-2 w-6 h-6 border-4 border-black"
              style={{ backgroundColor: item.color }}
            />
            <div className="bg-white border-4 border-black p-6 brutal-shadow hover:brutal-shadow-xl transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-dashed border-gray-300 pb-4 mb-4 gap-2">
                <div>
                  <span className="inline-block bg-black text-white text-xs font-mono px-2 py-0.5 mb-1 font-bold">
                    {item.badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase font-display">{item.title}</h3>
                </div>
                <span className="font-mono font-bold bg-[var(--color-neo-yellow)] text-black border-2 border-black px-3 py-1 text-sm md:text-base">
                  {item.period}
                </span>
              </div>
              <p
                className="font-mono text-xl mb-3 font-bold"
                style={{ color: item.color === "var(--color-neo-yellow)" ? "#C08B3E" : item.color }}
              >
                @ {item.company}
              </p>
              <ul className="list-disc list-inside font-mono text-gray-700 space-y-2 text-sm md:text-base">
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
