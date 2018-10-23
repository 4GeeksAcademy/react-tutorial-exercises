# `02` Render with Functions

JSX allows using functions to render HTML, and that is awesome!

It is a strongly recommended practice because it lets you create templates and re-use your code, e.g:

```js

// WHAT: This function returns a string that will be rendered
const PrintHello = () => {
    return <h1>Hello World</h1>;
}
               //what           //where
ReactDOM.render(PrintHello(), myDiv);
```

Note: the function PrintHello starts with a capital letter because we are going to converted into a [React Component](https://reactjs.org/docs/react-component.html) in the next exercise.

# :speech_balloon: Instructions

Make the function __PrintHello__ return `<h1>I Love React</h1>` instead of `<h1>Hello World</h1>`.
