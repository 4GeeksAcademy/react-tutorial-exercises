# `01.3` Rendering from objects

Now lets use a more complex variable to render our HTML, let's say we have the following JS Object containing a customer information:

```js
const customer = {
    first_name: 'Bob',
    last_name: 'Dylan'
};
```

To retrieve any property from the `Customer` object we have to use the dot `.` operator like this:

```js
console.log(customer.first_name); // will print "Bob" on the console.
```  
  
# :speech_balloon: Instructions

Open the `index.js` and create the necesary code to make your file render the following output into the DOM:

```jsx
<div>
    <h1>My name is Bob</h1>
    <h2>My las name is Dylan</h2>
</div>
```
