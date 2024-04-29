---
tutorial: "https://youtu.be/RwT0ltsXPEI"
---


# `03` Render with Functions

JSX permite usar funciones para renderizar HTML, ¡y eso es fantástico!

Es una práctica muy recomendable porque, te permite crear plantillas y reutilizar tu código.

Por ejemplo:

```js
// QUÉ: Esta función devuelve un string que será renderizado 
const PrintHello = () => {
    return <h1>Hello World</h1>;
}
                  //qué       //dónde
ReactDOM.render(PrintHello(), myDiv);
```

## 📝 Instrucciones:

1. Haz que la función `PrintHello` devuelva `<h1>I Love React</h1>` en lugar de `<h1>Hello World</h1>`.

## 💡 Pista:

+  La función `PrintHello` comienza con una letra en mayúscula porque la vamos a convertir en un Componente React en el próximo ejercicio.
