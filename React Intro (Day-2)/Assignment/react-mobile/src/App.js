
// ****************************** All the HTML part will go in this page  ******************************************//


import './App.css';

function App() {

  const heading1 = "Mobile Operation System"
  const heading2 = "Mobile Manufacturers"

  const phone = ["Android", "BlackBerry", "iPhone", "Window Phone"];
  const manufacturers = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div className="App">

      {/* ------------As in below function we have mention heading and item so we here are specifying the heading as heading1 and heading2 and simmilarly with item . -----------*/}

      <Fun heading={heading1} item={phone} /> 
      <Fun heading={heading2} item={manufacturers} />

    </div>
  );
}

// Components 

// Below function will give data in the specified formate if invoked, however we have to mention the paraments - eg : props.heading so we have to specify that in above tag heading is something, similarly with props.items.

function Fun(props) {
  return (
    <div>
      <h3>{props.heading}</h3>
      <ul>
        {props.item.map((el) => {
          return <li>{el}</li>
        })}
      </ul>
    </div>
  )
};

export default App;
