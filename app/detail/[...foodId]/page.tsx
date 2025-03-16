import { notFound } from "next/navigation";
import styles from "./foodDetail.module.css";

export type FoodDetailProps = {
  id: string;
  cookTimeMinutes: number;
  cuisine: string;
  difficulty: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  name: string;
  prepTimeMinutes: number;
  tags: string[];
};

const getFoodDetail = async (foodId: string) => {
  const response = await fetch(`https://dummyjson.com/recipes/${foodId}`);
  if (!response.ok) {
    notFound();
  }
  const result = await response.json();
  return result;
};

export default async function FoodDetails({ params }: { params: { foodId: string } }) {
  const food = await getFoodDetail(params.foodId);

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={food?.image} alt={food?.name} className={styles.image} />
      </div>
      <h1 className={styles.title}> <span style={{color:"red"}}>name:</span> {food?.name}</h1>
      <p className={styles.meta}>
        <span className={styles.sectionName}><span style={{color:"red", fontWeight:"700",fontSize:"17px"}}>cuisine:</span> {food?.cuisine}</span>
      </p>
      <p className={styles.meta}>
        <span className={styles.sectionName}><span style={{color:"red"}}>cookTimeMinutes:</span> {food?.cookTimeMinutes}</span>
      </p>
      <p className={styles.meta}>
        <span className={styles.sectionName}><span style={{color:"red"}}>difficulty:</span> {food?.difficulty}</span>
      </p>
      <p className={styles.meta}>
        <span className={styles.sectionName}><span style={{color:"red"}}>ingredients:</span> {food?.ingredients}</span>
      </p>
      <p className={styles.meta}>
        <span className={styles.sectionName}><span style={{color:"red"}}>instructions:</span> {food?.instructions}</span>
      </p>
      <p className={styles.meta}>
        <span className={styles.sectionName}><span style={{color:"red"}}>tags:</span> {food?.tags}</span>
      </p>
     
    </div>
  );
}