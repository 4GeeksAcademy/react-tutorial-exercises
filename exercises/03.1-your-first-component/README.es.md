# `03.1` Tu primer componente funcional

Cuando creas funciones que devuelven HTML, JSX te dejará tratarlos como **"Componentes"**, básicamente ellos se convertirán tus etiquetas HTML propias.

## Creando nuestro primer componente funcional

Una de las cosas que podemos hacer gracias a JSX es llamar funciones com si fueran etiquetas HTML, por ejemplo:
```js
// if we declare a function called MyFunction
const MyFunction = () => {
    return <h1>I Love React</h1>;
}

// we can call the function as an HTML tag like this:
<MyFunction />

// instead of the typical way of using round brackets
MyFunction();
```

Cuando llamas a una función así, se convierte en un **"Componente de React"**, que es una función que genera (devuelve) HTML dinámicamente. Lo que sea que devuelva la función será reemplazado en el mismo lucar que el lugar original del `<MyFunction />`.

## :speech_balloon: Instrucciones

En la 9na línea de index.js, cambia la forma en la que se llama a la función, llama a la función como un **"componente React"** usando `<` y `>` como una etiqueta HTML (en lugar de paréntesis).
