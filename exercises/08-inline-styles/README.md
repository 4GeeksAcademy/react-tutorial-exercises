# `08` Inline Styles

In the previous exercise, we learned about inline stylings storing the styling's object in a variable and theb using it as the value of the `style` property.

Now we are going to create the object directly as the value of the `style` property. The syntax looks like this:

```jsx
const output = (
    <div style={{ color: "black", width: "100%", backgroundColor: "blue", marginTop: "2.5rem"}}>
        Hello World!
    </div>
)
```

We have two curly brackets `style={{}}`, because the outsider one is to access javascript and the insiders are from the object.

If you build the current code, you'll see there are a lot of styles missing.

In this case you are going to apply the stylings to the card's `div` tag.

## 📝 Instructions:

1. Add the following stylings to the object of the `style` property value of the card's `div`:

    + A width of `"16.66%"`.

    + margin `"auto"` to center it.

    + margin top of `"2.5rem"`.

    + A solid border with 1px of width and color lightgrey `"1px solid lightgrey"` 

## 💡 Hints:

+ Remember the syntax to apply stylings in react: `style={{style1: "value of style", style2: "value of style 2"}}`.

+ Here is more information about react stylings: [https://www.w3schools.com/react/react_css.asp](https://www.w3schools.com/react/react_css.asp)