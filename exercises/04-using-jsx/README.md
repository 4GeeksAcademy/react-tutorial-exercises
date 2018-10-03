# `04` Custom Tags

Ok, now we know how to split our code into different files. Lets focus back on React and JSX.

Another great feature about JSX, is allowing us to use curly brackets `{` to include dynamic content within our HTML like this:
```html
<a>{ /* you can use js here */  }</a>
```

For example, let's say we have a js object **person** with **first_name** and **last_name**, JSX allows us to create a `<PersonCard />`  
Instead of just using the old [HTML strings](http://krasimirtsonev.com/blog/article/Convert-HTML-string-to-DOM-element) we could use the JSX curly brackets:
```jsx
const person = {
  first_name: 'Bob',
  last_name: 'Smith'
  age: 23
};

const PersonCard = function(){
  // everything within the curly brackets is written in javascript
  return <p>{person.first_name + ' ' + person.last_name}</p>;
};
```

# Instructions

Open the `PersonCard.js` component and change its code to make it output the following HTML:
```html
<div>
    <p>My Name is Bob Smith</p>
    <p>and I am is 12 years old</p>
</div>
```
Note: The *first name*, *last name* and *age* have to be dynamically rendered based on the `person` variable declared above the component.