"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const projects = [
  {
    title: "Reloop - Email Infrastructure",
    description: "An open source email infrastructure for developers to send transactional emails.",
    image: "/reloopDashboard.jpeg",
    github: "https://github.com/twinkalp10/reloop",
    demo: "https://reloop.dev",
    about: "An open source alternative to services like Resend. Reloop lets you send transactional emails, manage contacts and topics, track deliveries with webhooks, and monitor everything from a sleek dashboard. Built with Next.js, Node.js, and Elysia.js.",
  },
  {
    title: "Credain",
    description: "A fintech platform powering smarter credit decisions with real-time data insights.",
    image: "/credaindashboard.png",
    github: "",
    demo: "https://www.credain.com/",
    about: "Led frontend development for Credain's flagship website and Netting Efficiency Optimizer product's dashboard. Built real-time data tables with TanStack Table, created a reusable component library, and implemented WebSocket features for live updates. Improved API performance by 25% through frontend optimizations.",
  },
  {
    title: "OPEN UI - Design System",
    description: "An Open Source component library built with React and TypeScript.",
    image: "/openuipic.png",
    github: "https://github.com/twinkalp10/open-ui",
    demo: "https://open-ui-design.vercel.app/",
    about: "I wanted a component library that's actually easy to use — just copy, paste, and customize. No complicated setup, just clean React components you can style however you want.",
  },
  {
    title: "Underverse",
    description: "Fully on-chain game made with blockchain technology.",
    image: "/underverse.png",
    github: "https://github.com/giantleapgaming/underverse",
    demo: "https://giantleap.gg/underverse",
    about: "My first dive into Web3! Built this fully on-chain game at my previous company where players connect their wallets, collect weapons, form teams, and battle for rankings. Learned a ton about frontend development here.",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <div className="py-16 md:py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-accent/50 transition-all duration-300"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                <div className="md:w-1/2 h-[250px] relative overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {project.about}
                  </p>
                  <div className="flex gap-3 mt-6">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-accent hover:text-white transition-all duration-300"
                      >
                        <GitHubLogoIcon className="w-5 h-5" />
                      </Link>
                    )}
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <ExternalLinkIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
