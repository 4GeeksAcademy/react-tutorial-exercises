# `07` Styles Object

Inline stylings in react works a little bit different, we have to use an object with the styles that we want to apply to the tag. Knowing this, we have two ways of applying inline styles in react:

+ Declaring a variable that will have the object with the styles.

+ Assigning the object directly to the style tag.

In this exercise, we are going to use the first one. The syntax looks like this:

```jsx
const styleObject = {
    color: "black",
    width: "100%",
    backgroundColor: "blue",
    marginTop: "2.5rem"
}

const output = (
    <div style={styling}>
        Hello World!
    </div>
)
```

If you build the current code, you'll see there are a lot of styles missing.

Anyway, we created two variables with the stylings of the card, and the image. So you just have to apply it.

## 📝 Instructions:

1. Use the variables `cardStyles` and `imageStyles` to apply the stylings to the `#card` and the `#card-image` elements.

## 💡 Hints:

+ Remember the syntax to apply stylings in react: `style={styleObject}`.

+ Here is more information about react stylings: [https://www.w3schools.com/react/react_css.asp](https://www.w3schools.com/react/react_css.asp)