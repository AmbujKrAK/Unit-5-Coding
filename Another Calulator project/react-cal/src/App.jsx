
import './App.css';

function App() {

  const createDigits = () =>{
    const Digits = [];
    for(var i = 1 ; i < 10 ; i++){
      Digits.push(
        <button key={i}>{i}</button>
      )
    } 
    return Digits
  }

  return (
    <div className="App">
      <div className="calculator">

        <div className="display">
          <span>(0)</span>0
        </div>

        <div className="oprators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>

        <div className="digits">
          {createDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
