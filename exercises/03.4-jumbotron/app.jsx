import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Jumbotron = props => {
	// Here you have to return expected html using the properties being passed to the component
};

Jumbotron.propTypes = {
	// PropTypes here
	title: PropTypes.string,

};

ReactDOM.render(
	<Jumbotron
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		buttonLabel="Go to the official website"
		buttonURL="https://reactjs.org/"
	/>,

	document.querySelector("#myDiv")
);
