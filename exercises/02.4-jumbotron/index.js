import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const Jumbotron = props => {
	//here you have to return expected html using the properties being passed to the component
};

Jumbotron.propTypes = {
    //proptypes here
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
