# `10` Looping Lists

La mayoría de las veces tenemos que generar el mismo código muchas veces. Por ejemplo, tenemos que hacerlo cuando queremos mostrar una lista de productos, donde cada uno de los productos se mostrará con la misma estructura pero con datos diferentes. Podemos hacer loop a los arrays de datos para rehacer lo mismo para muchos elementos.

En react, hay dos formas de generar JSX mediante un loop (bucle):

+ Usando un for loop antes del retorno y agregando todo en un array.

+ Usando el método de map dentro de JSX.

En este ejercicio te vamos a enseñar cómo hacerlo con la primera opción, aunque te recomendamos que lo hagas usando el método map dentro del JSX, que aprenderás más adelante. Ambos son válidos, por eso queremos que los conozcas.

## Ejemplo:

Este es un ejemplo del uso del for loop para generar una lista a partir de un array:

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

## 📝 Instrucciones:

1. Crea un for loop para agregar un `<li>` para cada elemento del array `programmingLanguages`, en el array `elements`.

## 💡 Pistas:

+ Aquí hay una explicación de por qué no puede usar el for loop dentro del código JSX: [https://stackoverflow.com/questions/22876978/loop-inside-react-jsx](https://stackoverflow.com/questions/22876978/loop-inside-react-jsx)