import React from "react";
import ReactDOM from "react-dom";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

/**
 * Change the content inside the map function
 * animalsInHTML
 * singleAnimal
 **/

const animalsInHTML = animals.map((singleAnimal, index) => {
	return <li key={index}>{singleAnimal}</li>;
});

ReactDOM.render(<ol>{animalsInHTML}</ol>, document.querySelector("#myDiv"));
