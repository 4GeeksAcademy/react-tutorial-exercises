import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// add the green inside this function
const Alert = props => {
	let alertClasses = "alert";
	if (props.color == "red") alertClasses += " alert-danger";
	else if (props.color == "orange") alertClasses += " alert-warning";
	else alert("Invalid color, you can only specify: red or orange (for now)");

	return (
		<div className={alertClasses} role="alert">
			{props.text}
		</div>
	);
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understan what properties is the component using
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
		<Alert text="I am supposed to be green" color="green" />
	</div>,
	document.querySelector("#myDiv")
);
