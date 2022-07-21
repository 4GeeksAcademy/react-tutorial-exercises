# `11.1` Mapping Lists

In the previous exercise we generated a list using a for loop. Now we are going to generate the lists using the map method, which is the most recommended way.

## Example:

This is an example of using the map method to generate a list from an array:

```jsx
function ListOfAnimals(){
    let animals = ["dog", "cat", "horse", "fish"];

    return (
        <ul>
            {animals.map((animal, index) => {
                return <li key={index}>{animal}</li>
            })}
        </ul>
    )
}
```

+ Notice we are using the `key` prop. Everytime you generate some jsx from a list, you should include the `key` prop with a unique value for each element, that's why we are using the `index` as the value, because every element has a different position.

## 📝 Instructions:

1. Use the map method to add an `<li>` for each element of the `programmingLanguages` array inside the `<ul>`.

## 💡 Hint:

+ Here is more information about mapping in React: [https://reactjs.org/docs/lists-and-keys.html#rendering-multiple-components](https://reactjs.org/docs/lists-and-keys.html#rendering-multiple-components)