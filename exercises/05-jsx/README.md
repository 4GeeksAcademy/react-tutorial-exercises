`Important note: From now on, we will always leave the index.js file as simple as possible, and we will always import stuff from other files instead of coding on the same file.`
# 03: JSX Syntax

Another great feature about the React library is the JSX syntax, which is kind of a mix between Javascript and HTML.

## Creating our first component

One of the things we can do thanks to JSX is to write the name of a function like an HTML tag:
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

When you call a function like that, it becomes a "react component", which is noting else than a function that generates HTML dynamically, whatever the function returns will be replaced in the same place the original `<tag>` was placed.

For example we could create a ```<Dropdown />``` tag that generates the html needed to render a bootstrap Dropdown.

The 'component' will look like this:
```jsx
const Dropdown = () => {
    return (<div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>);
}
```
To use that component all we have to do is call the function like a tag
```html
<Dropdown></Dropdown>
```

# Instructions

In the Dropdown.js file, fill the Dropdown function with the code needed to return the HTML for a bootstrap dropdown.