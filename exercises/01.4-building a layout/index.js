import React from 'react';//Main React.js library

import ReactDOM from 'react-dom';//we use ReactDOM to render into the DOM

// This function returns a string that will be rendered
export const WhatToRender = () => {
    return <h1>Hello World</h1>;
};

//A DOM element were react will render the image
const myDiv = document.querySelector('#myDiv');

               //what           //where
ReactDOM.render(WhatToRender(), myDiv);
