import CartContent from "./cartContex";
import styles from "./foodCart.module.css";
import RouteToDetail from "./routeToDetail";

export type FoodListProps = {
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
};

const FoodCart = (props: FoodListProps) => {
  return (
    <main className={styles.card}>
      <RouteToDetail id={props.id}>
        <CartContent {...props} />
      </RouteToDetail>
    </main>
  );
};

export default FoodCart;