import React from "react";
import ReactDOM from "react-dom";

function ListOfLanguages() {
	let programmingLanguages = ["JavaScript", "Python", "Java", "C++"];
	let elements = [];

	for (let i = 0; i < programmingLanguages.length; i++) {
		let listItem = <li>{programmingLanguages[i]}</li>;
		elements.push(listItem);
	}

	return (
		<div className="col-4 mx-auto mt-5">
			<h2 className="text-center">My Favorite Programming Languages</h2>
			<ul>
				{/* Your JSX code below this line */}
				{elements}
			</ul>
		</div>
	);
}

const myDiv = document.querySelector("#myDiv");

ReactDOM.render(<ListOfLanguages />, myDiv);
