# `02` JSX Syntax

Another great feature about the React library is the JSX syntax, which is kind of a mix between Javascript and HTML.

## Creating our first component

One of the things we can do thanks to JSX is to write function names like an HTML tags, for example:
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

When you call a function like that, it becomes a **"React component"**, which is noting else than a function that generates HTML dynamically, whatever the function returns will be replaced in the same place the original `<tag>` was placed.

## Instructions

On the line 11th of index.js, change the way the function is called, call the function as component (using the tag syntax) instead of round brackets.
