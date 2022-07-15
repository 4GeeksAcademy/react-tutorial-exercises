# `05.1` Using Variables

One of the advantages of using JSX is that we can integrate Javascript and HTML in one file, allowing us to use variables, functions and more, inside of our HTML code.

This is part of what makes JSX so special, it was never so easy and fast to add functionalities to our website!

If you want to use variables in your JSX, you only have to add the name of the variable between curly brackets `{}` like this: `{variable}`.

All together can be used like this:

```jsx
let name = "Joe"

let output = (
    <div>
        Hello my name is {name}
    <div>
)
```

*- Notice we are using the variable name inside the `div` to display "Joe"*

And the result will look like this:

![Result of Previous Example](../../.learn/assets/05-using-variables.png)

If you build the code you have in the `app.jsx` file, it will show Hello World!.

## 📝 Instructions:

1. Change the given code to display `"Hello John Doe!"` instead of `"Hello World!"` by using the variables.

## 💡 Hints:

+ It's important that you use the variables for it, instead of hardcode it.

+ Adding the space between the variables is so easy, like this: `{var1} {var2}` notice the space between them.