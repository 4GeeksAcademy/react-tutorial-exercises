import React from "react";
import ReactDOM from "react-dom";

const Profile = () => {
	let age = Math.floor(Math.random() * 40) + 10;
	// Add your code below this line:

};

const myDiv = document.querySelector("#myDiv");

// Notice the syntax to call components <Product />
ReactDOM.render(<Profile />, myDiv);