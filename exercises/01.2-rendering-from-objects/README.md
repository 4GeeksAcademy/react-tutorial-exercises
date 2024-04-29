---
tutorial: "https://www.youtube.com/watch?v=inPN8MOdJWA"
---

# `01.2` Rendering from objects

Now, let's use a more complex variable to render our HTML. Let's say we have the following JS object containing a customer's information:

```js
const customer = {
    first_name: 'Bob',
    last_name: 'Dylan'
};
```

To retrieve any property from the `customer` object we have to use the dot (`.`) operator, like this:

```js
console.log(customer.first_name); // Will print "Bob" on the console
```

## 📝 Instructions:

Open the `app.jsx` and create the necessary code to make your file render the following output into the DOM:

```jsx
<div>
    <h1>My name is Bob</h1>
    <h2>My last name is Dylan</h2>
</div>
```
