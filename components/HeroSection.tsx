"use client";
import { useNavContext } from "@/context/NavContext";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const { openNav } = useNavContext();

  return (
    <section id="home">
      <div
        className={`flex flex-col py-16 my-10 md:my-32 justify-center items-center max-w-3xl mx-auto px-6 ${
          openNav ? "my-32" : "my-48"
        }`}
      >
        <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
          Frontend Developer
        </p>
        <h1 className="font-bold text-5xl md:text-6xl text-center leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-gradient">Twinkal</span>
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-6 text-center max-w-xl leading-relaxed">
          I build beautiful, scalable web applications with 2.8+ years of experience 
          in React, Next.js, and Node.js. Currently crafting{" "}
          <Link
            href="https://github.com/reloop-labs/reloop"
            target="_blank"
            className="text-accent hover:underline font-medium"
          >
            Reloop
          </Link>
          , an open source email infrastructure.
        </p>
        
        <div className="flex justify-center items-center gap-4 mt-8">
          <Link
            target="_blank"
            href="https://github.com/reloop-labs"
            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-accent hover:text-white transition-all duration-300"
          >
            <GitHubLogoIcon className="w-5 h-5" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/twinkal-p-1952b2150/"
            className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-accent hover:text-white transition-all duration-300"
          >
            <LinkedInLogoIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
