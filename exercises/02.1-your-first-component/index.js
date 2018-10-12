import React from "react";
import ReactDOM from "react-dom";

export const PrintHello = () => {
	return <h1>I Love React</h1>;
};

// change the syntaxt of the first parameter to make it <PrintHello /> instead of PrintHello()
ReactDOM.render(PrintHello(), document.querySelector("#myDiv"));
