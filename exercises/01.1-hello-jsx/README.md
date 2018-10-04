# `01.1` Hello JSX

JSX is great because now it's super easy to create dynamic HTML, for example, if we have the varilable:

```js
let age = 12;
```

We can create the following html
```jsx
let output = <span> James is { age } years old </span>
```

If we render the ***output*** variable into the DOM the ourput will be:
```html
<span>James is 12 years old</span>
```

## Instructions

The index.js file contains now a varilable `name` that wou can also insert into the rendered output.