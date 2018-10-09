import React from "react";
import ReactDOM from "react-dom";

export const WhatToRender = () => {
  return <h1>I Love React</h1>;
};

const myDiv = document.querySelector("#myDiv");

// change the syntaxt of the first parameter to make it <WhatToRender /> instead of WhatToRender()
ReactDOM.render(<WhatToRender />, myDiv);
