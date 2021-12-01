
import './App.css';
import foods from "./foods.json";
import FoodList from './components/FoodList';
import AddFoodForm from './components/AddFoodForm';


function App() {

  return (
    <div className="App">
      <AddFoodForm />
      <FoodList />
      
    </div>
  )
}

export default App;
