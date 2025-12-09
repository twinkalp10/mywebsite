"use client";
import React from "react";
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
  const { theme } = useTheme();
  return (
    <section id="about">
      <div className="py-12 pb-12 md:pt-12 md:pb-48">
        <h1 className="text-3xl font-bold text-center">About Me !</h1>
        <hr className="w-8 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
        <div className="flex flex-col md:flex-row md:space-x-10 gap-10 items-stretch justify-center mt-8">
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl md:text-left">
              Get to know me
            </h1>

            <p className="leading-7 mt-3">
              Hey there! I&apos;m <span className="font-bold">Twinkal Patel</span>, a developer who loves turning ideas into real, working products. With 2.8+ years of building web apps using React, Next.js, and Node.js, I&apos;ve learned that good code is just the start. <br /> <br />
              Right now, I&apos;m deep into <span className="font-bold">Reloop</span>, an open source email infrastructure I&apos;m building from scratch. When I&apos;m not coding, you&apos;ll find me sketching, reading, or planning my next travel adventure.
            </p>
            <div className="mt-4">
              <a
                href="/Twinkal_P.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-slate-100 px-2 py-1 rounded-lg ${
                  theme === "dark"
                    ? "bg-white text-black"
                    : "bg-gray-200 text-black"
                } `}
              >
                Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl md:text-left">
              My Skills
            </h1>

            <div className="flex flex-wrap md:justify-start justify-center flex-row">
              {skills.map((skill, index) => (
                <div key={index}>
                  <p className="flex justify-center items-center gap-2 bg-gray-200 text-black px-4 py-2 mt-2 mr-2 rounded font-semibold">
                    {skill.skill}{" "}
                    <span>
                      {" "}
                      <img src={skill.icon} className="w-4 h-4" />
                    </span>
                  </p>
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
