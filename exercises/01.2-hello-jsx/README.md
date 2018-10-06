# `01.2` Hello JSX

JSX also allows you easily include variables into your HTML, for example, lets asume that you have the following variable available:

```js
let age = 12;
```

If you want to include the value of that variable into your HTML code dynamically, you can do it like this:
```jsx
let output = <span> James is { age } years old </span>
```
Note the position curly brackets `{` and `}` wraping the variable.

Then, we can render the **output** variable content using `ReactDOM.render` like this:

```jsx
// use react-dom to render it into the DOM
import ReactDOM from 'react-dom';
ReactDOM.render(output, document.querySelector('css_selector'));
```

The ultimate output in the HTML document will be:
```html
<span>James is 12 years old</span>
```

Basically, we are now able too mix HTML and JS in the same file without having to concatenate and use strings.

#### :smiley: Amazing! :angry: right?

## :speech_balloon: Instructions

The index.js file contains now a varilable `name` that can contain any value.

Please include that variable inside the output instead of `"James"`.