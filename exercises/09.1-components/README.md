# `09.1` Components

Now we are going to introduce you to one of the key elements of React: **Components**.

Components are independent and reusable bits of code. They work similar to JavaScript functions, as you can reuse them.

React has two different types of components: Class components and Functional components.

In this tutorial we will focus on Function based components.

### Components Structure:

```jsx
function ComponentName(props){
    // Javascript used

    return (
        // JSX used
    )
}
```

+ The name of the component should always start with a capitalized letter.

+ The component can receive an object with data from the parent element, this is named `props`. We'll learn more about it in further exercises.

+ Inside the return will be the JSX code which is what will be displayed.

+ Components can be declared as normal functions or arrow functions.

### Component Example:

```jsx
function Home(){
    let name = "John"
    return(
        <div>
            <h1>Hello my name is {name}</h1>
        </div>
    )
}
```

+ The name of the component should start with uppercase letter.

+ The component will receive the `props` as parameter, `props` is an object with data that can be passed from the parent element (We'll learn more about it later).

+ Inside the return will be the JSX code, which is the content that will be displayed.

## 📝 Instructions:

1. Please detail the structure of the component.

2. Use the data from the `product` object to display the card with the correct data.

## 💡 Hints:

+ You only have to use the variables in the component.

+ Here is more information about react components: [React Components](https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.)