# 03: Custom Tags

A great feature about the React library is the JSX, which is kind of a mix between Javascript and HTML.

One of the things we can do thanks to JSX is write the name of a function like an HTML tag:
```js
// if we declare a function MyFunction
const MyFunction = () => {
    return 'hello workd'
}

// then we can call the function as a tag
<FunctionName />

// instead of like in the typical way using round brackets
FunctionName();
```

This feature is amazing because our code looks like a better HTML where we can have our own custom tags.

For example we could replace the bootstrap dropdown code with a custom <Dropdown /> tag.

The bootstrap dropdown html looks like this:
```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```
But now it can become a small code like this:
```html
<Dropdown>
    <Label>Dropdown button</Label>
    <Item>Action</Item>
    <Item>Another action</Item>
    <Item>Something else here</Item>
</Dropdown>
```

# Instructions

Create a function