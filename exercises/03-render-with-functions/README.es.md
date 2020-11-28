# `03` Render con funciones

JSX permite usar funciones para renderizar HTML, ¡y eso es fantástico!

Es una práctica muy recomendable porque te permite crear plantillas y reusar tu código, por ejemplo:

```js

// QUE: Esta función devuelve un string que será renderizado 
const PrintHello = () => {
    return <h1>Hello World</h1>;
}
               //que           //donde
ReactDOM.render(PrintHello(), myDiv);
```

Nota: La función PrintHello comienza con una letra en mayúsculas porque lo vamos a convertir en un [Componente React](https://reactjs.org/docs/react-component.html) en el ejercicio.

# :speech_balloon: Instrucciones

Haz que la función __PrintHello__ devuelva `<h1>I Love React</h1>` en lugar de `<h1>Hello World</h1>`.
