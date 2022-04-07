const { sum, multi } = require("./calc");
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

console.log(sum(53, 16))
console.log(multi(5, 5))
console.log("Hello World !")


const root = document.getElementById('root');

// const h3 = document.createElement('h3');
// h3.textContent = "This is the Intro to Webpackage Lecture.";
// h3.classList.add("redtext");
// // Above Style can also be written as h1.setAtrribute("class","redtext");

// root.append(h3); // Can also be Written as root.appendChild(h3);

// ---------- To run CSS file in js file we need to packages - style-loader & css-loader


// -----------------React Syntax ---------------//

// const h1 = React.createElement("h1", { className: "redtext" }, "Hello World from React !")

// const div = React.createElement("div", {}, "New Div");

// const img = React.createElement("img", {
//     width: "600px",
//     src: "https://picsum.photos/536/354",
// })

// const toShow = true;

// const p = React.createElement(
//     "p",
//     { className: "redtext", id: "uniqID" },
//     h1,
//     "test",
//     div,
//     toShow ? img : null
// );



ReactDOM.render(
    // p, // What
    <div>
        <h1 className="bold">Hello React !!!!!!!!!!!</h1>
        <img
            src="https://picsum.photos/536/354"
            width="600px" />
    </div>,
    root // Where, we have provide the variable above.
);