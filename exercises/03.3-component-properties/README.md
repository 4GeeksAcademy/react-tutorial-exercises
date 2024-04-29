---
tutorial: "https://www.youtube.com/watch?v=hIhhpm85kZU"
---

# `03.3` Component Properties

The `BootstrapCard` you just made right now is [hard coded](https://en.wikipedia.org/wiki/Hard_coding) for **Bob Dylan** only.

But, what if we also want to re-use the same `<BootstrapCard />` component for **Paul McCartney** or any other person? What is the best way to do it? Use props!

## Using properties in HTML

When you are coding HTML, you are constantly using the `<tag>` properties to modify the tag behavior, for example: 

When you use the **anchor** tag (`<a>`) you have to specify the **href** property like this:

```html
<a href="http://google.com">Take me to google</a>
<a href="http://twitter.com">Take me to twitter</a>
```

> Note: Here I'm re-using the anchor tag (`<a>`) for two different links.

## Using properties in React.js

In React.js we can also create our own tags and use our own invented properties. For example, we could specify the `title` property of our `<BootstrapCard />`, like this:

```jsx
               // For Paul McCartney
<BootstrapCard title="Paul McCartney" />

               // For Bob Dylan
<BootstrapCard title="Bob Dylan" />
```

Our `component` function will receive all of its properties (including title) through the first parameter that we can call `props`.

```jsx
const BootstrapCard = (props) => {
  return <div class="card">
    ...
      <h5 class="card-title">{props.title}</h5>
    ...
  </div>;
}
```

To be able to work with component properties, you have to specify what properties the component will receive (the name and data-type of each property), [here you can read more about prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html).

For example: 

```jsx
// Here we are specifying that this component will receive the property "title" and it will be a string.
BootstrapCard.propTypes = {
	title: PropType.string
};
```

## 📝 Instructions:

1. Please add/use the `imageUrl`, `description`, `buttonUrl` and `buttonLabel` properties inside the `BootstrapCard` function and also on the `<BootstrapCard />` tag (with Bob Dylan's information by default). Do it the same way `title` was already included in both.

## 💡 Hints:

+ You have to edit 3 parts of the file (check the comments for help).

+ The first step will be to replace the hardcoded stuff with properties inside the component.

+ The second step will be to define those properties in the prop-types object on line 23. [Here is a video on how to do it](https://www.youtube.com/watch?v=oty7VGcXK44).

+ The third step will be to use ReactDOM to add the `<BootstrapCard />` tag declaration, including the 5 properties and their respective values.

+ You don't have to render the component twice, just once.
