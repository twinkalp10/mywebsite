"use client";
import { useNavContext } from "@/context/NavContext";
import React from "react";

const HeroSection = () => {
  const { openNav } = useNavContext();

  return (
    <section id="home">
      <div
        className={`flex flex-col py-16 my-10 md:my-32 justify-center items-center text-center ${
          openNav ? "my-32" : "my-48"
        }`}
      >
        <h2 className="font-bold text-5xl">Hi, I am Twinkal !</h2>
        <div className="text-lg mt-4">
          <p>
            I am a A passionate Front-end React Developer developing interactive
            UI
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
