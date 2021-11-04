# `02` Mapeando un arreglo a `<li>`

Ahora, vamos a construir un arreglo dinámicamente. Digamos que tenemos un arreglo de animales:

```js
const animals = [ 'Horse', 'Turtle', 'Elephant', 'Monkey' ];
```

## :📝 Instrucciones:

1. Actualiza la [función .map](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) del código para crear un nuevo arreglo de `<li>` donde cada uno de ellos corresponde a un animal del arreglo original, el arreglo resultante debería ser algo como esto:

```jsx
const animalsInHTML = [
  <li>Horse</li>,
  <li>Turtle</li>,
  <li>Elephant</li>,
  <li>Monkey</li>
];
```

Luego, inclúyelos todos juntos en el sitio web.

## 💡 Pista:

+ Puedes usar el segundo parámetro de la función map como clave `key` para identificar de forma única cada elemento HTML.

## Resultado esperado:

Tu sitio web debería verse algo así: ![li's](../,,/.learn/assets/02-1.png?raw=true)
