---
tutorial: "https://youtu.be/PexVFLiJjE8"
---


# `02.1` Mapping array objects to `<li>`

Usando el conocimiento que tienes del ejercicio anterior, ahora corrijamos la función `map()` nuevamente, pero esta vez, partiendo de un arreglo de objetos.

```js
const animals = [ { label: 'Horse' }, { label: 'Turtle' }, { label: 'Elephant' }, { label: 'Monkey' } ];
```

## 📝 Instrucciones:

1. Actualiza la [función map()](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) del código para crear un nuevo arreglo de `<li>` donde cada uno de ellos corresponde a un animal del arreglo original, el arreglo resultante debería ser algo como esto:

```jsx
const animalsInHTML = [
  <li>Horse</li>,
  <li>Turtle</li>,
  <li>Elephant</li>,
  <li>Monkey</li>
];
```

2. Luego, inclúyelos todos juntos en el sitio web.

## 💡 Pista:

+ Puedes usar el segundo parámetro de la función map como una `key` para identificar de forma única cada elemento HTML.

## 💻 Resultado esperado:

![resultado esperado de li's](../../.learn/assets/02.1-1.png?raw=true)
