# `02.1` Mapeando arreglos a `<li>`

Usando el conocimiento que tienes del ejercicio anterior, ahora corrijamos la función `.map` nuevamente pero partiendo de un arreglo de objetos.

```js
const animals = [ { label: 'Horse' }, { label: 'Turtle' }, { label: 'Elephant' }, { label: 'Monkey' } ];
```

## 📝 Instrucciones:

1. Actualiza la [función .map](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) del código para crear un nuevo arreglo de `<li>`'s, donde cada `<li>` corresponda a un animal del arreglo original, 

2. Inclúyelos juntos en el sitio web.

## Resultado esperado:

```jsx
const animalsInHTML = [
  <li>Horse</li>,
  <li>Turtle</li>,
  <li>Elephant</li>,
  <li>Monkey</li>
];
```

## 💡 Pista:

+ Puedes usar el segundo parametro de la función map como una `key` para identificar de forma única cada elemento html.

## Resultado esperado:

Tu sitio web debería verse así: ![li's](../../.learn/assets/02.1-1.png?raw=true)
