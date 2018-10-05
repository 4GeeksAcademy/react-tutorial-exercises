# `01.2` Hello JSX

JSX also allows you easily include variables into your HTML, e.g:

```js
let age = 12;
```

We can create the following HTML varilable
```jsx
let output = <span> James is { age } years old </span>
```

And then render it using ReactDOM.render like this:
```jsx
// use react-dom to render it into the DOM
import ReactDOM from 'react-dom';
ReactDOM.render(output, document.querySelector('css_selector'));
```

The ultimate output in the HTML document will be:
```html
<span>James is 12 years old</span>
```

Basically, we are now ably too mix HTML and JS in the same file without having to concatenate and use strings.

#### Amazing! right?

## Instructions

The index.js file contains now a varilable `name` that can contain any value.

Please include that variable inside the output instead of `"James"`.