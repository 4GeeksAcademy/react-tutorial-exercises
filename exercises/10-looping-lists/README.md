# `10` Looping Lists

Most of the times we have to generate the same code many times. For example, we have to do it when we want to display a list of products, where each of the products will be displayed with the same structure but with different data. We can loop through data arrays to redo the same thing for many elements.

On react there are two ways of generating JSX by looping:

+ Using a for loop before the return and adding everything in an array.

+ Using the map method inside the JSX.

On this exercise we are going to teach you how to do it with the first option, evethough we recommend you to do it using the map method inside the JSX, which you'll learn later. Both are valid, that's why we want you to know them.

## Example

This is an example of using the for loop to generate a list from an array:

```jsx
function ListOfAnimals(){
    let animals = ["dog", "cat", "horse", "fish"];
    let jsx = [];

    for(let i = 0; i < animals.length; i++){
        let listItem = <li>{animals[i]}</li>;
        jsx.push(listItem);
    }

    return (
        <ul>{jsx}</ul>
    )
}
```

## 📝 Instructions:

1. Create a for loop to add an `<li>` for each element of the `programmingLanguages` array, into the `elements` array.

## 💡 Hints:

+ Here is an explanation of why you can't use the for loop inside the JSX code: [https://stackoverflow.com/questions/22876978/loop-inside-react-jsx](https://stackoverflow.com/questions/22876978/loop-inside-react-jsx)