import React from "react";
import FoodCart from "../FoodCard/index"; // وارد کردن کامپوننت FoodCart

interface Food {
  id: string;
  className: string;
  cookTimeMinutes: number;
  cuisine: string;
  difficulty: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  name: string;
  prepTimeMinutes: number;
  tags: string[];
}

interface FoodListProps {
  list: Food[];
}

const FoodList: React.FC<FoodListProps> = ({ list }) => {
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {list.map((food) => (
        <FoodCart
          key={food.id}
          id={food.id}
          className={food.className}
          cookTimeMinutes={food.cookTimeMinutes}
          cuisine={food.cuisine}
          difficulty={food.difficulty}
          image={food.image}
          ingredients={food.ingredients}
          instructions={food.instructions}
          name={food.name}
          prepTimeMinutes={food.prepTimeMinutes}
          tags={food.tags}
        />
      ))}
    </div>
  );
};

export default FoodList;