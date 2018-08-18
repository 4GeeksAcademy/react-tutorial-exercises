//Main React.js library
import React from 'react';
//we use ReactDOM to render into the DOM
import ReactDOM from 'react-dom';

// This function returns a string that will be rendered
const WhatToRender = () => {
    return 'Hello Worldd';
};

//A DOM element were react will render the image
const myDiv = document.querySelector('#myDiv');

               //what           //where
ReactDOM.render(WhatToRender(), myDiv);