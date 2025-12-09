"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useNavContext } from "@/context/NavContext";

interface NavItemProps {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItemProps> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
  { label: "Blogs", page: "blogs" },
  { label: "Contact", page: "contact" },
];

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { openNav, setOpenNav } = useNavContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header className="w-full mx-auto fixed top-0 z-50 glass border-b border-neutral-200/20">
      <div className="max-w-6xl mx-auto md:flex md:px-8 px-6 py-4 items-center justify-between">
        <div>
          <Link href="/" to="home" className="cursor-pointer">
            <h2 className="text-xl font-semibold tracking-tight">
              Twinkal<span className="text-accent">.</span>
            </h2>
          </Link>
        </div>
        
        <div
          className="absolute right-16 top-4 cursor-pointer md:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          <button className="p-1">
            {openNav ? (
              <Bars3Icon className="w-6 h-6" />
            ) : (
              <XMarkIcon className="w-6 h-6" />
            )}
          </button>
        </div>
        
        <div className="flex items-center gap-8">
          <nav
            className={`md:flex md:items-center gap-8 transition-all duration-300 ${
              openNav && "hidden"
            }`}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.page}
                smooth={true}
                duration={500}
                className="block py-2 md:py-0 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-accent transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {isDark ? (
              <SunIcon className="w-5 h-5 text-yellow-500" />
            ) : (
              <MoonIcon className="w-5 h-5 text-neutral-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
