# `02.3` Component Properties

The BootstrapCard you just made right now is [hard coded](https://www.quora.com/What-does-hard-coded-something-mean-in-computer-programming-context) for **Bob Dylan** only. What if we also want to use the `<BootstrapCard />` component for **Paul Mccartney**?

## Using properties in HTML

When you are coding HTML you are constantly using the `<tag>` properties to modify the tag behavior, e.g.:  
When you use the **anchor** tag (`<a>`) you have to specify the **href** property like this:

```html
<a href="http://google.com">Take me to google</a>
```

## Using properties in React.js

In React js we also can create our own tags and use our own invented properties, for example we could specify the `title` property of our `<BootstrapCard />` like this:

```jsx
               //for Paul Mccartney
<BootstrapCard title="Paul Mccartney" />

               //for Bob Dylan
<BootstrapCard title="Bob Dylan" />
```

Our component function will receive all its properties (including title) through the first param that we can call "props".

```jsx
const BootstrapCard = (props) => {
  return <div class="card">
    ...
      <h5 class="card-title">{props.title}</h5>
    ...
  </div>;
}
```

To be able to work with component properties, you have to specify what properties the component will receive (the name and data-type of each property), [here you can read more about prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html). e.g:

```js
// here we are specifying that this component will receive the property "title" and it will be a string.
BootstrapCard.propTypes = {
	title: PropType.string
};
```

# :speech_balloon: Instructions

Please add/use the `imageUrl`, `description`, `buttonUrl` and `buttonLabel` properties inside the **BootstrapCard** function and also on the `<BootstrapCard />` tag. Do it the same way `title` was already included in both.

#### :bulb: Hint

- You have to edit 3 parts of the file (check the comments for help).
- The first step will be to replace the hardcoded stuff with properties inside the component.
- The second step will be to define those properties in the prop-types object on line 23, [here is a video on how to do it](https://www.youtube.com/watch?v=oty7VGcXK44).
- The third step will be to use ReactDOM to add the `<BootstrapCard>` tag declaration including the 5 properties and their respective values.
- You don't have to render the component too times, just once.
