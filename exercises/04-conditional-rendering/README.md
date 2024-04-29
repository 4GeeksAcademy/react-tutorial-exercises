---
tutorial: "https://www.youtube.com/watch?v=PZq3JSYNYw4"
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

1. Implement a conditional rendering in the `<Alert />` component to display the component when the `show` property is `true` and hide it when it's `false`.

## 💡 Hint: 

The component must be able to receive the following 2 properties:

+ `show` (bool): True or false.

+ `text` (string): The message to include in the alert.
