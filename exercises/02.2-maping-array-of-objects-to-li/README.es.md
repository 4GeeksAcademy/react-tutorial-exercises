---
tutorial: "https://youtu.be/HvQCQW1qgzc"
---


# `02.2`  Mapping array of objects to `<li>`

Cuando estás mapeando un arreglo de datos para convertirlo en un arreglo HTML, tienes que especificar una **"función de mapeo"** que recibirá cada elemento del arreglo original y lo transformará e insertará en el nuevo arreglo. 

Por ejemplo:

```js
const originalData = [];

const mappingFunction = (item, index) => {
  // Devuelve algo en JSX
};

const htmlList = originalData.map(mappingFunction);
// La variable htmlList ahora contiene un nuevo arreglo
```

## 📝 Instrucciones:

1. Usa el componente [list-group de bootstrap](https://getbootstrap.com/docs/5.0/components/list-group/#basic-example) para renderizar una lista de planetas de un arreglo dado:

```js
const planets = [ 'Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune' ];
```

2. Usa la [función map()](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) y haz que la salida de tu algoritmo sea el siguiente HTML:

```jsx
<ul class="list-group m-5">
  <li class="list-group-item">Mars</li>
  <li class="list-group-item">Venus</li>
  <li class="list-group-item">Jupiter</li>
  <li class="list-group-item">Earth</li>
  <li class="list-group-item">Saturn</li>
  <li class="list-group-item">Neptune</li>
</ul>
```

3. Incluye todo en tu sitio web.

## 💻 Resultado esperado:

![resultado de list-group](../../.learn/assets/02.2-1.png?raw=true)
