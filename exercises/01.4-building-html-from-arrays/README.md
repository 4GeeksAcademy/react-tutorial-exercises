---
tutorial: "https://www.youtube.com/watch?v=s3pv6ZOg6-8"
---

# `01.4` Building from arrays

With JSX you can also create **arrays** of HTML items. For example, if we have an array of `<li>` we can include all of them into the document at once, like this:

```jsx
const namesInHTML = [
  <li>Bob Dust</li>,
  <li>Freddie Mercury</li>,
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
    <li>Freddie Mercury</li>
    <li>Shazam Nikola</li>
    <li>Wilibin Walabam</li>
  </ul>
</div>
```

Lets say that we want React to render the following output into the document:

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

## 📝 Instructions:

1. Update the `navlinkItems` array to make the current code output what we want.

## 💡 Hints:

+ You only have to update the `navlinkItems` array, nothing else.

+ React will ask you to use keys on each item of the array. You can read more about it here: [https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key).

+ Remember to use `className` instead of `class`.
