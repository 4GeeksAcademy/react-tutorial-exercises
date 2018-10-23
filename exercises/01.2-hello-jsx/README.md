# `01.2` Hello JSX

JSX also allows you to easily include variables into your HTML, for example, lets assume that you have the following variable available:

```js
let age = 12;
```

If you want to include the value of that variable into your HTML code dynamically, you can do it like this:
```jsx
let output = <span> James is { age } years old </span>
```
Note the position of the curly brackets `{` and `}` wrapping the variable.

Then, we can render the everything in the website content using `ReactDOM.render` like this:

```jsx
// use react-dom to render it into the DOM
import ReactDOM from 'react-dom';
               //render output      //inside the innerHTML of #myDiv
ReactDOM.render(output,             document.querySelector('#myDiv'));
```

The resulting website HTML document will look like this:
```html
<div id="myDiv">
    <span>James is 12 years old</span>
</div>
```

Basically, we are now able to mix HTML and JS in the same file without having to concatenate and use strings. :smiley: Amazing! :angry: right?

## :speech_balloon: Instructions

The index.js file has a variable called `name` that can contain a name.

Please include that variable inside the react output, replace the variable with the hard coded `"James"`.