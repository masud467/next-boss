"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathName = usePathname();
  if (pathName.includes("dashboard"))
    return <div className="bg-gray-500 text-white">dashboard footer</div>;
  return (
    <div>
      <footer className="bg-gray-500 text-white">This is my footer</footer>
    </div>
  );
};

export default Footer;
