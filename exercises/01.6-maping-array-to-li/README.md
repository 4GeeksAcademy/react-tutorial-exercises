# `01.6` Mapping array to `<li>`

Now let's build an array dynamically. Let's say you have an array of animals:

```js
const animals = [ 'Horse', 'Turtle', 'Elephan', 'Monkey' ];
```

# :speech_balloon: Instructions

Update the code's [.map function](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) to create a new array of `<li>`'s that each of them corresponds one animal from the original array, the resulting array should be something like this:

```jsx
const animalsInHTML = [
  <li>Horse</li>,
  <li>Turtle</li>,
  <li>Elephan</li>,
  <li>Monkey</li>
];
```

And include them all together inside the website.

#### :bulb: Hint

- You can use the second parameter of the map function as a `key` to uniquely identify each html item.

Your website should look like this: ![LIs](https://ucarecdn.com/773cea7c-acab-46f2-b8af-d03911bbfe24/)
