# `01.5` Building from arrays

With JSX you can also create arrays of HTML items. E.g: If we have an array of `<li>` we can include all of them into the document at once like this:

```jsx
const namesInHTML = [
  <li>Bob Dust</li>,
  <li>Fredy Mercury</li>,
  <li>Shazam Nikola</li>,
  <li>Wilibin Walabam</li>
];

const content = <ul>{namesInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
```

The resulting HTML on the website will be:
```html
<div id="myDiv">
  <ul>
    <li>Bob Dust</li>
    <li>Fredy Mercury</li>
    <li>Shazam Nikola</li>
    <li>Wilibin Walabam</li>
  </ul>
</div>
```

# :speech_balloon: Instructions

Lets say that we want react to render the following output into the document:

```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link" href="#">Link to google.com</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link to facebook.com</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link to amazon.com</a>
  </li>
</ul>
```

Update the `navlinkItems` array to make the current code output what we want.

#### :bulb: Hint:
- You only have to update the `navlinkItems` array, nothing else.
- React will ask you to use keys on each item of the array, [you can read more about it here](https://reactjs.org/docs/lists-and-keys.html#keys).
- Remember to use `className` instead of `class`.