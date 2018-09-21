# `01` Hello World

As a web developer, you would use React to create dynamic HTML and CSS faster and easier.

Today's bigest pain for front-end developers is **Working with the DOM**. And that its what React.js do best.

To acomplish that, the library comes with a function called **ReactDOM.render** that receives two parameters:

1. What to render.
2. Where to render it.

For example:

```js
import React from 'react'; //import the react library
import ReactDOM from 'react-dom'; //import react-dom to make react generate html

// WHAT: This function returns a string that will be rendered
const whatToRender = () => {
    return 'I Love React';
}

// WHERE: A DOM element that will contain the entire react generated html
const myDiv = document.querySelector('#myDiv');

               //what           //where
ReactDOM.render(whatToRender(), myDiv);
```

The function `ReactDOM.render` will set the innerHTML of `myDiv` to contain what the function `whatToRender` returns, very similar to how innerHTML works:
```
//This is how you would do it without react.
myDiv.innerHTML = whatToRender();

// This is hot you would do it with react.
ReactDOM.render(whatToRender(), myDiv);
```

# Instructions

Open the `01-hello-world/index.js` file and take some time to understand it.
Then, make the function __whatToRender__ return `"I Love React"` instead of `"Hello World"`