"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal website built with Next.js and Tailwind CSS. It is a static website hosted on Vercel.",
    image: "/laptop.jpg",
    github: "",
    demo: "",
  },

  {
    title: "Movie Search App",
    description:
      "A movie search app built with React and Tailwind CSS. It uses the TMDB API to fetch movies.",
    image: "/laptop.jpg",
    github: "",
    demo: "",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
