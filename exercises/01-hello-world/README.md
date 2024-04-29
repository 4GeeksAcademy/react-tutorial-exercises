---
tutorial: "https://www.youtube.com/watch?v=YTnv1aPEXWE"
---

# `01` Hello World

Today's biggest pain for front-end developers is **working with the DOM** to create dynamic HTML, and that is something that React.js does best.

React.js is a rendering library made to optimize the DOM: developers save time and the browser is faster.

The library comes with a function called **ReactDOM.render** that you can see as a replacement for the classic [innerHTML property](https://www.w3schools.com/jsref/prop_html_innerhtml.asp).

The `ReactDOM.render` function receives two parameters:

+  What to render (the inner HTML).

+  Where to render it (DOM element).

For example:

```jsx
import React from 'react'; // import the react library
import ReactDOM from 'react-dom'; // import react-dom to make react generate html

// WHAT: This variable contains all the html that will be rendered
let output = <span>James is 12 years old</span>

// WHERE: A DOM element that will contain the entire react generated html
const myDiv = document.querySelector('#myDiv');

               //what   //where
ReactDOM.render(output, myDiv);
```

The function `ReactDOM.render` will set the innerHTML of `myDiv` (a DOM element) to be whatever the variable `output` contains, very similar to how `innerHTML` works:

```jsx
// This is how you would do it without react
myDiv.innerHTML = '<span>James is 12 years old</span>';

// This is how you would do it with react
ReactDOM.render(<span> James is 12 years old </span>, myDiv);
```

## 📝 Instructions:

1. Open the `01-hello-world/app.jsx` file and take some time to understand it.

2. Change the variable `output` to:

```jsx
<span>James is <strong>12</strong> years old</span>
```

