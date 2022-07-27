# `09.1` Components

Ahora vamos a presentarte uno de los elementos clave de React: **Components**.

Los componentes son bits de código independientes y reutilizables. Funcionan de manera similar a las funciones de JavaScript, ya que puedes reutilizarlas.

React tiene dos tipos diferentes de componentes: componentes de Clase y componentes Funcionales.

En este tutorial nos centraremos en los componentes basados ​​en Funciones.

### Estructura de Componentes:

```jsx
function ComponentName(props){
    // Javascript used

    return (
        // JSX used
    )
}
```

+ El nombre del componente siempre debe comenzar con una letra mayúscula.

+ El componente puede recibir un objeto con datos del elemento padre, esto se llama `props`. Aprenderemos más sobre esto en ejercicios posteriores.

+ Dentro del retorno estará el código JSX que es lo que se mostrará.

+ Los componentes se pueden declarar como funciones normales o funciones arrow (de flecha).

### Ejemplo de Componente:

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

+ El nombre del componente debe comenzar con letra mayúscula.

+ El componente recibirá `props` como parámetro, `props` es un objeto con datos que se pueden pasar desde el elemento principal (aprenderemos más sobre esto más adelante).

+ Dentro del retorno estará el código JSX, que es el contenido que se mostrará.

## 📝 Instrucciones:

1. Por favor detalla la estructura del componente.

2. Utiliza los datos del objeto `product` para mostrar la tarjeta con los datos correctos.

## 💡 Pistas:

+ Solo tienes que usar las variables en el componente.

+ Aquí hay más información sobre los componentes de react: [React Components](https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.)
