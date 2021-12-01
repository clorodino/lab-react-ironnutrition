import { useState } from "react";
import "./App.css";
import foodDataJSON from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";

function App() {
    const [food, setFood] = useState(foodDataJSON);

    function createFood(body) {
        console.log("body --------> ", body);
        body._id = parseInt(Math.random() * 10000);
        setFood([body, ...food]); // movies.concat([body])
        console.log("FOOD --------> ", food);
    }

    return (
        <div className="App">
            <AddFoodForm parentCB={createFood} />
            <h2>Food List</h2>
            <div className="FoodList">
              {food.map((food) => {
                  return <FoodBox food={food} />;
              })}
            </div>
            
        </div>
    );
}

export default App;
