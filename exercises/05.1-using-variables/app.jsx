import React from "react";
import ReactDOM from "react-dom";

let name = "John";
let lastname = "Doe";

const output = (
	<h1 className="col-2 mx-auto mt-5">
		Hello world!
	</h1>
);

const myDiv = document.querySelector("#myDiv");

ReactDOM.render(output, myDiv);
