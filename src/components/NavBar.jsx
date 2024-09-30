"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];
  const handler = () => {
    router.push("/about");
  };
  return (
    <div>
      <nav className="bg-red-700 text-white px-6 py-4 flex justify-between items-center">
        <h2 className="text-3xl font-medium">
          Next <span className="text-cyan-400">Boss</span>
        </h2>
        <ul className="flex justify-between items-center space-x-5">
          {navLinks?.map((link) => (
            <Link
              className={`${
                pathName === link.path
                  ? "text-cyan-500 underline "
                  : "text-white"
              }`}
              key={link.path}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <button
          onClick={handler}
          className="bg-white text-black px-5 py-3 rounded-2xl text-xl font-medium"
        >
          Login
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
