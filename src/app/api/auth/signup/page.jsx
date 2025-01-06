"use client";
import React from "react";

const page = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      image:  e.target.image.value,
      type: e.target.type.value,
    };
    const res = await fetch("http://localhost:3000/api/auth/signup/new-user", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    e.target.reset();
  };
  return (
    <div className="flex justify-center items-center h-screen my-5">
      <div>
        <h3>Sign Up with Email and Password</h3>
        <div>
          <form onSubmit={handleRegister}>
            <label htmlFor="name">Name:</label> <br />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="your name"
              className="border-2 border-gray-500 p-2"
            />
            <br />
            <label htmlFor="email">Email:</label> <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your email"
              className="border-2 border-gray-500 p-2"
            />
            <br />
            <label htmlFor="password">Password:</label> <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="your password"
              className="border-2 border-gray-500 p-2"
            />
            <br />
            <label htmlFor="image">Image:</label> <br />
            <input
              type="text"
              name="image"
              id="image"
              placeholder="your image"
              className="border-2 border-gray-500 p-2"
            />
            <br />
            <label htmlFor="type">Type:</label> <br />
            <select
              name="type"
              id="type"
              placeholder="user type"
              className="border-2 border-gray-500 p-2"
            >
              <option value="user">User</option>
              <option value="moderator">Moderator</option>
              <option value="admin">Admin</option>
            </select>
            <br />
            <button className="bg-red-800 px-3 py-1 mt-3 text-white text-lg">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
