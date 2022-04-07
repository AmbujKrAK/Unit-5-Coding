
import './App.css'



function App() {

  const food = "Pizza";
  const age = 18;
  const skills = ["one", "two", "three", "four", "five"]


  return (
    <div className="App">
      <h1>REACT MOBILE OS</h1>
      <div>My fav food is {food}</div>
      <div> You are {age >= 18 ? "Eligible" : "Not Eligible"} for License.</div>
      <div>
          {skills.map((e) => {
            return <Skill skills={e}/>
          })}
      </div>
    </div>
  );
}

//Components

function Skill({skills}){
  return <p className="text"> Skill: {skills}</p>
}


export default App;
