# `01` Hello World

Today's bigest pain for front-end developers is **working with the DOM** something that React.js does best.

React.js it's a rendering engine/library, its main goal is to save us (the developers) time while creating dynamic HTML.

The library comes with a function called **ReactDOM.render** that receives two parameters:

1) What to render.
2) Where to render it.

For example:

```js
import React from 'react';
import ReactDOM from 'react-dom';

//This function returns a string that will be rendered
const whatToRender = () => {
    return 'I Love React';
}

//A DOM element were react will render the image
const myDiv = document.querySelector('#myDiv');

               //what           //where
ReactDOM.render(whatToRender(), myDiv);
```

As you can see, the function is simillar to the innerHTML property handling.

# Instructions

Open the `01-hello-world/index.js` file, take some time to understand it, when you feel that you successfully locate variables/functions change the function __whatToRender__ so it wil return "I Love React" instead of "Hello World".
