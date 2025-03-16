import { FoodListProps } from ".";
import styles from "./foodCart.module.css";
import Button from "../Button";
import Link from "next/link";
import { useState, useEffect } from "react";


const CartContent = (props: FoodListProps) => {
  const {
    className,
    id,
    cookTimeMinutes,
    cuisine,
    difficulty,
    image,
    ingredients,
    instructions,
    name,
    prepTimeMinutes,
    tags,
  } = props;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.some((fav: any) => fav.id === props.id));
  }, [props.id]);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    // ساخت آبجکت کامل برای ذخیره
    const foodItem = {
      id,
      className,
      cookTimeMinutes,
      cuisine,
      difficulty,
      image,
      ingredients,
      instructions,
      name,
      prepTimeMinutes,
      tags,
    };
    
    if (isFavorite) {
      const newFavorites = favorites.filter((fav: any) => fav.id !== id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
      const newFavorites = [...favorites, foodItem];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
    
    window.dispatchEvent(new Event('storage'));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card2}>

      {image && (
        <img src={image} alt={name} className={styles.image} />
      )}
      <div className={styles.content}>
        <Link href={`/detail/${id}`}>
          <h2 className={styles.title}><span style={{color:"red"}}>Name:</span> {name}</h2>
        </Link>
        <p className={styles.description}><span>cuisine:</span> {cuisine}</p>
        <p className={styles.description}><span>difficulty:</span> {Array.isArray(difficulty) ? difficulty.join(", ") : difficulty}</p>
        <p className={styles.description}>Tags: {Array.isArray(tags) ? tags.join(", ") : tags}</p>
        <button 
          onClick={handleFavorite}
          className={styles.favoriteButton}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
        <Button />
      </div>
    </div>
  );
};

export default CartContent;