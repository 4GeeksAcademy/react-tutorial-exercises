# `03.3` Propiedades de un componente

La BootstrapCard que acabas de hacerestá [hard coded](https://www.quora.com/What-does-hard-coded-something-mean-in-computer-programming-context) por **Bob Dylan** únicamente.

Pero, ¿qué pasa si queremos reutilizar el componente `<BootstrapCard />` para **Paul Mccartney**?

## Usando propiedades en HTML

Cuando programas en HTML, constantemente estás usando propiedades de `<tag>` para modificar el comportamiento de la etiqueta, e.g.:

Cuando usas la etiqueta **anchor** (`<a>`) tienes que especificar la propiedad **href** así:

```html
<a href="http://google.com">Take me to google</a>
<a href="http://twitter.com">Take me to twitter</a>
```

:point_up: Aquí estoy reutilizando la etiqueta de anclaje para dos enlaces diferentes

## Usando propiedades en React.js

En React.js también podemos crear nuestras propias etiquetas y usar nuestras propias propiedades inventadas. Por ejemplo, podríamos especificar la propiedad `title` de nuestra `<BootstrapCard />` como esto:

```jsx
               //for Paul Mccartney
<BootstrapCard title="Paul Mccartney" />

               //for Bob Dylan
<BootstrapCard title="Bob Dylan" />
```

Nuestra función componente recibirá todas sus propiedades (incluyendo title) a través del primer parámetros que podemos llamar"props".

```jsx
const BootstrapCard = (props) => {
  return <div class="card">
    ...
      <h5 class="card-title">{props.title}</h5>
    ...
  </div>;
}
```

Par ser capaces de trabajar con propiedades de componentes, tienes que especificar qué propiedades recibirá el componente (nombre y tipo de dato de cada propiedad), [puedes leer más sobre prop-types aquí](https://reactjs.org/docs/typechecking-with-proptypes.html). e.g:

```js
// here we are specifying that this component will receive the property "title" and it will be a string.
BootstrapCard.propTypes = {
	title: PropType.string
};
```

# :speech_balloon: Instrucciones

Por favor, agrega/usa las propiedades `imageUrl`, `description`, `buttonUrl` y `buttonLabel` dentro de la función **BootstrapCard** y también en la etiqueta `<BootstrapCard />`. Hazlo de la misma manera en que `title` ha sido incluida en ambas.

#### :bulb: Ayuda

- Tienes que editar 3 partes del archivo (verifica los comentarios para ayudarte).
- El primer paso será reemplazar las cosas escritas directamente por propiedades del componente.
- El segundo paso será definir esas propiedades en el objeto prop-types en la línea 23, [aquí un video de cómo hacerlo](https://www.youtube.com/watch?v=oty7VGcXK44).
- El tercer paso será usar ReactDOM para añadir la declaración de la etiqueta `<BootstrapCard>` incluyendo las 5 propiedades y sus respectivos valores.
- No tienes que renderizar el componente muchas veces, solo una.
