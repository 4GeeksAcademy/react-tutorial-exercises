import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const buttonStyles = {
	// Write button styles here

};

const badgeStyles = {
	// Write the span styles here

};

const Badge = props => {
	return (
		<button style={buttonStyles} type="button" className="btn btn-primary">
			{props.label}
			<span style={badgeStyles} className="badge badge-light">
				{props.number}
			</span>
		</button>
	);
};

Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string
};

ReactDOM.render(<Badge label="Alerts" number="2" />, document.querySelector("#myDiv"));
