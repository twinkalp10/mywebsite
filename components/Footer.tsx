"use client";
import React, { useEffect, useState } from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer id="contact" className="max-w-5xl mx-auto px-6 py-12">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8" />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Thanks for visiting! Let&apos;s connect.
        </p>
        
        <div className="flex items-center gap-3">
          <Link
            target="_blank"
            href="https://github.com/twinkalp10"
            className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-accent hover:text-white transition-all duration-300"
          >
            <GitHubLogoIcon className="w-5 h-5" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/twinkal-patel-1952b2150"
            className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-accent hover:text-white transition-all duration-300"
          >
            <LinkedInLogoIcon className="w-5 h-5" />
          </Link>
          <Link
            target="_blank"
            href="mailto:twinkalp1525@gmail.com"
            className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-accent hover:text-white transition-all duration-300"
          >
            <EnvelopeIcon className="w-5 h-5" />
          </Link>
          <Link
            href="/Twinkal_P.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90 transition-opacity"
          >
            Resume
          </Link>
        </div>
      </div>
      
     
    </footer>
  );
};

export default Footer;
