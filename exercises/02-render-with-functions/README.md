# `02` Render with Functions

You can also use functions to render HTML. 

It is a strongly recomended practice because it lets you create templates and re-use your code, e.g:

```js

// WHAT: This function returns a string that will be rendered
const PrintHello = () => {
    return <h1>Hello World</h1>;
}
               //what           //where
ReactDOM.render(PrintHello(), myDiv);
```

The function `ReactDOM.render` will set the innerHTML of `myDiv` to contain what the function `PrintHello` returns, very similar to how innerHTML works in plain JavaScript:

```js
// This is how you would do it without react but you cannot use JSX
// you will have to return a string only
myDiv.innerHTML = PrintHello();

// This is hot you would do it with react. 
// With this approach your function is able to use JSX
ReactDOM.render(PrintHello(), myDiv);
```
Note: the function PrintHello starts with a capital letter because we are going to converted into a [React Component](https://reactjs.org/docs/react-component.html) in the next exercise.

# :speech_balloon: Instructions

Open the `index.js` file and take some time to understand it.  
Then, make the function __PrintHello__ return `<h1>I Love React</h1>` instead of `<h1>Hello World</h1>`.
