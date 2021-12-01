import { useState } from "react";
import './App.css';
import foodDataJSON from "./foods.json";
import FoodList from './components/FoodList';
import AddFoodForm from './components/AddFoodForm';



function App() {

  const [food, setFood ] = useState(foodDataJSON)

  function createFood(body){
    //console.log("body --------> ", body)
    //body._id = parseInt (Math.random() * 10000)
    setFood([body, ...food ]) // movies.concat([body])
    console.log("FOOD --------> ", food)
  }
  

  return (
    <div className="App">
      <AddFoodForm  parentCB={createFood} />
      <FoodList />
      
    </div>
  )
}

export default App;
