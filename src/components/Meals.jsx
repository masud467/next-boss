"use client";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();

      setMeals(data.meals);
      setError("");
    } catch (error) {
      setError("No Data Found");
    }
  };

  useEffect(() => {
    loadData();
  }, [search]);
  const handler = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div className="mt-12">
      <input
        onChange={handler}
        type="text"
        placeholder="Search meals..."
        className="border-transparent outline-none p-4 bg-black text-white"
      />
      <button onClick={() => loadData()} className="bg-red-400 p-4">
        search
      </button>
      <div className="mt-12 grid grid-cols-3 gap-12">
        {Array.isArray(meals) &&
          meals?.length > 0 &&
          !error &&
          meals?.map((meal) => (
            <div key={meal?.idMeal} className="border-2 p-2">
              <h1>{meal?.strMeal}</h1>
              <h3>{meal?.strInstructions}</h3>
            </div>
          ))}
        {error && <h1 >No Data Found.....</h1>}
      </div>
    </div>
  );
};

export default Meals;
