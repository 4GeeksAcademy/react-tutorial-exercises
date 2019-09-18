import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the maping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */
const mappingFunction = (planet, index) => {
	return (
		<li className="list-group-item" key={index}>
			{planet}
		</li>
	);
};

const planetsInHTML = planets.map(mappingFunction);

// 2) add the array planetsInHTML inside the innerHTML of this ul
const content = <ul className="list-group m-5">{planetsInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));

