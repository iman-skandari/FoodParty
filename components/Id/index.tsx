
import Link from "next/link";
import Button from "../Button"
import styles from "./id.module.css"
type FoodListProps = {
  id: string
  className: string
  cookTimeMinutes:number
  cuisine:string
  difficulty: string
  image: string
  ingredients: string[]
  instructions: string[]
  name: string
  prepTimeMinutes: number
  tags: string[]
}


const IdRoute = (
  { 
   
  className,
  id,
  cookTimeMinutes,cuisine,difficulty,image,ingredients,instructions,name,prepTimeMinutes,tags
}:FoodListProps) => {
    const convertInstructionsToNumeric = (instructions: any[]) => {
        return instructions.map((instruction: any, index: number) => index + 1); // یا هر منطق دیگری
      };
  return (
    <Link href={`/detail/${id}`}>
    <main className={styles.card}>
        <div className={styles.cardContainer}>
          <div className={styles.cardImg}><img src={image} alt="image" /></div>
          <div className={styles.cardTitle}>Name: {name} <br /> Cuisine: {cuisine}</div>
          <div className={styles.cardDifficulty}>{difficulty}</div>
          <div className={styles.cardCookTimeMinutes}>{cookTimeMinutes}</div>
          <div className={styles.cardIngredients}>{ingredients}</div> 
          <div className={styles.cardInstructions}> instructions:
             <ul>
              <li>
               {instructions}
              </li>
            </ul>
                </div> 
          <div className={styles.cardPrepTimeMinutes}><h1>prepTimeMinutes:</h1> {prepTimeMinutes}</div>  
          <div className={styles.cardTags}><h1>tags:</h1>{tags}</div>  
        </div>
       
    </main>
    </Link >
  )
}

export default IdRoute
