import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Add the styles here
const mySuperStyles = {
	fontSize: "16px",
	background: "black",
	border: "1px solid yellow",
};

const Badge = (props) => {
	return (
		<button style={mySuperStyles} type="button" className="btn btn-primary">
			{props.label}
			<span className="badge badge-light">{props.number}</span>
		</button>
	);
};

Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string,
};

ReactDOM.render(<Badge label="Notifications" number="2" />, document.querySelector("#myDiv"));
