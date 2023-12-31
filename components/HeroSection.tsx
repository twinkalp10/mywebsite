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
        className={`flex flex-col py-16 my-10 md:my-32 justify-center items-center ${
          openNav ? "my-32" : "my-48"
        }`}
      >
        <h2 className="font-bold text-5xl text-center">Hi, I am Twinkal !</h2>
        <div className=" mt-4 text-center">
          <p className="text-xl">
            I am a A passionate Front-end React Developer developing interactive
            UI
          </p>
          <p className="text-base mt-8">
            I possess 1+ year of practical experience in front-end development,
            demonstrating proficiency in HTML, CSS, JavaScript, and React.
            Currently working on my own project to enhance my skills. I am
            developing an open source design system for reusable components. You
            can check it out at{" "}
            <Link
              href="https://open-ui-design.vercel.app/"
              target="_blank"
              className="text-purple-500"
            >
              <i>OPEN UI</i>
            </Link>
            .
          </p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <Link
              target="_blank"
              href="https://github.com/twinkalp10"
              className="cursor-pointer"
            >
              <GitHubLogoIcon className="w-6 h-6" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/twinkal-patel-1952b2150"
              className="cursor-pointer"
            >
              <LinkedInLogoIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
