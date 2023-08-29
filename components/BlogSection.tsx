"use client";
import React from "react";
import { useTheme } from "next-themes";

const Blogs = [
  {
    title: "var, let and const in javascript",
    image: "/letvarconst.png",
    link: "https://twinkalp10.hashnode.dev/var-let-and-const",
  },
  {
    title: "How Promise works?",
    image: "/promise.png",
    link: "https://twinkalp10.hashnode.dev/promise-in-javascript",
  },
  {
    title: "What is Closure?",
    image: "closure.png",
    link: "https://twinkalp10.hashnode.dev/closure",
  },
  {
    title: "Higher Order Functions!",
    image: "/HOF.png",
    link: "https://twinkalp10.hashnode.dev/higher-order-function",
  },
  {
    title: "Class Concept in JS",
    image: "class.png",
    link: "https://twinkalp10.hashnode.dev/classes",
  },
  {
    title: "What are map, filter and reduce methods?",
    image: "/mapfilterreduce.png",
    link: "https://twinkalp10.hashnode.dev/map-reduce-and-filter",
  },

  {
    title: "In this way Hosting works!",
    image: "hosting.png",
    link: "https://twinkalp10.hashnode.dev/hoisting-in-javascript",
  },
  {
    title: "Let's go with Async/Await!",
    image: "async.png",
    link: "https://twinkalp10.hashnode.dev/asyncawait-in-javascript",
  },
  {
    title: "call, apply, bind in javascript",
    image: "callApplyBind.png",
    link: "https://twinkalp10.hashnode.dev/call-bind-and-apply-in-javascript",
  },
];
const BlogSection = () => {
  const { theme } = useTheme();
  return (
    <section id="blogs">
      <div className="py-12 pb-12 md:pt-36 md:pb-32">
        <h1 className="text-3xl font-bold text-center">
          Hello! It&apos;s my Blog Space
        </h1>
        <hr className="w-8 h-1 mx-auto mt-4 mb-8 bg-purple-500 border-0 rounded"></hr>
        <p className="text-center mb-8">
          I wrote all these blogs for my personal learning. Hope you find it
          useful..!
        </p>
        <div className="flex justify-center items-center flex-col md:grid md:grid-cols-4 md:gap-x-40 md:gap-y-4">
          {Blogs.map((blog, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-xl px-4 py-2 w-48 h-40 ${
                theme === "dark" && "bg-[#1b1a1a] text-gray-400"
              }`}
            >
              <a
                href={blog.link}
                target="_blank"
                className="flex flex-col items-center justify-between h-full"
              >
                <img src={blog.image} alt={blog.title} className="w-32" />
                <p className="text-sm font-semibold text-center mt-auto">
                  {blog.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
