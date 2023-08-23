"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const projects = [
  {
    title: "OPEN UI - Design System",
    description:
      "An Open Source component library built with React and TypeScript.",
    image: "/laptop.jpg",
    github: "https://github.com/twinkalp10/open-ui",
    demo: "https://open-ui-design.vercel.app/",
    about:
      "It is a collection of accessible, reusable, and composable React components for building design systems, websites, and web applications. You can use it as a whole, or pick and choose the components you want to use. It is as easy like copy-paste. You can give it different style and variant as per your need. ",
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
              <div className="flex flex-col space-y-2 md:flex-row md:space-x-12">
                <div className="w-1/2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-xl shadow-xl"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-semibold mb-6">
                    {project.title}
                  </h1>
                  <p> {project.description} </p>
                  <div className="flex space-x-4 mt-4">
                    <Link href={project.github}>
                      <GitHubLogoIcon className="w-6 h-6" />
                    </Link>
                    <Link href={project.demo}>
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
