import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = (props) => {
	// Add the condition inside this function
	if (props.show === false) {
		return null;
	} else {
		return (
			<div className="alert alert-primary" role="alert">
				{props.text}
			</div>
		);
	}
};

Alert.propTypes = {
	show: PropTypes.bool,
	text: PropTypes.string,
};

// Here is where the <Alert /> component is being used, you don't have to edit this part
// But it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert show={true} text="This is a primary alert - check it out!" />
		<Alert show={false} text="This alert shouldn't appear" />
	</div>,
	document.querySelector("#myDiv")
);
