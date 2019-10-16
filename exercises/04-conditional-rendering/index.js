import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = props => {
	//add the condition inside this function
	return (
		<div class="alert alert-danger" role="alert">
			This is a primary alert-check it out!
		</div>
	);
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert show={true} />
		<Alert text={false} />
	</div>,
	document.querySelector("#myDiv")
);
