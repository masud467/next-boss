import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="p-24">
      {blogs.map((blog) => (
        <div key={blog.id} className="border-2 p-10">
          <h3 className="text-xl font-medium">{blog.title}</h3>
          <h6>{blog.description}</h6>
          <button className="bg-red-500 p-2 rounded-md">
            <Link href={`/blogs/${blog.id}`}> View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

const blogs = [
  {
    id: 1,
    title: "Understanding Next.js Routing",
    description:
      "A comprehensive guide to nested and dynamic routing in Next.js, helping you organize your app's pages effectively.",
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    description:
      "Learn the ins and outs of React hooks like useState, useEffect, and custom hooks to enhance your React components.",
  },
  {
    id: 3,
    title: "Building REST APIs with Node.js and Express",
    description:
      "This blog walks you through building scalable and efficient RESTful APIs using Node.js and Express.",
  },
  {
    id: 4,
    title: "Introduction to Tailwind CSS",
    description:
      "Explore how Tailwind CSS helps you rapidly build modern websites without ever leaving your HTML.",
  },
  {
    id: 5,
    title: "JavaScript ES6 Features You Should Know",
    description:
      "A quick dive into essential ES6 features such as arrow functions, destructuring, template literals, and more.",
  },
  {
    id: 6,
    title: "State Management with Redux",
    description:
      "Get to grips with Redux, the predictable state container for JavaScript apps, and how to integrate it with React.",
  },
  {
    id: 7,
    title: "Understanding MongoDB for Beginners",
    description:
      "An introduction to MongoDB, its schema-less nature, and how it fits into modern web applications as a NoSQL database.",
  },
  {
    id: 8,
    title: "Deploying Your Next.js App to Vercel",
    description:
      "Learn how to deploy a Next.js app on Vercel for free, with automatic builds and easy integration with GitHub.",
  },
  {
    id: 9,
    title: "Securing Your Node.js Application",
    description:
      "Understand common security vulnerabilities in Node.js apps and how to secure your APIs and user data.",
  },
  {
    id: 10,
    title: "How to Build a Blog with Next.js",
    description:
      "Step-by-step guide to building a modern, SEO-friendly blog using Next.js and markdown files.",
  },
];

export default Page;
