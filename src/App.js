import { useState } from "react";
import "./App.css";
import foodDataJSON from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";
import Search from "./components/Search";

function App() {
    const [food, setFood] = useState(foodDataJSON);

    function createFood(body) {
        body._id = parseInt(Math.random() * 10000);
        setFood([body, ...food]);
    }

    return (
        <div className="App">
            <AddFoodForm parentCB={createFood} />
            <Search />
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
