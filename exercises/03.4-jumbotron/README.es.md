# `03.4` Hero Component

Usando todo lo que has aprendido...

## 📝 Instrucciones:

1. Construye un componente `HeroSection` que reciba las siguientes propiedades:

```jsx
<HeroSection
  title="Welcome to React!"
  description="React is the most popular rendering library in the world"
  buttonLabel="Go to the official website"
  buttonURL="https://reactjs.org/"
/>
```

## 💻 Resultado Esperado:

![HeroSection](../../.learn/assets/03.4-1.png?raw=true)

## 💡 Pistas:

- Recuerda usar los prop-types para validar las propiedades de tu componente.

- Tu componente debería generar un HTML similar a este:

```html
<div class="bg-light p-5 m-5">
  <h1 class="display-4">Welcome to React!</h1>
  <p class="lead">React is the most popular rendering library in the world</p>
  <a class="btn btn-primary btn-lg" href="https://reactjs.org/" role="button"
    >Go to the official website</a
  >
</div>
```
