# `01.5` Building from arrays

But what if instead of the data being an object, we have an array? Like for example if we have an array of <li> we can include all of them into the document at once like this:

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

Lets say that we want react to render into the document the following output:

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```

Update the `dropdownItems` array to make the current code output what we want.

Note: you only have to update the `dropdownItems` array, nothing else.