import DetailRoute from "@/components/Detail";
import FoodList from "@/components/FoodList/index";


const fetchRecipes = async (detail:string) => {
  try {
    const response = await fetch(`https://dummyjson.com/${detail}recipes`);
    
   
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); 
    console.log(data); 
    return data.recipes;
  } catch (error) {
    console.error('Error fetching data:', error); 
  }
};

export default async function DetailId({params}: {params: {detail: string}}) {
  
    const list= await fetchRecipes(params?.detail)
  // فراخوانی تابع

  return (
    <div className="containers">

     <DetailRoute list={list} />
    </div>
  );
}