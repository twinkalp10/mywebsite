"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Blogs = [
  {
    title: "var, let and const",
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
    image: "/closure.png",
    link: "https://twinkalp10.hashnode.dev/closure",
  },
  {
    title: "Higher Order Functions",
    image: "/HOF.png",
    link: "https://twinkalp10.hashnode.dev/higher-order-function",
  },
  {
    title: "Class Concept in JS",
    image: "/class.png",
    link: "https://twinkalp10.hashnode.dev/classes",
  },
  {
    title: "map, filter and reduce",
    image: "/mapfilterreduce.png",
    link: "https://twinkalp10.hashnode.dev/map-reduce-and-filter",
  },
  {
    title: "How Hoisting works",
    image: "/hosting.png",
    link: "https://twinkalp10.hashnode.dev/hoisting-in-javascript",
  },
  {
    title: "Async/Await",
    image: "/async.png",
    link: "https://twinkalp10.hashnode.dev/asyncawait-in-javascript",
  },
  {
    title: "call, apply, bind",
    image: "/callApplyBind.png",
    link: "https://twinkalp10.hashnode.dev/call-bind-and-apply-in-javascript",
  },
];

const BlogSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section id="blogs">
      <div className="py-16 md:py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Blog</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full" />
          <p className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-md mx-auto">
            I write about JavaScript concepts for my personal learning. Hope you find them useful!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-xl p-4 border transition-all duration-300 hover:border-accent/50 hover:shadow-lg ${
                isDark
                  ? "bg-neutral-900/50 border-neutral-800"
                  : "bg-white border-neutral-200"
              }`}
            >
              <div className="relative h-24 mb-3 overflow-hidden rounded-lg">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-sm font-medium text-center line-clamp-2">
                {blog.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
