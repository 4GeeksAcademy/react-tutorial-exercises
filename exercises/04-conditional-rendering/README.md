# `04` Conditional Rendering

You can also use the component properties to change its behavior, like show or hide your `<Alert />` based on a property called `show`.

```jsx
{/* This will make your alert show */}
<Alert text="Are you sure?" show={true}>

{/* This will make your alert to be hidden */}
<Alert text="Are you sure?" show={false}>
```

We can acomplish that by adding a `if... else...` statement inside the render method like this:

```jsx
const Alert = (props) => {
    if(props.show === false){
        return null;
    }
    else{
        // return here the component html
    }
};
```

 :point_up: Returning different HTML code based on conditions its formally called [conditional rendering](https://joshblog.net/2018/conditional-rendering-with-react-and-jsx/).

# :speech_balloon: Instructions

Create an `<Alert />` component that renders a [bootstrap alert](https://getbootstrap.com/docs/4.0/components/alerts/#examples).
The component must be able to receive the following 2 properties:
- show (bool): True or false.
- text (string): The message to include inside the alert message