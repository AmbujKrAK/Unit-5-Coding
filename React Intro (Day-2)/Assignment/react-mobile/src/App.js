
import './App.css';

function App() {

  const heading1 = "Mobile Operation System"
  const heading2 = "Mobile Manufacturers"

  const phone = ["Android", "BlackBerry", "iPhone", "Window Phone"];
  const manufacturers = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div className="App">
      <div><h1>{heading1}</h1></div>

      <ul>
        {phone.map((el) => {
          return <li>{el}</li>
        })}
      </ul>

      <div><h1>{heading2}</h1></div>

      <ul>
        {manufacturers.map((el) => {
          return <li>{el}</li>
        })}
      </ul>

    </div>
  );
}

export default App;
