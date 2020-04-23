# `01.1` Hola Mundo

El mayor dolor de los desarrolladores front-end es **trabajar con el DOM** para crear HTML dinámico, algo que React.js hace de lo mejor.

React.js es una biblioteca de renderizado hecha para optimizar el DOM: Los programadores ahorran tiempo y el navegador es más rápido.

La biblioteca viene con una función llamada **ReactDOM.render** que tú puedes ver como un reemplazo de la clásica [propiedad innerHTML](https://www.w3schools.com/jsref/prop_html_innerhtml.asp).

`ReactDOM.render` recibe dos parámetros:

1. Qué renderizar (el HTML interno).
2. Dónde renderizarlo (elemento del DOM).

Por ejemplo:

```js
import React from 'react'; //import the react library
import ReactDOM from 'react-dom'; //import react-dom to make react generate html

// WHAT: This variable contains all the HTML that will be rendered
let output = <span>James is 12 years old</span>

// WHERE: A DOM element that will contain the entire react generated html
const myDiv = document.querySelector('#myDiv');

               //what           //where
ReactDOM.render(output, myDiv);
```

La función `ReactDOM.render` establecerá el innerHTML de `myDiv` (un elemento DOM) para ser lo que sea que contenga la variable `output`, muy similar a como funciona `innerHTML`:
```js
//This is how you would do it without react.
myDiv.innerHTML = '<span>James is 12 years old</span>';

// This is not you would do it with react.
ReactDOM.render(<span> James is 12 years old </span>, myDiv);
```
  
# :speech_balloon: Instrucciones

Abre el archivo `01.1-hello-world/index.js` y tómate un tiempo para entenderlo.
Entonces, cambia la variable __output__ a:
```<span> James is <strong>12</strong> years old </span>```
