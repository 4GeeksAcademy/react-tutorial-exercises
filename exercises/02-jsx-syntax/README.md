# `02` JSX Syntax

Another great feature about the React library is the ability to use JSX syntax, which is kind of a mix between Javascript and HTML without the need of quotes!

## Creating our first Component

One of the things we can do thanks to JSX is calling functions like an HTML tag, for example:
```js
// if we declare a function MyFunction
const MyFunction = () => {
    return 'hello world'
}

// then we can call the function as a tag
<FunctionName />

// instead of like in the typical way using round brackets
FunctionName();
```

When you call a function like that, it becomes a **"React component"**, which is a function that generates (returns) HTML dynamically. Whatever the function returns will be replaced in the same place the original `<tag>` was placed.

## Instructions

On the line 11th of index.js, change the way the function is called, call the function as a component (using the tag syntax) instead of parentheses.
