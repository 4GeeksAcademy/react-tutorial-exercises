import React from "react";
import ReactDOM from "react-dom";

let imageSrc = "../../.learn/assets/05.2-using-variables.jpg";

const output = (
	<div className="col-2 border rounded mx-auto mt-5 p-3 bg-dark text-light">
		<img src="Add the image here!" alt="That is not my image" className="w-100 img-fluid rounded mb-2" />
		<h3 className="text-center">Alfredo The Goat</h3>
		<strong>Age: </strong>
		<p>23 years old</p>
		<strong>Job: </strong>
		<p>Software Developer</p>
	</div>
);

const myDiv = document.querySelector("#myDiv");

ReactDOM.render(output, myDiv);
