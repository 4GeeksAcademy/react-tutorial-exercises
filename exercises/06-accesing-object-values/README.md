# `06` Accesing Object Values

You can have variables with simple values like a string or a number, but you can also have more complex data types like arrays or objects.

On this exercise we are going to use an object which will have the data of a product we want to sell, in order to show a card filled with the user's data, we will have to use that object.

## 📝 Instructions:

1. Use the the data from the variable named `product` in order to fill the card's information.

## 💡 Hint:

+ The `<a>` tag will work as the button.

+ For the button values, you'll have to access to an object inside of another object. Look at the structure of the `output` variable.

+ This is how you access to objects inside of another object:

```js
let obj = {
    prop1: "Any value",
    nestedObj: {
        prop2: "Second prop",
        prop3: "This property is inside of nestedObj which is inside of obj"
    }
}

console.log(obj.nestedObj.prop2); // This would return: Second prop
```