// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Todo } from './components/todo';
import { TodoInput } from './components/todoInput';

function App() {
  // const [message, setMessage] = useState("");

  // const getData = (data) => {
  //   console.log("Data:", data)
  //   setMessage(data)

  // };

  return (
    <div className="App">

      {/* <First dataFn={getData} />
      <Second message={message}/> */}
   
      <Todo/>

    </div>
  );
}

// function First({ dataFn }) {
//   const data = "Hello World !"
//   return <div>First Child<button onClick={()=>{dataFn(data)}}>Send Data</button>
//   </div>
// }

// const Second = ({message}) => {
//   console.log("message:",{message})

//   return <div>Second Child,{message}</div>
// }

export default App;
