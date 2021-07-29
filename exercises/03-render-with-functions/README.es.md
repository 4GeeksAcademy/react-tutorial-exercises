# `03` Render con funciones

JSX permite usar funciones para renderizar HTML, ¡y eso es fantástico!

Es una práctica muy recomendable porque te permite crear plantillas y reutilizar tu código, por ejemplo:

```js

// QUE: Esta función devuelve un string que será renderizado 
const PrintHello = () => {
    return <h1>Hello World</h1>;
}
               //qué           //dónde
ReactDOM.render(PrintHello(), myDiv);
```

:mag_right: Importante: La función `PrintHello` comienza con una letra en mayúscula porque la vamos a convertir en un [Componente React](https://reactjs.org/docs/react-component.html) en el próximo ejercicio.

# :pencil: Instrucciones:

1. Haz que la función `PrintHello` devuelva `<h1>I Love React</h1>` en lugar de `<h1>Hello World</h1>`.
