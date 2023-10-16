---
tutorial: "https://www.youtube.com/watch?v=hEY3YRQN0uk"
---

# `04.1` Conditional Rendering

Let's make our `<Alert>` component a little bit smarter.

When using JSX you have all of the Javascript functionalities available: Variables, Loops, Conditionals, etc.

We have already used loops and variables, it's time to use conditionals!

For example, the following code renders a red or orange alert depending on the `color` property.

```jsx
const colorClasses = {
    'red': 'alert-danger',
    'orange': 'alert-warning'
}

<div class={`alert ${colorClasses[props.color]}`} role="alert">
  This is a primary alert-check it out!
</div>
```

We are declaring a variable `colorClasses` that will contain all the class names that will be applied to the alert.

##  📝 Instructions:

1. Create an `<Alert />` component that renders a [bootstrap alert](https://getbootstrap.com/docs/4.0/components/alerts/#examples). 

## 💡 Hint:

The component must be able to receive the following 2 properties:

+ Text (string): The text content that will be displayed on the alert.

+ Color (string): Red or Orange.

```jsx
//for red color
<div class="alert alert-danger" role="alert">
  This is a primary alert—check it out!
</div>

//for orange color
<div class="alert alert-warning" role="alert">
  This is a primary alert—check it out!
</div>
```
