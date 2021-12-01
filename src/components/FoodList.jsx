import { useState } from "react"
import FoodBox from "./FoodBox";
import foodDataJSON from "../foods.json";

export default function FoodList(props){

    const [foodList, setFoodList ] = useState(foodDataJSON)

    return (
        <>
        {
            foodDataJSON.map((food)=>{
                return(
                    <div>
                        <FoodBox food={food}/>
                    </div>
                )
            })
        }
        </>
          
    )
}