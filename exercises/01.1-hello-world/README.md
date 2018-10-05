# `01.1` Hello World

Today's bigest pain for front-end developers is **working with the DOM** something that React.js does best.

React.js it's a rendering engine/library, its main goal is to save us (the developers) time while creating dynamic HTML.

The library comes with a function called **ReactDOM.render** that receives two parameters:

1. What to render.
2. Where to render it.

For example:

```js
import React from 'react'; //import the react library
import ReactDOM from 'react-dom'; //import react-dom to make react generate html

// WHAT: This variable contains all the HTML that will be rendered
let output = <span> James is 12 years old </span>

// WHERE: A DOM element that will contain the entire react generated html
const myDiv = document.querySelector('#myDiv');

               //what           //where
ReactDOM.render(whatToRender(), myDiv);
```

The function `ReactDOM.render` will set the innerHTML of `myDiv` (any DOM element) to be whatever the variable `output` contains, very similar to how `innerHTML` works:
```js
//This is how you would do it without react.
myDiv.innerHTML = '<span> James is 12 years old </span>';

// This is hot you would do it with react.
ReactDOM.render(<span> James is 12 years old </span>, myDiv);
```

# Instructions

Open the `01.1-hello-world/index.js` file and take some time to understand it.
Then, change variable __output__ to:
```<span> James is <strong>12</strong> years old </span>```
