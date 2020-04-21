# `02.2` Mapeando funciones

Cuando estás mapeando un arreglo de datos para convertirlo en un arreglo HTML tienes que especificar una **"función de mapeo"** que recibirá cada elemento del arreglo original, lo transformará e insertará en el nuevo arreglo. Ej:

```js

const originalData = [];

const mappingFunction = (item, index) => {
  // return something in JSX.
};

const htmlList = originalData.map(mappingFunction);
// the htmlList variable now contains a new array.
```

# :speech_balloon: Instrucciones

Usa el componente [list-group de bootstrap](https://getbootstrap.com/docs/4.1/components/list-group/#basic-example) para renderizar una lista de planetas de un arreglo dado:

```js
const planets = [ 'Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune' ];
```

Usa la [función .map](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) y haz que la salida de tu algoritmosea el siguiente HTML:

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

E incluye todo junto en tu sitio web.

#### El sitio web resultante tiene que verse así:

![list-group](https://ucarecdn.com/2fa34a3a-33ba-4938-a69f-94d550ece79c/)
