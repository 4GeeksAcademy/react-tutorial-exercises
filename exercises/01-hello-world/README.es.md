---
tutorial: "https://youtu.be/watch?v=FQv38IJJvng"
---

# `01` Hello World

El mayor dolor de cabeza de los desarrolladores front-end es **trabajar con el DOM** para crear HTML dinámico, lo cual es algo que React.js hace mucho mejor.

React.js es una librería de renderizado hecha para optimizar el DOM: los programadores ahorran tiempo y el navegador es más rápido.

La librería viene con una función llamada **ReactDOM.render** que tú puedes ver como un reemplazo de la clásica [propiedad innerHTML](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML).

La función `ReactDOM.render` recibe dos parámetros:

+  Qué renderizar (el HTML interno o innerHTML).

+  Dónde renderizarlo (elemento del DOM).

Por ejemplo:

```jsx
import React from 'react'; // importar la librería de react
import ReactDOM from 'react-dom'; // importar react-dom para que react genere el html

// QUÉ: esta variable contiene todo el HTML que va a ser renderizado
let output = <span>James is 12 years old</span>

// DÓNDE: Un elemento del DOM que contendrá todo el html generado por react
const myDiv = document.querySelector('#myDiv');

                //qué   //dónde
ReactDOM.render(output, myDiv);
```

La función `ReactDOM.render` establecerá el innerHTML de `myDiv` (un elemento DOM) para ser lo que sea que contenga la variable `output`, muy similar a como funciona `innerHTML`:

```jsx
// Así lo harías sin react
myDiv.innerHTML = '<span>James is 12 years old</span>';

// Así se hace con react
ReactDOM.render(<span> James is 12 years old </span>, myDiv);
```
  
## 📝 Instrucciones:

1. Abre el archivo `01-hello-world/app.jsx` y tómate un tiempo para entenderlo.

2. Cambia la variable `output` por:

```jsx
<span>James is <strong>12</strong> years old</span>
```

