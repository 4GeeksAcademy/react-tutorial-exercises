import React from "react";
import ReactDOM from "react-dom";

const output = (
	<div className="card col-3 mx-auto">
		<img src="../../.learn/assets/rigo-baby.jpg" className="w-100" alt="..." />
		<div className="card-body">
			<h5 className="card-title">Rigo</h5>
			<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			<a href="#" className="btn btn-primary">
				Go somewhere
			</a>
		</div>
	</div>
);

const myDiv = document.querySelector("#myDiv");

ReactDOM.render(output, myDiv);
