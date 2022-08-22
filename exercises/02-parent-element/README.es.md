# `02` Parent Element

En React, todos los componentes y elementos deben estar envueltos por un elemento padre, de lo contrario, devolverá un error.

Si deseas representar varios elementos, todos ellos deben estar envueltos por otro elemento, que será su padre.

## Ejemplo:

Así es como renderizarías un título (`<h1>`), un párrafo (`<p>`) y una lista (`<li>`) usando React:

```js
const myDiv = document.querySelector("#mydiv");

const output = (<div>
    <h1>Hello World!</h1>
    <p>This is a paragraph</p>
    <li>
        <ol>First Element</ol>
        <ol>Second Element</ol>
        <ol>Third Element</ol>
    </li>
</div>)

ReactDOM.render(output, myDiv);
```

Todos los elementos están envueltos por `<div>`.

## 📝 Instrucciones:

1. Agrega los siguientes elementos a la salida, para renderizar todos juntos:

    + `<h1>Hello World!</h1>`

    + `<p>Este es el segundo elemento</p>`

    + `<strong>Este es el último elemento</strong>`

## 💡 Pista:

+ Recuerda que para representar muchos elementos, debes envolverlos en un elemento padre.