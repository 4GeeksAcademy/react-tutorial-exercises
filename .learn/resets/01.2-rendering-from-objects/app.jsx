import React from "react";
import ReactDOM from "react-dom";

const customer = {
	first_name: "Bob",
	last_name: "Dylan"
};

//              Your code inside these <div> tags
const output = <div></div>;

//               what     where
ReactDOM.render(output, document.querySelector("#myDiv"));
