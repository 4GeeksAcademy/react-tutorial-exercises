# `05.2` Using Variables

In the previous lesson, we learned how to use variables within our tags, now we are going to use variables as the value of our tags' properties.

## Example:

We can get the link of an `<a>` tag from a variable and use it. For example:

```jsx
let link = "https://www.google.com/";

let output (
    <div>
        <a href={link}>Let's go to google!</a>
    </div>
)
```

So it will basically use the value of the variable as the href of the `<a>` tag.

## 📝 Instructions:

1. Use the variable `imageSrc` as the `src` value of the `<img>` tag in order to display the image correctly.

## 💡 Hints:

+ It's important that you use the variable for it, instead of hardcode the link.

+ You had to use quotemarks (`""`) for the `src` value before, now you don't have to use it because the variable is already a string, so it has its own quotemarks.