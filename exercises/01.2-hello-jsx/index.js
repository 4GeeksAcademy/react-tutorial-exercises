import React from "react";
import ReactDOM from "react-dom";

// if we have a variable
let age = 12;
let name = "Jhon";

// we can use it in our html like this
let output = <span>James is {age} years old</span>;

// use react-dom to render it
ReactDOM.render(output, document.querySelector("#myDiv"));
