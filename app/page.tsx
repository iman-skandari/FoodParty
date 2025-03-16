"use client"
import React, { useState, useEffect } from "react";
import FoodList from "@/components/FoodList";
import Navbar from "@/components/Navbar";
import LoadingSpinner from "@/components/LoadingSpinner";
import FoodAnimation from "@/components/Anime";

const fetchRecipes = async () => {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default function Home() {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFoods = async () => {
      try {
        const data = await fetchRecipes();
        setFoods(data);
        setFilteredFoods(data);
      } catch (error) {
        console.error("Error loading foods:", error);
      } finally {
        setLoading(false);
      }
    };
    loadFoods();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = foods.filter((food: { name: string }) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="containers">
      <Navbar onSearch={handleSearch} />
      <FoodAnimation />
      <FoodList list={filteredFoods} />
    </div>
  );
}