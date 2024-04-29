---
tutorial: "https://www.youtube.com/watch?v=Wnw2DmuZSX0"
---

# `01.2` Rendering from objects

Ahora, vamos a usar una variable más compleja para renderizar nuestro HTML, digamos que tenemos el siguiente Objeto JS con la información de un cliente:

```js
const customer = {
    first_name: 'Bob',
    last_name: 'Dylan'
};
```

Para obtener cualquier propiedad del objeto `customer` tenemos que usar el operador punto (`.`), así:

```js
console.log(customer.first_name); // Imprimirá "Bob" en la consola
```

## 📝 Instrucciones:

1. Abre el archivo `app.js` y crea el código necesario para hacer que tu archivo renderice la siguiente salida dentro del DOM:

```jsx
<div>
    <h1>My name is Bob</h1>
    <h2>My last name is Dylan</h2>
</div>
```
