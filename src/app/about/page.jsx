import AboutContent from "@/components/AboutContent";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "About",
  description: "About Page",
  keywords: ["about", "about page"],
};
// const getTime = async () => {
//   const res = await fetch("http://localhost:3000/time", {
//     next: {
//       revalidate: 10,
//     },
//   });
//   const data = await res.json();
//   return data.currentTime;
// };

const Page = async () => {
  // const currentTime = getTime();
  const session = await getServerSession(authOptions);
  console.log({ session });
  return (
    <div>
      <h1>About page</h1>
      {/* <p>Time: {currentTime}</p> */}
      <AboutContent></AboutContent>
    </div>
  );
};

export default Page;
