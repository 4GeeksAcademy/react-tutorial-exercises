# `02.6` Conditional Rendering

Let's make our `<Alert>` show or hide based on a property called `show`.

We can acomplish that by adding a if...else... statement inside the render method like this:

```jsx
if(props.show === false){
    return null;
}
else{
   // return here the component html
}
```


# :speech_balloon: Instructions

Create an `<Alert />` component that renders a [bootstrap alert](https://getbootstrap.com/docs/4.0/components/alerts/#examples). The component must be able to receive the following 2 properties:
- show (bool): True or false.