# `12.2` Conditionals

In this case, we are going to use inline conditions to create a conditional rendering based on the same example of the previous exercise.

First, let's take a look into the different ways of using inline conditions, there are two conditional operators:

+ The inline `if` with logical `&&` operator:

It follows this structure: `"condition" && "what happens if it's true"`.

Here is a short example:

```js
let name == "John";
// "condition" && "what happens if it's true"
name == "John" && console.log("Hello, welcome again John");
```

+ The inline `if else` with conditional operator:

It uses the following structure: `"condition" ? "what happens if it's true" : "what happens if it's true"`

Here is a short example:

```js
let name == "John";
// "condition" ? "what happens if it's true" : "what happens if it's true"
name == "John" ? console.log("Hello John"); : console.log("This is not John")
```

## Example:

This is an example of `if` conditional:

```jsx
function Profile(){
    let hasImage = false;
        return (
            <div>
                {hasImage && <img src="profile-picture" />}
                <h1>John Doe</h1>
            </div>
        )
    }
}
```

This is an example of `if else` conditional:

```jsx
function Profile(){
    let hasImage = false;
    let age = 24;
        return (
            <div>
                {hasImage && <img src="profile-picture" />}
                <h1>John Doe</h1>
                {age >= 21 
                    ? <p>You can drink!</p> 
                    : <span>Sorry you can't drink :(</span>}
            </div>
        )
    }
}
```

## 📝 Instructions:

1. Use the `age` variable to generate a conditional rendering. Change the code of the `<span>` tag depending on the age:

If `age` is lower than 21, you should render this `<span>`:

```jsx
<span>I can drink! Let's party tonight!</span>
```

Otherwise, render:

```jsx
<span>I can't drink, I'm still a kid :(</span>
```

## 💡 Hint:

+ Remember the conditions should be wrapped by `{}` as it is inside the JSX.

+ Here is more information about React [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)