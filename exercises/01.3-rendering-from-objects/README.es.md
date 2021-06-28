# `01.3` Renderizando desde objetos

Ahora, vamos a usar una variable más compleja para renderizar nuestro HTML, digamos que tenemos el siguiente Objeto JS con la información de un cliente:

```js
const customer = {
    first_name: 'Bob',
    last_name: 'Dylan'
};
```

Para obtener cualquier propiedad del objeto `Customer` tenemos que usar el operador punto `.`, así:

```js
console.log(customer.first_name); // imprimirá "Bob" en la consola.
```

# :speech_balloon: Instrucciones

Abre el `app.jsx` y crea el código necesario para hacer que tu archivo renderice la siguiente salida dentro del DOM:

```jsx
<div>
    <h1>My name is Bob</h1>
    <h2>My last name is Dylan</h2>
</div>
```
