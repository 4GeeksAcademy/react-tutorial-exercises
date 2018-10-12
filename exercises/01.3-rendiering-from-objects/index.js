import React from "react";
import ReactDOM from "react-dom";

const customer = {
	first_name: "Bob",
	last_name: "Dylan"
};

//              your inside these <div> tags
const output = <div></div>;

//what           //where
ReactDOM.render(output, document.querySelector("#myDiv"));
