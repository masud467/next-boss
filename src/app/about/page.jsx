import AboutContent from "@/components/AboutContent";
import React from "react";

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

const Page = () => {
  // const currentTime = getTime();
  return (
    <div>
      <h1>About page</h1>
      {/* <p>Time: {currentTime}</p> */}
      <AboutContent></AboutContent>
    </div>
  );
};

export default Page;
