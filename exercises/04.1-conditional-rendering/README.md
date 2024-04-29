---
tutorial: "https://www.youtube.com/watch?v=XkKUH49XufQ"
---

# `04.1` Conditional Rendering

Let's make our `<Alert />` component a little bit smarter.

When using JSX, you have all the JavaScript functionalities available: Variables, Loops, Conditionals, etc.

For example, the following code renders a red or yellow alert, depending on the `color` property.

```jsx
const colorClasses = {
    'red': 'alert-danger',
    'yellow': 'alert-warning'
}

<div class={`alert ${colorClasses[props.color]}`} role="alert">
  This is an alert - check it out!
</div>
```

We are declaring a variable `colorClasses` that will contain all the class names that will be applied to the alert.

##  📝 Instructions:

1. Create an `<Alert />` component that changes its color by modifying the `color` property following [bootstrap's alert color names](https://getbootstrap.com/docs/5.0/components/alerts/#examples).

## 💡 Hint:

The component must be able to receive the following 2 properties:

+ `text` (string): The text content that will be displayed on the alert.

+ `color` (string): The colors red or yellow.

```jsx
{/* For red color */}
<div class="alert alert-danger" role="alert">
  This is a danger alert - check it out!
</div>

{/* For yellow color */}
<div class="alert alert-warning" role="alert">
  This is a warning alert - check it out!
</div>
```
