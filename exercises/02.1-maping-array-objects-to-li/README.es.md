# `02.1` Mapeando arreglos a `<li>`

Usando el conocimiento que tienes del ejercicio anterior, ahora, vamos a corregir la función map nuevamente pero partiendo de un arreglo de objetos.

```js
const animals = [ { label: 'Horse' }, { label: 'Turtle' }, { label: 'Elephan' }, { label: 'Monkey' } ];
```

# :speech_balloon: Instrucciones

Actualiza la [función .map](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) del código para crear un nuevo arreglo de `<li>`, donde cada uno corresponda a un animal del arreglo original, el arreglo resultante debería ser algo como esto:

```jsx
const animalsInHTML = [
  <li>Horse</li>,
  <li>Turtle</li>,
  <li>Elephant</li>,
  <li>Monkey</li>
];
```

E inclúyelos juntos en el sitio web.

#### :bulb: Pista

- Puedes usar el segundo parametro de la función map como una `key` para identificar de forma única cada elemento html.

Tu sitio web debería verse así: ![LIs](https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/66b097ba2f1812e3cabcce38566b633edd991638/.learn/assets/02.1-1.png?raw=true)
