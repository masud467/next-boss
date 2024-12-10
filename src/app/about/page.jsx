import AboutContent from "@/components/AboutContent";
import React from "react";

export const metadata = {
  title: "About",
  description: "About Page",
  keywords: ["about", "about page"],
};

const Page = () => {
  return (
    <div>
      <AboutContent></AboutContent>
    </div>
  );
};

export default Page;
