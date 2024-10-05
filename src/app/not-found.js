"use client";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>Could not find requested resource</p>
      <p className="underline text-blue-700">
        <Link href="/">Return Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
