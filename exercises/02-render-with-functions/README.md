# `02` Render with Functions

You can also use functions to render HTML, that is the most used practice because it lets you create boilerplates and re-use your code a lot, e.g:

```js

// WHAT: This function returns a string that will be rendered
const whatToRender = () => {
    return <h1>Hello World</h1>;
}

// WHERE: A DOM element that will contain the entire react generated html
const myDiv = document.querySelector('#myDiv');

               //what           //where
ReactDOM.render(whatToRender(), myDiv);
```

The function `ReactDOM.render` will set the innerHTML of `myDiv` to contain what the function `whatToRender` returns, very similar to how innerHTML works in plain JavaScript:

```js
// This is how you would do it without react but you cannot use JSX
// you will have to return a string only
myDiv.innerHTML = whatToRender();

// This is hot you would do it with react. 
// With this approach your function is able to use JSX
ReactDOM.render(whatToRender(), myDiv);
```

# :speech_balloon: Instructions

Open the `01.3-render-with-functions/index.js` file and take some time to understand it.
Then, make the function __whatToRender__ return `<h1>I Love React</h1>` instead of `<h1>Hello World</h1>`.
