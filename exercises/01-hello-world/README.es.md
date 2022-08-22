# `01` Hello World

El mayor problema actual para los desarrolladores front-end es **trabajar con el DOM** para crear HTML dinámico, y eso es algo que React.js hace mejor.

React.js es una biblioteca de renderizado creada para optimizar el DOM: los desarrolladores ahorran tiempo y el navegador es más rápido.

La biblioteca viene con una función llamada **ReactDOM.render** que puedes ver como un reemplazo para el clásico [innerHTML property](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)

La función `ReactDOM.render` recibe dos parámetros:

+  Qué renderizar (el HTML interno).

+  Dónde representarlo (elemento DOM).

En el código dado, la función `ReactDOM.render()` configurará el HTML interno de `myDiv` (un elemento DOM) para que sea lo que sea que contenga la variable `output`, muy similar a cómo funciona `innerHTML`:

```js
//Así es como lo harías sin react.
myDiv.innerHTML = '<span>Hello World!</span>';

//Así no es como lo harías con react.
ReactDOM.render(<span>Hello World!</span>, myDiv);
```

## 📝 Instrucciones:

1. Tómate un tiempo para entender el archivo `app.jsx`.

2. Cambia la variable 'salida' a:

```jsx
<h1>Hello <strong>World!</strong></h1>
```