import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import './App.css';
import { useState } from "react";

function App() {

  const [show, setShow] = useState(true);


  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>{setShow(!show)}}>Add a new student</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {show ? <ShowStudents /> : <AddStudent/> }
      {/* make sure to show either of them do not both together */}
    
    </div>
  );
}

export default App;
