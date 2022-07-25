import React from "react";
import ReactDOM from "react-dom";

const Hello = () => {
	return (
		<div className="col-3 mx-auto mt-5 rounded border">
			<button className="w-100 btn btn-success" onClick={() => alert("Hello World!")}>
				Click Here!
			</button>
		</div>
	);
};

const myDiv = document.querySelector("#myDiv");

// Notice the syntax to call components <Product />
ReactDOM.render(<Hello />, myDiv);
