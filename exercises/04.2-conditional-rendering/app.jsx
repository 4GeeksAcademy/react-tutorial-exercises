import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// add the green inside this function
const Alert = props => {
	const colorClasses = {
		red: "alert-danger",
		orange: "alert-warning"
	};
	if (colorClasses[props.color] === undefined) alert(`The color ${props.color} is not in the possible list of colors`);

	return (
		<div className={`alert ${colorClasses[props.color]}`} role="alert">
			{props.text}
		</div>
	);
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties is the component using
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
		<Alert text="I am supposed to be green" color="green" />
	</div>,
	document.querySelector("#myDiv")
);
