---
tutorial: "https://www.youtube.com/watch?v=iMLO4utFkFU"
---

# `05` Adding styles to the components

La forma más recomendada de usar estilos en React es usando CSS-in-JS.

Básicamente, creas un objeto con tus estilos, así:

```js
const mySuperStyles = {
    color: "blue",
    fontSize: "14px",
    border: "1px solid black"
};
```

Y, entonces, puedes aplicar esos estilos a tu HTML, así:

```jsx
<div style={mySuperStyles}>I am an alert</div>
```

##  📝 Instrucciones:

1. El ejercicio actual tiene un objeto con estilos ya aplicados. Por favor, actualiza los estilos para lograr lo siguiente:

    + El tamaño de fuente tiene que ser `16px`.

    + El color de fondo (background color) tiene que ser negro (black).

    + Un borde amarillo (yellow) sólido de un `1px`.
