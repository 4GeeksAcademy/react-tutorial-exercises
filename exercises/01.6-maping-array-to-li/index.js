import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const animals = [ 'Horse', 'Turtle', 'Elephan', 'Monkey' ];

/**
 * change the content of the map function
 **/
const animalsInHTML = animals.map((animal, i) => {
    return (<li>hello</li>);
});

ReactDOM.render(animalsInHTML, document.querySelector("#myDiv"));
