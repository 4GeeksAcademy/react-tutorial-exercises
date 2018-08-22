# `01` Hello World

React it's just a rendering engine, its main goal is save us (the developers) time and effort in order to create dynamic HTML.

Today's bigest pain for front-end developers is: Working with the DOM and it's is basically what React.js do best.

To acomplish that, the library comes with a function called **ReactDOM.render** that receives two parameters:

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

As you can see, the function is simillar to the previous innerHTML property.

# Instructions

Open the `01-hello-world/index.js` file and take some time tu understand it.
Then, make the function __whatToRender__ return "I Love React" instead of "Hello World"