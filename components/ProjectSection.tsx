"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const underverseLink = () => {
  return <Link href="https://twitter.com/giantleapgg">`Underverse Game`</Link>;
};

const projects = [
  {
    title: "Reloop - Email Infrastructure",
    description:
      "An open source email infrastructure for developers to send transactional emails.",
    image: "/reloopDashboard.jpeg",
    github: "https://github.com/twinkalp10/reloop",
    demo: "https://reloop.dev",
    about:
      "An open source alternative to services like Resend. Reloop lets you send transactional emails, manage contacts and topics, track deliveries with webhooks, and monitor everything from a sleek dashboard. Built with Next.js, Node.js, and Elysia.js.",
  },
  {
    title: "Credain",
    description:
      "A fintech platform powering smarter credit decisions with real-time data insights.",
    image: "/credaindashboard.png",
    github: "",
    demo: "https://www.credain.com/",
    about:
      "Led frontend development for Credain's flagship website and Netting Efficiency Optimizer product's dashboard. Built real-time data tables with TanStack Table, created a reusable component library, and implemented WebSocket features for live updates. Improved API performance by 25% through frontend optimizations.",
  },
  {
    title: "OPEN UI - Design System",
    description:
      "An Open Source component library built with React and TypeScript.",
    image: "/openuipic.png",
    github: "https://github.com/twinkalp10/open-ui",
    demo: "https://open-ui-design.vercel.app/",
    about:
      "I wanted a component library that's actually easy to use — just copy, paste, and customize. No complicated setup, just clean React components you can style however you want.",
  },
  {
    title: "Underverse",
    description: "Fully on-chain game made with blockchain technology.",
    image: "/underverse.png",
    github: "https://github.com/giantleapgaming/underverse",
    demo: "https://giantleap.gg/underverse",
    about: `My first dive into Web3! Built this fully on-chain game at my previous company where players connect their wallets, collect weapons, form teams, and battle for rankings. Learned a ton about frontend development here.`,
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <div>
        <h1 className="text-3xl font-bold text-center">My Projects</h1>
        <hr className="w-8 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
        <div className="flex flex-col space-y-12 mt-12">
          {projects.map((project) => (
            <div key={project.title}>
              <div className="flex flex-col items-start justify-center space-y-2 md:flex-row md:space-x-12">
                <div className="w-full md:w-1/2 h-[250px] relative overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-semibold mb-6">
                    {project.title}
                  </h1>
                  <p> {project.description} </p>
                  <div className="flex space-x-4 mt-4">
                    <Link href={project.github} target="_blank">
                      <GitHubLogoIcon className="w-6 h-6" />
                    </Link>
                    <Link href={project.demo} target="_blank">
                      <ExternalLinkIcon className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-8 text-base">{project.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
