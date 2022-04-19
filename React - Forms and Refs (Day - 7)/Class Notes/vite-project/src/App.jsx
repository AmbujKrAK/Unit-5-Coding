import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Form } from './components/Form'
function App() {

const [counter,setCounter] = useState(0);
const counterRef = useRef(null);

// console.log("x is initially:",ref);
useEffect(()=>{
  counterRef = (()=>{
    setCounter((p)=> p-1);
  },300);
},[])

  return (
    <div className="App">
      <h3>Counter:{counter}</h3>

    <button onClick={()=>{
      clearInterval(counterRef.current);
    }}>

    </button>
    
      <Form />
    </div>
  )
}

export default App



