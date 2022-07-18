# `09` Components

Now we are going to introduce you to one of the key elements of React: **Components**.

Components are independent and reusable bits of code. They work similar to JavaScript functions, as you can reuse it.

React has two different types of components: Class components and Function components.

In this tutorial we will focus on Function based components.

### Components Structure:

```jsx
function ComponentName(props){
    // Javascript used

    return (
        // JSX used
    )
}
```

+ The name of the component should start with uppercase letter.

+ The component will receive the `props` as parameter, `props` is an object with data that can be passed from the parent element (We'll learn more about it later).

+ Inside the return will be the JSX code, which is the content that will be displayed.

## 📝 Instructions:

1. Add the following stylings to the object of the `style` property value of the card's `div`:

    + A width of `"16.66%"`.

    + margin `"auto"` to center it.

    + margin top of `"2.5rem"`.

    + A solid border with 1px of width and color lightgrey `"1px solid lightgrey"` 

## 💡 Hints:

+ Remember the syntax to apply stylings in react: `style={{style1: "value of style", style2: "value of style 2"}}`.

+ Here is more information about react stylings: [https://www.w3schools.com/react/react_css.asp](https://www.w3schools.com/react/react_css.asp)