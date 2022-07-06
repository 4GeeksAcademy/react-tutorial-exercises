import React from "react";
import ReactDOM from "react-dom";

const output = (
	<div class="card col-3 mx-auto">
		<img src="../../.learn/assets/rigo-baby.jpg" class="w-100" alt="..." />
		<div class="card-body">
			<h5 class="card-title">Rigo</h5>
			<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			<a href="#" class="btn btn-primary">
				Go somewhere
			</a>
		</div>
	</div>
);

const myDiv = document.querySelector("#myDiv");

ReactDOM.render(output, myDiv);
