# `04` Component Properties

Another great feature of the JSX syntax are the **components properties**.

**Components properties** behave the exact same way HTML `<tag>` properties do, for example:

An anchor tag `<a>` can have the __href__ property like this:
```jsx
<a href="https://www.breatheco.de">Go to breathecode website</a>
```

If we decide to create a `<Link>` component that simulate the HTML anchor (`<a>`) behavior, we would have to add the anchors original properties like this:
```jsx
<Link href="https://www.breatheco.de">Go to breathecode website</Link>

We would have to change our original function to make it receive and use the new property
```

# Instructions

Please create a link