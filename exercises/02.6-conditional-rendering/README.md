# `02.6` Conditional Rendering

Let's make our `<Alert>` component a little bit smarter.

When using JSX you have all of the Javascript functionalities available: Variables, Loops, Conditionals, etc.

We have already used loops and variables, it's time to use conditionals!

For example, the following code renders a red or orange alert depending on the `color` variable.

```jsx
let alertClasses = 'alert';
if(color == 'red') alertClasses += ' alert-danger';
else if(color == 'orange')  alertClasses += ' alert-warning';

<div class={alertClasses} role="alert">
  This is a primary alert-check it out!
</div>

```
We are declaring a variable `alertClasses` that will contain all the class names that will be applied to the alert.

# :speech_balloon: Instructions

Create an `<Alert />` component that renders a [bootstrap alert](https://getbootstrap.com/docs/4.0/components/alerts/#examples). The component must be able to receive the following 2 properties:
- Text (string): The text content that will be displayed on the alert. 
- Color (string): Red or Orange.

```jsx
//for red color
<div class="alert alert-danger" role="alert">
  This is a primary alert—check it out!
</div>

//for yellow color
<div class="alert alert-warning" role="alert">
  This is a primary alert—check it out!
</div>
```