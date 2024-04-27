import React from "react"; // Main React.js library
import ReactDOM from "react-dom"; // We use ReactDOM to render into the DOM

// Only update the value of this array
const navlinkItems = [];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
