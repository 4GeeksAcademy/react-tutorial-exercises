# 04: Component Variables

Other great feature of the jsx syntax are the component properties.

Component properties behave the exact same way html tag properties do, for example:

An anchor tag `<a>` can have the __href__ property like this:
```jsx
<a href="https://www.breatheco.de">Go to breathecode website</a>
```

If we decide to create a `<Link>` tag to simulate the HTML anchor behavioer, we could add have the same properties like this:
```jsx
<Link to="https://www.breatheco.de">Go to breathecode website</Link>

We would have to change our original function to make it receive and use the new property
const Link = (props) => {
  return <a href={props.to}>{props.children}</a>  
}
```