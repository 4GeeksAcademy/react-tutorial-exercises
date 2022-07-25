# `13` onClick

Without React, we had to handle events by using the "eventListeners". Now, with React everything is much easier. As we can use JavaScript code inside the JSX, now we can handle the events directly on the JSX.

There two ways of handling the events:

+ By creating the function and then calling it in the event handler property.

+ By adding the functionality directly in the event handler property.

There are several events but one of the most common events that you'll be listening at is the `onClick`. besides this one we have `onChange`, `onSubmit`, `onMouseEnter`, etc.

## Examples:

This is an example of creating the function and then calling it in the event handler property:

```jsx
const CreateProfile = () => {
    const create = () => {
        alert("Your profile has been created successfully");
    }

    return (
        <div>
            <input placeholder="Email" type="email" />
            <input placeholder="Password" type="password" />
            <button onClick={create}>Create Your Profile</button>
        </div>
    )
}
```

This is an example of adding the functionality directly in the event handler property:

```jsx
const CreateProfile = () => {
    return (
        <div>
            <input placeholder="Email" type="email" />
            <input placeholder="Password" type="password" />
            <button onClick={() => {
                alert("Your profile has been created successfully");
            }}>Create Your Profile</button>
        </div>
    )
}
```

## 📝 Instructions:

1. Replace the console.log of the onClick by an alert that says "Hello World!": `alert("Hello World!")`.

## 💡 Hint:

+ Press CTRL + Click [here](https://reactjs.org/docs/handling-events.html) for more information about [Handling Events with React](https://reactjs.org/docs/handling-events.html)