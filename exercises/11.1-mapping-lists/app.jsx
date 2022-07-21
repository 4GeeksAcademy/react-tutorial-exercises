import React from "react";
import ReactDOM from "react-dom";

function ListOfLanguages() {
	let programmingLanguages = ["JavaScript", "Python", "Java", "C++"];

	return (
		<div className="col-4 mx-auto mt-5">
			<h2 className="text-center">My Favorite Programming Languages</h2>
			<ul>
				{/* Add your code after this line */}

			</ul>
		</div>
	);
}

const myDiv = document.querySelector("#myDiv");

ReactDOM.render(<ListOfLanguages />, myDiv);
