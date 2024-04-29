---
tutorial: "https://www.youtube.com/watch?v=2jGeHZ97_LU"
---

# `03` Render with Functions

JSX allows using functions to render HTML, and that is awesome!

It is a strongly recommended practice because it lets you create templates and re-use your code.

For example:

```js
// WHAT: This function returns a string that will be rendered
const PrintHello = () => {
    return <h1>Hello World</h1>;
}
                 //what       //where
ReactDOM.render(PrintHello(), myDiv);
```

## 📝 Instructions:

1. Make the function `PrintHello` return `<h1>I Love React</h1>` instead of `<h1>Hello World</h1>`.

## 💡 Hint:

+ The function `PrintHello` starts with a capital letter because we are going to convert it into a React Component in the next exercise.
