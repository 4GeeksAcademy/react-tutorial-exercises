import React from "react";
import ReactDOM from "react-dom";

const output = (
    <div>
        <h1>Hello World!</h1>
        <p>This is the second element</p>
        <strong>This is the last element</strong>
    </div>
);

const myDiv = document.querySelector("#myDiv");

ReactDOM.render(output, myDiv);
