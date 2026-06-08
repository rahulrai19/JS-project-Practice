import { useEffect,useState } from "react";
import FoodCard from "./components/FoodCard";
import Cart from "./components/Cart";
import "./App.css";

function App(){
  const[foods,setFoods] = useState([]);
  const [cart,setCart] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/api/foods")
    .then((res)=>res.json())
    .then((data)=>setFoods(data))
    .catch((err)=>console.log(err));
  },[]);
    const addToCart = (food) => {
    setCart([...cart, food]);
  };
  const remove = (indexToRemove)=>{
    setCart(cart.filter((_,index)=> index!==indexToRemove))
  }
return(
<div>
  <h1> Restaurant </h1>
  <Cart cart={cart}
  remove={remove}
  />
  <div>

  {foods.map((food)=>(
<FoodCard
  key={food.id}
  food={food}
  addToCart={addToCart}
  />
  ))}
  </div>
</div>
)

}
export default App;