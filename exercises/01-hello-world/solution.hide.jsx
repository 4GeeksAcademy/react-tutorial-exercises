// Here you are importing the React Library
import React from "react";
// Here you are importing the library that allows you to render into the DOM
import ReactDOM from "react-dom";

// WHAT: This variable contains the html we are going to render.
let output = (
	<h1>
		Hello <strong>World!</strong>
	</h1>
);

// WHERE: A DOM element that will contain the entire react generated html
const myDiv = document.querySelector("#myDiv");

//             (What,   Where)
ReactDOM.render(output, myDiv);
