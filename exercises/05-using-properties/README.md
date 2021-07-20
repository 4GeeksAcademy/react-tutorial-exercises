# `04` Using Properties

In exercise 02 we learned that functions can be called as HTML tags like this `<MyFunctionName />`

But what if I want to pass some parameters to that function? For example:
```
const UserCard = function(name, age){
  return "The user "+name+" is "+age+ " years old";
}
```
If we want to use this function as a JSX Component (just like we did in exercise 02) we can do it like this: `<UserCard />`

But how do I pass the name and age to the function? We can pass them as [component properties](https://breatheco.de/en/lesson/making-react-components/#component-props).

In HTML you use properties all the time, for example when you create an `<img>` tag (for images) you always have to specify the url of the image like this: `<img src="path-to-image.png" />`

React Component Props work the same way, we can make the name and age properties of the `<UseCard />` component using the following syntax:
```
// here is how to declare the component passing the name and age properties
<UserCard name="Steph" age="12" />

// and here is how to use those properties, all components receive a "props" variable that contains all the properties being pass to them
const UserCard = function(props){
  return "The user "+props.name+" is "+props.age+ " years old";
}
```

## Instructions

If you open the Clock.js file you will see that there is a `<Clock />` component being declared as a function that accept one prop: **currentDate**

1) Please update the index.js file to import that component as default.
2) Then, update the line #12 to pass todays date as the currentDate property to the `<Clock />` component.

