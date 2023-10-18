---
tutorial: "https://www.youtube.com/watch?v=1O9uUXymny4"
---

# `04` Conditional Rendering

You can also use the component properties to change its behavior, like show or hide your `<Alert />` based on a property called `show`.

```jsx
{/* This will make your alert show */}
<Alert text="Are you sure?" show={true}>

{/* This will make your alert to be hidden */}
<Alert text="Are you sure?" show={false}>
```

We can accomplish that by adding an `if...else` statement inside the render method like this:

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

> Note: ☝️ Returning different HTML code based on conditions is formally called [conditional rendering](https://react.dev/learn/conditional-rendering).

##  📝 Instructions:

1. Create an `<Alert />` component that renders a [bootstrap alert](https://getbootstrap.com/docs/5.0/components/alerts/#examples).

## 💡 Hint: 

The component must be able to receive the following 2 properties:

+ `show` (bool): True or false.

+ `text` (string): The message to include in the alert.
