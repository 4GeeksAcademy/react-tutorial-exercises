# `01.2` Hola JSX

JSX también te permite incluir variables en el HTML fácilmente. Por ejemplo, asumamos que tienes la siguiente variable disponible:

```js
let age = 12;
```

Si quieres incluir tu variable en tu código HTML dinámicamente, puedes hacerlo así:

```jsx
let output = <span> James is { age } years old </span>
```

Fíjate en la posición de las llaves `{` y `}` envolviendo la variable.

Después, podemos renderizar todo en contenido en el  sitio web usando `ReactDOM.render` así:

```jsx
// usa react-dom para renderizarlo en el DOM
import ReactDOM from 'react-dom';
               //renderizar output    //dentro del innerHTML de #myDiv
ReactDOM.render(output,             document.querySelector('#myDiv'));
```

El documento HTML del sitio web resultante se verá así:

```html
<div id="myDiv">
    <span>James is 12 years old</span>
</div>
```

Básicamente, ahora somos capaces de mezclar HTML y JS en el mismo documento sin tener que concatenar y usar strings. 😃  ¡Increíble! 😠 ¿Verdad?

## 📝 Instrucciones:

El archivo app.jsx tiene una variable llamada `name` que puede contener un nombre.

1. Por favor, incluye esa variable dentro del resultado(output) de react, reemplaza la variable por el `James`.