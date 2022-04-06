const {sum,multi} = require("./calc");

import "./index.css";

console.log(sum(53,16))
console.log(multi(5,5))
console.log("Hello World !")


const root = document.getElementById('root');

const h3 = document.createElement('h3');
h3.textContent = "This is the Intro to Webpackage Lecture.";
h3.classList.add("redtext");
// Above Style can also be written as h1.setAtrribute("class","redtext");

root.append(h3); // Can also be Written as root.appendChild(h3);

// ---------- To run CSS file in js file we need to packages - style-loader & css-loader
