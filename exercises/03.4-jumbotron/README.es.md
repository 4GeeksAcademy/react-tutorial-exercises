# `03.4` Jumbotron

## :pencil: Instrucciones:

Usando todo lo que has aprendido:

1. Construye un componente `Jumbotron` que reciba las siguientes propiedades:

```jsx
<Jumbotron
    title="Welcome to react"
    description="React is the most popular rendering library in the world"
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"
/>
```

Tu componente debería generar un HTML similar a este:

```html
<div class="jumbotron m-5">
  <h1 class="display-4">Welcome to react</h1>
  <p class="lead">React is the most popular rendering library in the world</p>
  <a class="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">Go to the official website</a>
</div>
```

### :bulb: Pista:

+ Recuerda usar los prop-types para validar las propiedades de tu componente.

### Resultado Esperado:

![Jumbotron](https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/66b097ba2f1812e3cabcce38566b633edd991638/.learn/assets/03.4-1.png?raw=true)
