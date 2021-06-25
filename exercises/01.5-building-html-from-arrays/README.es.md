# `01.5` Construyendo desde arreglos

Con JSX también puedes crear **arrays o arreglos** de elementos HTML. Por ejemplo: si tenemos un arreglo de `<li>` podemos incluirlos todos dentro del documento a la vez, así:

```jsx
const namesInHTML = [
  <li>Bob Dust</li>,
  <li>Fredy Mercury</li>,
  <li>Shazam Nikola</li>,
  <li>Wilibin Walabam</li>
];

const content = <ul>{namesInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
```

El HTML resultanteen el sitio web sería así:
```html
<div id="myDiv">
  <ul>
    <li>Bob Dust</li>
    <li>Fredy Mercury</li>
    <li>Shazam Nikola</li>
    <li>Wilibin Walabam</li>
  </ul>
</div>
```

# :speech_balloon: Instrucciones

Digamos que queremos react para renderizar la siguiente salida en el documento:

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

Actualiza el arreglo `navlinkItems` para hacer el código de salida que queremos.

#### :bulb: Pista:

- Solo tienes que actualizar el arreglo `navlinkItems`, nada más.

- React te pedirá usar keys en cada elemento del arreglo, [puedes leer más al respecto aquí](https://reactjs.org/docs/lists-and-keys.html#keys).

- Recuerda usar `className` en lugar de `class`.