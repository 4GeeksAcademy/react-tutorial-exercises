//FOMRA 1
import React from "react";
import ReactDOM from "react-dom";

let customer = {
	first_name: "Bob",
	last_name: "Dylan",
};

const output = (
	<div>
		<h1>My name is {customer.first_name}</h1>
		<h2>My last name is {customer.last_name}</h2>
	</div>
);

let myDiv = document.querySelector("#myDiv");

ReactDOM.render(output, myDiv);
