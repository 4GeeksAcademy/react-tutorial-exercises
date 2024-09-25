import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

/**
 * Here you have to declare your Alert component and return
 * the html that bootstrap dictates for its alert component
 */


// Here is where the <Alert /> component is being used, you don't have to edit this part
// But it helps you understand what properties the component is using
ReactDOM.render(<Alert text="OMG! Something really bad has happened!" />, document.querySelector("#myDiv"));
