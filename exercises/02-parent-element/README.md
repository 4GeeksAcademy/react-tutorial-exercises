# `02` Parent Element

In React, all the components and elements should be wrapped by a parent element, otherwise it will return an error.

If you want to render multiple elements, all of them should be wrapped by another element, which will be their parent.

## Example:

This is how you would render a title (`<h1>`), a paragraph (`<p>`) and a list (`<li>`) using React:

```js
const myDiv = document.querySelector("#mydiv");

const output = (<div>
    <h1>Hello World!</h1>
    <p>This is a paragraph</p>
    <li>
        <ol>First Element</ol>
        <ol>Second Element</ol>
        <ol>Third Element</ol>
    </li>
</div>)

ReactDOM.render(output, myDiv);
```

All of the elements are wrapped by the `<div>`.

## 📝 Instructions:

1. Add the following elements into output, in order to render all together:

    + `<h1>Hello World!</h1>`

    + `<p>This is the second element</p>`

    + `<strong>This is the last element</strong>`

## 💡 Hint:

+ Remember that to render many elements you have to wrap them in one parent element.