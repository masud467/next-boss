"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log(session);
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
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];
  const handler = () => {
    router.push("/login");
  };
  const handler2 = () => {
    router.push("api/auth/signin");
  };
  if (pathName.includes("dashboard"))
    return (
      <div className="bg-gray-500 text-white flex items-center gap-10 py-5">
        <div>Dashboard layout</div>
        <Link href="/">
          <h2>Home</h2>
        </Link>
      </div>
    );
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
        {/* <button
          onClick={handler}
          className="bg-white text-black px-5 py-3 rounded-2xl text-xl font-medium"
        >
          Login
        </button> */}
        <div className="flex items-center gap-5">
          <div>
            <Image
              className="rounded-full h-14 w-14"
              height={50}
              width={50}
              alt={session.data?.user?.name}
              src={session.data?.user?.image}
            ></Image>
          </div>
          <div>
            {session.data?.user?.name}
            <br />
            {session.data?.user?.type}
          </div>
        </div>
        {session.status === "authenticated" ? (
          <button
            onClick={()=> signOut()}
            className="bg-white text-black px-5 py-3 rounded-2xl text-xl font-medium"
          >
            {" "}
            Logout
          </button>
        ) : (
          <>
        
          <button
            onClick={handler2}
            className="bg-white text-black px-5 py-3 rounded-2xl text-xl font-medium"
          >
            Login
          </button>
          <Link href={'api/auth/signup'}>
          <button
            onClick={handler2}
            className="bg-white text-black px-5 py-3 rounded-2xl text-xl font-medium"
          >
            Sign Up
          </button>
          </Link>
          </>
        )}
        
      </nav>
    </div>
  );
};

export default NavBar;
