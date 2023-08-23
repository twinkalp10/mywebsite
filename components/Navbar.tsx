"use client";
import React from "react";
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
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Blogs",
    page: "blogs",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

const Navbar = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const { openNav, setOpenNav } = useNavContext();

  return (
    <header
      className={`w-full mx-auto shadow fixed top-0 z-50 ${
        theme === "dark" ? "bg-black" : "bg-white "
      }`}
    >
      <div
        className={`md:flex md:px-10 px-7 py-5 items-center justify-between`}
      >
        <div>
          <div>
            <Link href="/" to="home">
              <h2 className="text-2xl font-bold">Twinkal Patel</h2>
            </Link>
          </div>
        </div>
        <div
          className="absolute right-16 top-6 cursor-pointer md:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          <button>
            {openNav ? (
              <Bars3Icon className="w-6 h-6" />
            ) : (
              <XMarkIcon className="w-6 h-6" />
            )}
          </button>
        </div>
        <ul
          className={`md:flex md:items-center gap-12 md:mr-12 transition-all duration-500 ${
            openNav && "hidden"
          } `}
        >
          {NAV_ITEMS.map((item) => (
            <li className="my-3 md:my-0">
              <Link
                to={item.page}
                key={item.label}
                className={` hover:text-gray-400 duration-500 cursor-pointer`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute right-8 top-6">
          {theme === "dark" ? (
            <button>
              <SunIcon className="w-6 h-6" onClick={() => setTheme("light")} />
            </button>
          ) : (
            <button>
              <MoonIcon className="w-6 h-6" onClick={() => setTheme("dark")} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
