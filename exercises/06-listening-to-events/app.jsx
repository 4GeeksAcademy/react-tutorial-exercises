import React from "react";
import ReactDOM from "react-dom";

const clickHandler = e => {
	console.log("I was clicked!", e);
};

const Alert = () => {
	return <button onClick={clickHandler} className="btn btn-success btn-lg">Click Me</button>;
};

// You don't have to edit anything below
ReactDOM.render(<Alert />, document.querySelector("#myDiv"));
