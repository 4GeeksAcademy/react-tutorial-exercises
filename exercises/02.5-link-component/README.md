# `02.5` Link component

In the past exercise we created a `<BootstrapCard />` component, let's try to create another very simple one.

In this exercise you will find a `<Link>` component that you can use just like a regular anchor, for example:

This is an example of an `<a>` tag being used in an HTML document
```jsx
<a href="http://www.google.com">Go to google.com</a>
```
This is how we want our `<Link>` component to behave (very similar to the anchor):
```jsx
<Link url="http://www.google.com" label="Go to google.com" />
```

# :speech_balloon: Instructions

Create a `Link` component that expect 2 properties: `url` and `label` and outputs a normal anchor `<a>` tag when used.