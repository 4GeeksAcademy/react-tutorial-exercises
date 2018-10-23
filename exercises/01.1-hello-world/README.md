# `01.1` Hello World

Today's biggest pain for front-end developers is **working with the DOM** for create dynamic HTML, something that React.js does best.

React.js is a rendering library made to optimize the DOM: Developers save time and the browser is faster.

The library comes with a function called **ReactDOM.render** that you can see as a replacement for the classic [innerHTML property](https://www.w3schools.com/jsref/prop_html_innerhtml.asp).

`ReactDOM.render` receives two parameters:

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
ReactDOM.render(output, myDiv);
```

The function `ReactDOM.render` will set the innerHTML of `myDiv` (a DOM element) to be whatever the variable `output` contains, very similar to how `innerHTML` works:
```js
//This is how you would do it without react.
myDiv.innerHTML = '<span> James is 12 years old </span>';

// This is not you would do it with react.
ReactDOM.render(<span> James is 12 years old </span>, myDiv);
```
  
# :speech_balloon: Instructions

Open the `01.1-hello-world/index.js` file and take some time to understand it.
Then, change the variable __output__ to:
```<span> James is <strong>12</strong> years old </span>```
