"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const skills = [
  { skill: "React", icon: "/reactIcon.png" },
  { skill: "Next.js", icon: "/nextIcon.png" },
  { skill: "Node.js", icon: "/nodejsIcon.png" },
  { skill: "Express.js", icon: "/expressIcon.png" },
  { skill: "Elysia.js", icon: "/elysiaIcon.png" },
  { skill: "TypeScript", icon: "/typescriptBlackIcon.png" },
  { skill: "Tailwind CSS", icon: "/tailwindcssBlackIcon.png" },
  { skill: "JavaScript", icon: "/jsBlackIcon.png" },
  { skill: "GitHub", icon: "/githubIcon.png" },
];

const AboutSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section id="about">
      <div className="py-16 md:py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get to know me</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Hey there! I&apos;m <span className="font-semibold text-neutral-900 dark:text-white">Twinkal Patel</span>, a developer who loves turning ideas into real, working products. With 2.8+ years of building web apps using React, Next.js, and Node.js, I&apos;ve learned that good code is just the start.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mt-4">
              Right now, I&apos;m deep into <span className="font-semibold text-neutral-900 dark:text-white">Reloop</span>, an open source email infrastructure I&apos;m building from scratch. When I&apos;m not coding, you&apos;ll find me sketching, reading, or planning my next travel adventure.
            </p>
            <a
              href="/Twinkal_P.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              View Resume
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:border-accent hover:shadow-md ${
                    isDark
                      ? "bg-neutral-800/50 border-neutral-700"
                      : "bg-white border-neutral-200"
                  }`}
                >
                  <img src={skill.icon} className="w-4 h-4" alt={skill.skill} />
                  <span className="text-sm font-medium">{skill.skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
