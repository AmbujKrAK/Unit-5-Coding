// import logo from './logo.svg';
import './App.css';

function App() {
  const data = "Hello World!";
  return (
    <div className="App">
     <First data={data}/>
    <Second/>
    </div>
  );
}

function First({data}){
  console.log("Recevied from Parent",{data})
  return <div>First Child,{data}</div>
}

const Second = () => {
  return <div>Second Child</div>
}

export default App;
