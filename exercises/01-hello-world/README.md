# `01` Hello World

Today's bigest pain for front-end developers is **working with the DOM** something that React.js does best.

React.js it's a rendering engine/library, its main goal is to save us (the developers) time while creating dynamic HTML.

The library comes with a function called **ReactDOM.render** that receives two parameters:

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

<<<<<<< HEAD
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
=======
As you can see, the function is simillar to the innerHTML property handling.

# Instructions

Open the `01-hello-world/index.js` file, take some time to understand it, when you feel that you successfully locate variables/functions change the function __whatToRender__ so it wil return "I Love React" instead of "Hello World".
>>>>>>> e46912d7ae3af6d262f27156c7bda5c8d2068848
