import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const dropdownItems = [];

const content = (
	<div className="dropdown">
		<button
			className="btn btn-secondary dropdown-toggle"
			type="button"
			id="dropdownMenuButton"
			data-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false">
			Dropdown button
		</button>
		<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			{dropdownItems}
		</div>
	</div>
);

ReactDOM.render(content, document.querySelector("#myDiv"));
