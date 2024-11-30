import Meals from "@/components/Meals";
import React from "react";
import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="p-12">
      <h1 className="text-3xl font-semibold text-red-400">Choose your meals</h1>
      <p className={styles.font_tomato}>Find your meals by searching...</p>
      <div>
        <Meals></Meals>
      </div>
    </div>
  );
};

export default Page;
