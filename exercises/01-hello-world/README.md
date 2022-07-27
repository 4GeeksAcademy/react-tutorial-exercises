---
tutorial: "https://www.youtube.com/watch?v=Qdu6GSew8xM"
---

# `01` Hello World

Today's biggest pain for front-end developers is **working with the DOM** to create dynamic HTML, and that is something that React.js does best.

React.js is a rendering library made to optimize the DOM: developers save time and the browser is faster.

The library comes with a function called **ReactDOM.render** that you can see as a replacement for the classic [innerHTML property](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)

The `ReactDOM.render` function receives two parameters:

+  What to render (the inner HTML).

+  Where to render it (DOM element).

In the code given, the function `ReactDOM.render()` will set the innerHTML of `myDiv` (a DOM element) to be whatever the variable `output` contains, very similar to how `innerHTML` works:

```js
//This is how you would do it without react.
myDiv.innerHTML = '<span>Hello World!</span>';

// This is not how you would do it with react.
ReactDOM.render(<span>Hello World!</span>, myDiv);
```

## 📝 Instructions:

1. Take some time to understand the `app.jsx` file.

2. Change the variable `output` to:

```jsx
<h1>Hello <strong>World!</strong></h1>
```