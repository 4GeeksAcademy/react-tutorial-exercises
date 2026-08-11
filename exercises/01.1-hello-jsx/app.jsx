import React from "react";
import ReactDOM from "react-dom";

// If we have a variable
let age = "12";
let name = "John";

// We can use it in our html like this
let output = (
	<span>
		{name} is {age} years old
	</span>
);

// Use react-dom to render it
ReactDOM.render(output, document.querySelector("#myDiv"));
