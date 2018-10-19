import React from "react";
import ReactDOM from "react-dom";

const Jumbotron = props => {
	//here you have to return the <a> with the properties included
};

ReactDOM.render(
	<Jumbotron
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		buttonLabel="Go to the officia website"
		buttonURL="https://reactjs.org/"
	/>,

	document.querySelector("#myDiv")
);
