
import './App.css';
import './components/catogories';
import { Category } from './components/catogories';

import { useState } from "react";

function App() {

  // const [counter, setCounter] = useState(0);

  const [counter, setCounter] = useState(0);

  const handleChange = (value) => {
    setCounter(counter + value)
  };



// const [name, setName] = useState("JAVA");
// setName("JavaScript")

const navbar = [
  {
    image: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    title: "Top Offers"
  },
  {
    image: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    title: "Top Offers"
  },
  {
    image: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    title: "Phones"
  },
]

return (
  <div className="nav">
    {navbar.map((el) => (
      <Category image={el.image} label={el.title} />
    ))}


    {/* ---------------- Counter -------------------- */}


    {/* <h3>Counter: {counter}</h3>
      <button onClick={() => {
        if (counter >= 10) {
          return;
        }
        setCounter(counter + 1)
      }}> Add 1 </button>

      <button onClick={() => {
        if (counter <= 0) {
          return;
        }
        setCounter(counter - 1)
      }}> Remove 1 </button> */}

    <div className='App'>
      <h3>Counter: {counter}</h3>
      <button onClick={() => handleChange(1)}> Add 1 </button>

      <button onClick={() => handleChange(-1)}> Sub 1 </button>
    </div>


  </div>
);

}



export default App;
