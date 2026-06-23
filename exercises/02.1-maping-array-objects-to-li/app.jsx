import React from "react";
import ReactDOM from "react-dom";

const animals = [{ label: "Horse" }, { label: "Turtle" }, { label: "Elephant" }, { label: "Monkey" }];

/**
 * Change the content of the map function
 **/
const animalsInHTML = animals.map((singleAnimal, index) => {
	return <li key={index}>{singleAnimal.label}</li>;
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
