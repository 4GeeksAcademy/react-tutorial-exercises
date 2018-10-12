# `01.5` Building from arrays

But what if instead of the data being an object, we have an array? Like for example if we have an array of names and we need to render a list of `<li>` with those names.

## :sunglasses: We have to loop my friend :sunglasses:

JSX allow us to have arrays of HTML elements like this:

```jsx
const namesInHTML = [
  <li>Bob Dust</li>,
  <li>Fredy Mercury</li>,
  <li>Shazam Nikola</li>,
  <li>Wilibin Walabam</li>
];
```

And include them all together inside the website using the variable namesInHTML and the ReactDOM.render method like always:

```js
               //the array    //where to render it
ReactDOM.render(namesInHTML, document.querySelector("#myDiv"));
```

The resulting HTML on the website will be like this:
```html
<div id="myDiv">
  <li>Bob Dust</li>
  <li>Fredy Mercury</li>
  <li>Shazam Nikola</li>
  <li>Wilibin Walabam</li>
</div>
```

# :speech_balloon: Instructions

Use the map function to generate an new array of <li> animals based on this original array:

```js
const animals = [ 'Horse', 'Turtle', 'Elephan', 'Monkey' ];
```