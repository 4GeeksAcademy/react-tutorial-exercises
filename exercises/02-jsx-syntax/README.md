# `02` JSX Syntax

Another great feature about the React library is the ability to use JSX syntax, which is kind of a mix between Javascript and HTML.

## Creating our first Component

One of the things we can do thanks to JSX is calling functions like they are HTML tag, for example:
```js
// if we declare a function MyFunction
const MyFunction = () => {
    return 'hello world'
}

// we can call the function as an HTML tag like this:
<MyFunction />

// instead of like in the typical way using round brackets
MyFunction();
```

When you call a function like that, it becomes a **"React component"**, which is a function that generates (returns) HTML dynamically. Whatever the function returns will be replaced in the same place the original `<MyFunction />` was placed.

## Instructions

On the line 11th of index.js, change the way the function is called, call the function as a **"React component"** (using the JSX syntax) instead of parentheses.
