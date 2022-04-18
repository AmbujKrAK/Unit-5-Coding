import { useEffect, useState } from 'react'
// import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    async function getData(){
      let data = await fetch('http://localhost:5000/posts');
      let res = await data.json();
      console.log(res);
    }
    getData()

    async function postData(){
      let post = await fetch("http://localhost:5000/posts", 

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
      )


    }

  },[])

  

  function Counts(a){
    setCount(count+a)

  }

  return (
    <div className="App">
      <button onClick={()=>{Counts(1)}}>Count {count}</button>
    </div>
  )
}

export default App
