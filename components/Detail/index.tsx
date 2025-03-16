
import food from "../../assets/image/food.webp"
import styles from "./detail.module.css"
import { FoodListProps } from "../FoodList/type"
import IdRoute from "../Id"

const DetailRoute = async({ list = [] }:FoodListProps) => {

  return (
    <div className={styles.foodContainer}>
      <div className={styles.foodImg}>
        <img src={food.src} alt="" />
      </div>
      <h1 style={{border:"1px solid none",color:"red",padding:".7rem",borderRadius:"6px",textAlign:"center",margin:"1rem",fontWeight:"800", }}>Menu Item</h1>
      <div className={styles.foodCard2}>
        {list.map((food, index) => (
            <IdRoute  
            className={styles[`item${index}`]}
            key={food.id}
            id={food.id}
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
        

    </div>
  )
}

export default DetailRoute
