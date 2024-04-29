---
tutorial: "https://youtu.be/FWk6mHpYeRo"
---

# `01.4` Building from arrays

Con JSX también puedes crear **arrays** de elementos HTML. Por ejemplo, si tenemos un arreglo de `<li>` podemos incluirlos todos dentro del documento a la vez, así:

```jsx
const namesInHTML = [
  <li>Bob Dust</li>,
  <li>Freddie Mercury</li>,
  <li>Shazam Nikola</li>,
  <li>Wilibin Walabam</li>
];

const content = <ul>{namesInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
```

El HTML resultante en el sitio web sería así:

```html
<div id="myDiv">
  <ul>
    <li>Bob Dust</li>
    <li>Freddie Mercury</li>
    <li>Shazam Nikola</li>
    <li>Wilibin Walabam</li>
  </ul>
</div>
```

Digamos que queremos que React renderice la siguiente salida en el documento:

```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link" href="#">Link to google.com</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link to facebook.com</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link to amazon.com</a>
  </li>
</ul>
```

## 📝 Instrucciones:

1. Actualiza el arreglo `navlinkItems` para crear el código de salida que queremos.

## 💡 Pistas:

+ Solo tienes que actualizar el arreglo `navlinkItems`, nada más.

+ React te pedirá usar keys en cada elemento del arreglo. Puedes leer más al respecto aquí: [https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key).

+ Recuerda usar `className` en lugar de `class`.
