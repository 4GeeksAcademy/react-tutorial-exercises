# `12.1` Conditionals

Now we are going to learn about conditionals in React.

We can use conditionals to render some code depending on a condition, this is named **Conditional Rendering**.

There two ways of using conditional rendering:

+ Using the declarative way (The common if statement).

+ Using inline conditions.

## Example:

```jsx
function Profile(){
    let hasImage = false;
    if(hasImage == true){
        return (
            <div>
                <img src="profile-picture" />
                <h1>John Doe</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>John Doe</h1>
            </div>
        )
    }
}
```

This is the declarative way, where we use the normal if statement. Please make sure you understand the syntax.

On this exercise there is a variable named `age` which will have a random number between 10 and 50, it will represent the age of the user.

## 📝 Instructions:

1. Use the `age` variable to generate a conditional rendering. If `age` is greater or equal to 21, you should render the following JSX:

```jsx
<div className="col-3 mx-auto mt-5 rounded border">
    <img src="../../.learn/assets/05.2-using-variables.jpg" alt="Profile picture" className="w-100 img-fluid" />
    <h2>John Doe</h2>
    <p>Age: {age}</p>
    <p>I can drink! Let's party tonight!</p>
</div>
```

But if `age` is lower than 21, you should render the following JSX:

```jsx
<div className="col-3 mx-auto mt-5 rounded border">
    <img src="../../.learn/assets/12.1-conditionals.jpg" alt="Profile picture" className="w-100 img-fluid" />
    <h2>John Doe</h2>
    <p>Age: {age}</p>
    <p>I can't drink, I'm still a kid :(</p>
</div>
```

## 💡 Hint:

+ Here is more information about React [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)