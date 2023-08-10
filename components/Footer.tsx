"use client";
import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer id="contact" className="max-w-3xl mx-auto px-4 py-8 sm:px-6">
      <hr className="w-full h-0.5 mx-auto my-8 bg-neutral-200" />
      <div className="flex flex-col md:space-x-8 gap-4 items-center md:flex-row md:justify-between">
        <div>@2023 Twinkal Patel</div>
        <div className="flex justify-center items-center space-x-4">
          <a
            target="_blank"
            href="https://github.com/twinkalp10"
            className="cursor-pointer"
          >
            <GitHubLogoIcon className="w-6 h-6" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/twinkal-patel-1952b2150"
            className="cursor-pointer"
          >
            <LinkedInLogoIcon className="w-6 h-6" />
          </a>
          <a
            target="_blank"
            href="mailto:twinkal.work@outlook.com"
            className="cursor-pointer"
          >
            <EnvelopeIcon className="w-7 h-7" />
          </a>
          <a
            href="/Twinkal-resume.pdf"
            target="_blank"
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
    </footer>
  );
};

export default Footer;
