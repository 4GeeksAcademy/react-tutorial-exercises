# `01` Hello world

El mayor dolor de cabeza de los desarrolladores front-end es **trabajar con el DOM** para crear HTML dinámico, lo cual es algo que React.js hace mucho mejor.

React.js es una librería de renderizado hecha para optimizar el DOM: los programadores ahorran tiempo y el navegador es más rápido.

La librería viene con una función llamada **ReactDOM.render** que tú puedes ver como un reemplazo de la clásica [propiedad innerHTML](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML).

La función `ReactDOM.render` recibe dos parámetros:

+  Qué renderizar (el HTML interno o innerHTML).

+  Dónde renderizarlo (elemento del DOM).

En el código del archivo `app.jsx`, la función `ReactDOM.render()` establecerá el innerHTML de `myDiv` (un elemento DOM) para ser lo que sea que contenga la variable `output`, muy similar a como funciona `innerHTML`:

```js
// Así es como lo harías sin React.
myDiv.innerHTML = '<span>Hello World!</span>';

// Así es como lo harías con React.
ReactDOM.render(<span>Hello World!</span>, myDiv);
```

## 📝 Instrucciones:

1. Tómate un tiempo para entender el archivo `app.jsx`.

2. Cambia el valor de la variable `output` por:

```jsx
<h1>Hello <strong>World!</strong></h1>
```