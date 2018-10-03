# `4.1` Conditional Rendering 

Great! We have a `<PersonCard />` component that knows how to render a person in HTML. This is how is looking:
```jsx
const PersonCard = () => {
    return (<div>
        <p>My Name is { person.first_name + ' ' + person.last_name }</p>
        <p>and I am is { person.age } years old</p>
    </div>);
};
```
Now we can make our component smarter using javascript.  
For example, we could use conditionals (if, else, etc.) to include a warning on the HTML output depending on the user age.  
If he/she is younger than 21 the warning will "He can't drink":

```jsx
const PersonCard = () => {
    let warning = '';
    if(person.age) warning = (<div class="alert alert-danger">He can't drink</div>);
    return (<div>
        <span>{war}
        <p>My Name is { person.first_name + ' ' + person.last_name }</p>
        <p>and I am is { person.age } years old</p>
    </div>);
};
```
