---
tutorial: "https://www.youtube.com/watch?v=Gw6i3BWzwNY"
---

# `02.1` Mapping array objects to `<li>`

Using the knowledge you have from the previous example, now let's fix the `map()` function again, but this time starting from an array of objects.

```js
const animals = [ { label: 'Horse' }, { label: 'Turtle' }, { label: 'Elephant' }, { label: 'Monkey' } ];
```

## 📝 Instructions:

1. Update the code's [map() function](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) to create a new array of `<li>`'s that corresponds to each animal from the original array, the resulting array should be something like this:

```jsx
const animalsInHTML = [
  <li>Horse</li>,
  <li>Turtle</li>,
  <li>Elephant</li>,
  <li>Monkey</li>
];
```

2. Include them all together inside your website.

## 💡 Hint:

+ You can use the second parameter of the map function as a `key` to uniquely identify each HTML item.

## 💻 Expected result:

![Li's](../../.learn/assets/02.1-1.png?raw=true)
